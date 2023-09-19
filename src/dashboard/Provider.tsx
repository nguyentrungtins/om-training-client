import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { socketConfig } from "@/utils/socket";
import Cookies from "js-cookie";
import { getToken } from "@/utils/getToken";
interface DashboardProviderProps {
  children: React.ReactNode;
}

interface ProviderValues {
  sidebarOpen?: boolean;
  toggleSidebar?: () => void;
  closeSidebar?: () => void;
}

// create new context
const Context = React.createContext<ProviderValues>({});

export function DashboardProvider({ children }: DashboardProviderProps) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const router = useRouter();
  const { data, status } = useSession();
  const [socket, setSocket] = useState<any>();
  useEffect(() => {
    const connectWebSocket = async (data: any) => {
      try {
        // Perform asynchronous operations here
        const token = await getToken(data);
        const socket = await socketConfig(token);
        setSocket(socket);
        socket.connect();
      } catch (error) {
        console.error("Error connect websocket:", error);
      }
    };

    if (!socket && data) {
      connectWebSocket(data);
    }

    return () => {
      if (socket) socket.disconnect();
    };
  }, [data, status]);

  useEffect(() => {
    function forceLogout(value: any) {
      signOut({ callbackUrl: "/login" });
    }
    if (socket) {
      socket.on("force-reload", forceLogout);
    }

    return () => {
      if (socket) socket.off("force-reload", forceLogout);
    };
  }, [socket]);

  const toggleSidebar = React.useCallback(() => {
    setSidebarOpen((prevState) => !prevState);
  }, []);

  const closeSidebar = React.useCallback(() => {
    setSidebarOpen(false);
  }, []);

  // set the html tag overflow to hidden
  React.useEffect(() => {
    document.documentElement.style.overflow = "hidden";
  }, []);

  // close Sidebar on route changes when viewport is less than 1024px
  React.useEffect(() => {
    document.documentElement.style.overflow = "hidden";
  }, []);

  // close side navigation when route changes
  React.useEffect(() => {
    if (sidebarOpen) {
      router.events.on("routeChangeStart", () => setSidebarOpen(false));
    }

    return () => {
      if (sidebarOpen) {
        router.events.off("routeChangeStart", () => setSidebarOpen(false));
      }
    };
  }, [sidebarOpen, router]);

  return (
    <Context.Provider value={{ sidebarOpen, toggleSidebar, closeSidebar }}>
      {children}
    </Context.Provider>
  );
}

// custom hook to consume all context values { sidebarOpen, toggleSidebar, closeSidebar }
export function useDashboardContext() {
  return React.useContext(Context);
}

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [urlRiderectd, setUrlRedirected] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (status !== "authenticated" && urlRiderectd === true) {
      router.push("login");
    }
  }, [urlRiderectd]);
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      setUrlRedirected(true);
    },
  });
  return {
    userData: session,
    authStatus: status,
  };
};
export default useAuth;

import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
const URL =
  process.env.SERVER_URL === "production" ? undefined : "http://localhost:8090";

export const socketConfig = async (token: any) => {
  const socket = io(URL as string, {
    autoConnect: false,
    extraHeaders: {
      ["Authorization"]: `Baerer ${token}`,
    },
  });
  return socket;
};

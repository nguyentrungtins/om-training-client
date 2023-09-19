import { encode } from "next-auth/jwt";
import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
const SECRET =
  process.env.NEXT_PUBLIC_NEXTAUTH_SECRET === "production"
    ? undefined
    : "nguyentrungtin";
const encoding = async (payload: any, secret: string) => {
  const encoded = await encode({ token: payload, secret });
  return encoded;
};
export const getToken = async (session: any) => {
  const payload = session?.user?.token;
  const token = await encoding(payload, SECRET as string);
  return token;
};

import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

export function Logout() {
  const { pathname } = useRouter();
  return (
    <button
      type="button"
      className="mx-5 mb-3 flex h-10 items-center justify-center gap-5 rounded-lg bg-primary-800 text-white hover:bg-primary-700 hover:text-white"
      onClick={() => signOut({ callbackUrl: "/login" })}
    >
      Logout
    </button>
  );
}

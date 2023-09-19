import { useSession } from "next-auth/react";
import { Content } from "../components/Content";
import { useEffect } from "react";

export default function HomePage() {
  return <Content title="Google" />;
}

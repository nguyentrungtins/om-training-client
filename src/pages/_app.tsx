import Head from "next/head";
import "tailwindcss/tailwind.css";
import { DashboardLayout } from "@/dashboard/Layout";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { wrapper } from "@/redux/store";
const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>T I N . N</title>
        <link rel="shortcut icon" href="/images/LogoSmall.svg" />
      </Head>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </SessionProvider>
  );
};
export default wrapper.withRedux(MyApp);

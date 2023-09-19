import { getAccount } from "@/api/getAccount";
import { RBAC } from "@/components/RBAC/index";
import { GetServerSideProps } from "next";

import { CommonResponse } from "@/types/response.interface";
import { res2json } from "@/utils/res2json";
import useSWR from "swr";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setTokenState } from "@/redux/tokenSlice";
import { useEffect } from "react";

interface PageProps {
  data: CommonResponse;
}

const fetcher = (url: string, headers: Record<string, string>) => {
  return axios.get(url, { headers }).then((res) => res.data);
};

export default function ProjectsPage({ data }: PageProps) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTokenState(data.token));
  }, []);
  const prefixURL = process.env.NEXT_PUBLIC_SERVER_URL;

  const {
    data: userData,
    error,
    isLoading,
  } = useSWR(
    `${prefixURL}/user/all`,
    (url) => fetcher(url, { Authorization: `Bearer ${data.token}` }),
    { fallbackData: data }
  );
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (userData)
    return <RBAC title="Role Base Access Control" data={userData} />;
}

export const getServerSideProps: GetServerSideProps<PageProps> = async ({
  req,
  res,
}) => {
  // Access request and response objects
  // Perform server-side operations and fetch data
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=60"
  );

  let data = null;
  const token = req.cookies["next-auth.session-token"];
  try {
    const accounts = await getAccount(token as string);
    if (accounts) {
      data = await res2json(accounts);
      data.token = token;
    }
  } catch (error) {
    console.error("Error went send api get all user to server!!!");
  }
  return {
    props: {
      data: data,
    },
  };
};

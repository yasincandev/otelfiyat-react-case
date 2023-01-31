import "@/styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { Layout } from "@/components";
import Head from "next/head";
import "swiper/css/bundle";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
  title: string;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.png' />
        <title>{Component.title}</title>
      </Head>
      <Layout title={Component.title}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

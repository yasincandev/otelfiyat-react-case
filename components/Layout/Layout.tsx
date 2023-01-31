import React from "react";
import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

type LayoutProps = {
  title: string;
  children: React.ReactNode;
};

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <div className=' min-h-screen flex flex-col'>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

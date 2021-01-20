import React from "react";
import Head from "next/head";
import { LayoutType } from "interfaces/posts";

const Layout = ({ children, title = "Post App" }: LayoutType) => {
  return (
    <>
      <Head>
        <title>{title} | DevelopsToday</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;

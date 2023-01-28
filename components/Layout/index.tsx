import Head from "next/head";
import { FC } from "react";
import { Footer, Meta, Navbar, SideNav } from "..";

const Index: FC = ({ children }) => {
  return (
    <>
      <Meta />

      <Navbar />
      <SideNav />
      {children}
      <Footer />
    </>
  );
};

export default Index;

import React from "react";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

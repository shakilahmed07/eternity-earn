import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import Responsive from "./Responsive";

const Layout = ({ children }) => {
  return (
    <main style={{ minWidth: "380px" }}>
      <Responsive />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;

import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <main style={{ minWidth: "380px" }}>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;

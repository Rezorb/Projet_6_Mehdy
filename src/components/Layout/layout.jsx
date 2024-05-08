import React from "react";
import "./Layout.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout({ children, className = "" }) {
  return (
    <div className={`layout_container ${className}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

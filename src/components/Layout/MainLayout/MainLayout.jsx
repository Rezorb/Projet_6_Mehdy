import React from "react";
import "./MainLayout.scss"
import Banner from "../../Banner/Banner";

const MainLayout = ({ children }) => {
  return (
    <main className="main">
      <Banner />
      {children}
    </main>
  );
};

export default MainLayout;

import React from "react";
import "./About.css";
import "../Home/Home.css";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Collapse from "../../components/Collapse/Collapse";

function About() {
  return (
    <>
      <div className="about_gap">
        <div className="header_container">
          <Header />
          <Navbar />
        </div>
        <Banner />
        <main className="collapse">
          <Collapse />
          <Collapse />
          <Collapse />
          <Collapse />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default About;

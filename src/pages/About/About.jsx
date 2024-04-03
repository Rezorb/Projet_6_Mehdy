import React from "react";
import "./About.css";
import "../Home/Home.css";
import Logo from "../../components/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Collapse from "../../components/Collapse/Collapse";
import CollapseData from "../../Data/CollapseData.json"

function About() {
  return (
    <>
      <div className="about_gap">
        <div className="header_container">
          <Logo />
          <Navbar />
        </div>
        <Banner />
        <main className="collapse">

          {CollapseData.map((collapse) => (

            <Collapse key={collapse.id} title={collapse.title} content={collapse.content} />

          ))}

        </main>
        <Footer />
      </div>
    </>
  );
}

export default About;

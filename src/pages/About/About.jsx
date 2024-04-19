import React from "react";
import "./About.scss";
import "../Home/Home.scss";
import Collapse from "../../components/Collapse/Collapse";
import CollapseData from "../../Data/CollapseData.json";
import Header from "../../components/Header/Header";
import MainLayout from "../../components/Layout/MainLayout/MainLayout";
import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <>
      <div className="about_gap">
        <Header />
        <MainLayout>
          <div className="collapses_container">
            {CollapseData.map((collapse) => (
              <Collapse
                key={collapse.id}
                title={collapse.title}
                content={collapse.content}
              />
            ))}
          </div>
        </MainLayout>
        <Footer />
      </div>
    </>
  );
}

export default About;

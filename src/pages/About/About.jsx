import React from "react";
import "./About.scss";
import "../Home/Home.scss";
import Collapse from "../../components/Collapse/Collapse";
import CollapseData from "../../Data/CollapseData.json";
import MainLayout from "../../components/Layout/MainLayout/MainLayout";

function About() {
  return (
    <>
      <div className="about_gap">
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
      </div>
    </>
  );
}

export default About;

import React from "react";
import AboutUsCSS from "./AboutUs.module.css";
import NewHeader from '../components/NewHeader'
import Subtitle from "../components/Subtitle";
import Footer from "../components/Footer";
import NewTimeline from "../components/AboutUs/newTimeline";
import AboutSmartooth from "../components/AboutUs/AboutSmartooth";
import Members from "../components/AboutUs/Members";
import NewMembers from '../components/AboutUs/NewMembers'
// import Timeline from "../components/AboutUs/Timeline";

function AboutUs() {
  return (
    <div className={AboutUsCSS.content}>
      <div className={AboutUsCSS.ref}>
        {/* <img src="img/aboutus/aboutUs.png" alt="ex" /> */}
      </div>
      <NewHeader />
      <br />
      <AboutSmartooth />
      <Subtitle text="Smartooth members" />
      <NewMembers />
      <NewTimeline/>
      <Footer />
    </div>
  );
}
export default AboutUs;

import React from "react";
import AboutSection from "../about/About";
import Copyright from "../copyright/Copyright";
import Footer from "../footer/Footer";
import MissionAbout from "../missionAbout/MissionAbout";
import Navbar from "../navbar/Navbar";
import Team from "../team/Team";
import WorkingAbout from "../workingAbout/WorkingAbout";

const AboutPage = () => {
    return (
        <>
            <Navbar/>
            <AboutSection/>
            <MissionAbout/>
            <WorkingAbout/>
            <Team/>
            <Footer/>
            <Copyright/>
        </>
    )
}


export default AboutPage;
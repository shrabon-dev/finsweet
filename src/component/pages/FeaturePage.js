import React from "react";
import Brand from "../brand/Brand";
import Copyright from "../copyright/Copyright";
import FeatureBanner from "../featureBanner/FeatureBanner";
import FirstClient from "../firstClient/FirstClient";
import Footer from "../footer/Footer";
import Frequently from "../frequently/Frequently";
import Navbar from "../navbar/Navbar";
import OurMission from "../ourmission/OurMission";

const FeaturePage = () =>{
    return (
        <>
            <Navbar/>
            <FeatureBanner/>
            <Brand/>
            <FirstClient/>
            <OurMission/>
            <Frequently/>
            <Footer/>
            <Copyright/>
        </>
    )
}
export default FeaturePage;
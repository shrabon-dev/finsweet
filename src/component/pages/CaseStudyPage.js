import React from "react";
import Navbar from "../navbar/Navbar";

import Footer from '../footer/Footer';
import Copyright from '../copyright/Copyright';
import { CaseStudyPart } from "../caseStudyPart/CaseStudyPart";

export const CaseStudyPage = () =>{
    return (
        <>

            <Navbar/>
            <CaseStudyPart/>
            <Footer/>
            <Copyright/>
        </>
    )
}
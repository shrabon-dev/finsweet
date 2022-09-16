import React from "react";
import Copyright from "../copyright/Copyright";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { WorkItem } from "../workitem/WorkItem";
import { WorkTitle } from "../workTItle/workTitle";


export const WorkPage = () =>{
    return (
        <>
           <Navbar/>
           <WorkTitle/>
           <WorkItem/>
           <Footer/>
           <Copyright/>
        </>
    )
}
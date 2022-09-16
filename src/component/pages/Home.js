import React from "react";
import Navbar from "../navbar/Navbar"
import Banner from "../banner/Banner";
import Work from "../work/Work";
import Project from '../project/Project';
import Features from '../features/Features';
import ClientSay from '../clientSay/ClientSay';
import Frequently from '../frequently/Frequently';
import Contact from '../contact/Contact';
import Blog from '../blog/Blog';
import Footer from '../footer/Footer';
import Copyright from '../copyright/Copyright';

const HomePage = () =>{
    return (
        <>
      <Navbar />
      <Banner/>
      <Work/>
      <Project/>
      <Features/>
      <ClientSay/>
      <Frequently/>
      <Contact/>
      <Blog/>
      <Footer/>
      <Copyright/>
      </>
    )
}

export default HomePage;

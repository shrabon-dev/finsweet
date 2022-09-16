import React from "react";
import Navbar from "../navbar/Navbar"
import Footer from '../footer/Footer';
import Copyright from '../copyright/Copyright';
import { BlogSection } from "../blogSection/BlogSection";



export const BlogPage = () => {
    return (
        <>
            <Navbar/>
            <BlogSection/>
            <Footer/>
            <Copyright/>
        </>
    )
}


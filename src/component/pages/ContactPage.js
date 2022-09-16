import React from "react";
import Navbar from "../navbar/Navbar"
import Footer from '../footer/Footer';
import Copyright from '../copyright/Copyright';
import ContactForm from "../contactForm/ContactForm";


const ContactPage = () => {
    return (
        <>
            <Navbar/>
            <ContactForm/>
            <Footer/>
            <Copyright/>
        </>
    )
}

export default ContactPage;
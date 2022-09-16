import React from "react";
import "./footer.css";

const Footer = () =>{
    return (
        <>
            <footer className="footer">
        <div className="container footer__container--position">
            <div className="row">
                <div className="footer__logo">
                    <img src="./images/logo.png" alt="logo.png"/>
                    <p>We are always open to discuss your project and improve your online presence.</p>

                </div>
                <div className="footer__text">
                    <h2>Lets Talk!</h2>
                    <p>We are always open to discuss your project, improve your online presence and help with your UX/UI
                        design challenges.</p>
                    <div className="footer__social_links">
                        <a href=""><i className="fa-brands fa-facebook"></i></a>
                        <a href=""><i className="fa-brands fa-twitter"></i></a>
                        <a href=""><i className="fa-brands fa-instagram"></i></a>
                        <a href=""><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer__contact">
                <div className="footer__contact_mail">
                    <h5>Email me at</h5>
                    <a href="mailto:contact@website.com">contact@website.com</a>
                </div>
                <div className="footer__contact_call">
                    <h5>Call us</h5>
                    <a href="tel:+0927 6277 28525">0927 6277 28525</a>
                </div>
            </div>
        </div>
    </footer>
        </>
    )
}

export default Footer;
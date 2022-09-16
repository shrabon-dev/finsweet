import React from "react";
import "./contact.css";

const Contact = () =>{
    return (
  
          <div className="contact">
           <div className="container">
            <div className="row">
                <div className="contact__content">
                    <img src="./images/contact.png" alt="contact.png"/>
                    <div className="contact__overlay">
                        <h2>Building stellar websites for early startups</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua ut enim.</p>
                    </div>
                </div>
                <div className="contact__form">
                    <h2>Send inquiry</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore.</p>
                    <form>
                        <input type="text" name="" placeholder="your name"/>
                        <input type="email" name="" placeholder="email"/>
                        <input type="url" name="" placeholder="Paste your Figma design URL"/>
                        <button type="submit">Send an Inquiry</button>
                    </form>
                    <a href="#">Get in touch with us <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Contact;
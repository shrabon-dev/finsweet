import React from "react";
import "./contactform.css"

const ContactForm = () =>{
    return(
        <div className="contact_section">
        <div className="title">
            <h4>Contact Us</h4>
            <p>When you’re ready to go beyond 
                prototyping in Figma, Webflow’s ready to help you bring your </p>
        </div>

        <div className="contact_form_part">

            <form action="#" method="post">
                <div className="space-between">
                    <div className="input">
                        <label for="">Name</label>
                        <input type="text" placeholder="Enter your name"/>
                    </div>
                    <div className="input">
                        <label for="">Email</label>
                        <input type="text" placeholder="Enter your email"/>
                    </div>
                </div>
                <div className="input">
                    <label for="">Subject</label>
                    <input type="text" placeholder="Enter your subject"/>
                </div>
                <div className="input">
                    <label for="">Message</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
     
        </div>

    </div>
    )
}

 export default ContactForm;
import React from 'react';
import "./banner.css"
import { Link } from "react-router-dom";

let Banner = ()=>{
     return(
        <>
        <div className="banner">
        <div className="container">
            <div className="row">
                <div className="banner_content">
                    <h1>Building stellar websites for early startups</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <div className="banner_content_btn">
                        <Link to='/work' className="banner_content_btn_one">View our work</Link>
                        <a href="#" className="banner_content_btn_two">View Pricing <i
                                className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>

                <div className="banner_img">
                    <img src="./images/banner.png" alt="banner.png" />
                </div>
            </div>
        </div>
    </div>
        </>
     )
}

export default Banner;
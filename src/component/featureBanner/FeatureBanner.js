import React from "react";

import "./featurebanner.css"

const FeatureBanner = () =>{
    return(
        <>
            <div className="banner">
        <div className="container">
            <div className="row">
                <div className="banner_content">
                    <h1>All the features you need</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <div className="banner_content_btn">
                        <a href="#" className="banner_content_btn_one">View Pricing</a>
                    </div>
                </div>

                <div className="banner_img">
                    <img src="../images/feature/banner.png" alt="banner.png"/>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default FeatureBanner;
import React from "react";
import "./about.css"


const AboutSection = () =>{
    return (
        <div className="about">
        <div className="container">
            <div className="about_part">
                <div className="about_part_one">
                    <h6>About us</h6>
                    <h3>Our designs solve problems</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.</p>
                </div>
                <div className="about_part_two">
                    <img src="./images/about/group-of-people-sitting-indoors-3184360.png" alt=""/>
                </div>
            </div>
            <div className="about_our_goal">
                <div className="about_our_goal_one">
                    <div className="about_part_one_text">
                        <h6>Who we are</h6>
                        <h3>Goal focussed</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
                <div className="about_our_goal_two">
                    <div className="about_part_one_text goal">
                        <h3>Continuous improvement</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
            <div className="about_img_part">
                <img src="./images/about/man-in-blue-jacket-looking-at-white-board-7413916.png" alt=""/>
            </div>
            <div className="process">
                <div className="process_head">
                    <h3>The process we follow</h3>
                </div>
                <div className="proces_part">
                   <div className="process_part_one">
                     <div className="prorecess_imem"></div>
                     <div className="prorecess_img">
                         <img src="./images/about/Line Indicator.png" alt=""/>
                     </div>
                     <h4>Planning</h4>
                     <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                   </div>
                   <div className="process_part_one">
                     <div className="prorecess_imem"></div>
                     <div className="prorecess_img">
                         <img src="./images/about/Line Indicator.png" alt=""/>
                     </div>
                     <h4>Planning</h4>
                     <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                   </div>
                   <div className="process_part_one">
                     <div className="prorecess_imem"></div>
                     <div className="prorecess_img">
                         <img src="./images/about/Line Indicator.png" alt=""/>
                     </div>
                     <h4>Planning</h4>
                     <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                   </div>
                   <div className="process_part_one">
                     <div className="prorecess_imem"></div>
                     <div className="prorecess_img">
                         <img src="./images/about/Line Indicator.png" alt=""/>
                     </div>
                     <h4>Planning</h4>
                     <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                   </div>
                 
                </div>
            </div>
        </div>
    </div>
    )
}

export default AboutSection;
import React from "react";
import { Link } from "react-router-dom";
import "./caseStudyPart.css";

export const CaseStudyPart = () =>{
      return (
        <>
    <div class="finsweet_design">
    <div class="container">
        <div class="case_all_part">
            <div class="case_head_part">
                <h5>Web design and development</h5>
                <h3>Finsweet Design case studies</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse.</p>
                <div class="case_img">
                    <img src="images/image 15 (5).png" alt=""/>
                </div>
            </div>
            <div class="case_client_service">
                <div class="case_client_first_service">
                    <h5>Client</h5>
                    <p>facebook.com</p>
                </div>
                <div class="case_client_first_service">
                    <h5>Service</h5>
                    <p>Product Design</p>
                </div>
                <div class="case_client_first_service">
                    <h5>Deliverable</h5>
                    <p>UI Screens, UX Flow & Prototype</p>
                </div>
            </div>
            <div class="about_project">
                <div class="about_project_text">
                    <h3>About the project</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div class="about_project_list">
                        <h4><i class="fa-solid fa-circle"></i></h4>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
                    </div>
                    <div class="about_project_list">
                        <h4><i class="fa-solid fa-circle"></i></h4>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
                    </div>
                    <div class="about_project_list">
                        <h4><i class="fa-solid fa-circle"></i></h4>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
                    </div>
                    <div class="about_project_list">
                        <h4><i class="fa-solid fa-circle"></i></h4>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
                    </div>
                    <div class="about_project_ing">
                        <img src="images/image 15 (6).png" alt=""/>
                    </div>
                    <h3>How we do it</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis
                        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div class="about_project_list">
                        <h4><i class="fa-solid fa-circle"></i></h4>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
                    </div>
                    <div class="about_project_list">
                        <h4><i class="fa-solid fa-circle"></i></h4>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
                    </div>
                    <div class="about_project_list">
                        <h4><i class="fa-solid fa-circle"></i></h4>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
                    </div>
                    <div class="about_project_list">
                        <h4><i class="fa-solid fa-circle"></i></h4>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
                    </div>
                    <div class="about_type_item">
                        <button>Keywords</button>
                        <button>Design</button>
                        <button>UI/UX</button>
                        <button>Wireframing</button>
                        <button>Branding</button>
                        <button>Development</button>
                        <button>webflow</button>
                    </div>
                    <div class="workout_last_text">
                        <div class="priceng_plan_heading portfolio_head">
                            <h3>Let's build something great together</h3>
                            <p>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life
                                —
                                without
                                coding them.</p>
                            <Link to="/contuct-us">contact us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        </>
      )
}
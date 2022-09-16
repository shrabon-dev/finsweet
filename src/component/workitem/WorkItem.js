import React from "react";
import { Link } from "react-router-dom";
import "./workItem.css";





export const WorkItem = () =>{
    return (
        <>
          <div className="workout">
    <div className="container">
        <div className="workout_head">
             <button>All</button>
             <button>UI Design</button>
             <button>Webflow Design</button>
             <button>Figma Design</button>
        </div>
        <div className="workout_plan">
            <div className="workout_plan_one">
                <div className="workout_img_part">
                     <img src="./images/image 15.png" alt=""/>
                </div>
                <h3>Template 1</h3>
                <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to
                twinkle.</p>
                <Link to="/case-study">View Portfolio <span><i className="fa-solid fa-arrow-right-long"></i></span></Link>
            </div>
            <div className="workout_plan_one">
                <div className="workout_img_part worout_img_two">
                     <img src="./images/image 15.png" alt=""/>
                </div>
                <h3>Template 2</h3>
                <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to
                twinkle.</p>
                <Link to="/case-study">View Portfolio <span><i className="fa-solid fa-arrow-right-long"></i></span></Link>
            </div>
        </div>
        <div className="workout_plan workout_plan_two">
            <div className="workout_plan_one">
                <div className="workout_img_part worout_img_three">
                     <img src="./images/image 15 (2).png" alt=""/>
                </div>
                <h3>Template 3</h3>
                <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to
                twinkle.</p>
                <Link to="/case-study">View Portfolio <span><i className="fa-solid fa-arrow-right-long"></i></span></Link>
            </div>
            <div className="workout_plan_one">
                <div className="workout_img_part worout_img_four">
                     <img src="./images/image 15 (3).png" alt=""/>
                </div>
                <h3>Template 4</h3>
                <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to
                twinkle.</p>
                <Link to="/case-study">View Portfolio <span><i className="fa-solid fa-arrow-right-long"></i></span></Link>
            </div>
        </div>
        <div className="workout_plan workout_plan_two">
            <div className="workout_plan_one">
                <div className="workout_img_part worout_img_five">
                    <img src="./images/image 15 (4).png" alt=""/>
                </div>
                <h3>Template 5</h3>
                <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to
                twinkle.</p>
                <Link to="/case-study">View Portfolio <span><i className="fa-solid fa-arrow-right-long"></i></span></Link>
            </div>
            <div className="workout_plan_one">
                <div className="workout_img_part worout_img_four">
                     <img src="./images/image 15 (3).png" alt=""/>
                </div>
                <h3>Template 6</h3>
                <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to
                twinkle.</p>
                <Link to="/case-study">View Portfolio <span><i className="fa-solid fa-arrow-right-long"></i></span></Link>
            </div>
        </div>
        <div className="workout_last_text">
            <div className="priceng_plan_heading portfolio_head">
                <h3>Let's build something great together</h3>
                <p>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life —
                    without
                    coding them.</p>
                    <Link to="/contact">contact us</Link>
            </div>
        </div>
    </div>
</div>
        </>   
    )
}
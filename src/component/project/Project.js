import React from 'react';
import "./project.css";

const Project = () =>{
    return (
        <>
        <div className="projects">
        <div className="container">
            <div className="row row--flex">
                <div className="projects__title">
                    <h2>View our projects</h2>
                </div>
                <div className="projects__btn">
                    <a href="#">View More <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div className="row">
                <div className="projects__focus">
                    <img src="./images/project_1.png" alt="project_1.png"/>
                    <div className="projects__focus_overlay">
                        <h2>Workhub office Webflow Webflow Design</h2>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                        <a href="#">View project <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="projects__extra">
                    <div className="projects__extra_one">
                        <img src="./images/project_2.png" alt="project_2.png"/>
                        <div className="projects__extra_one_overlay">
                            <h2>Unisaas Website
                                Design</h2>
                            <a href="#">View portfolio <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="projects__extra_two">
                        <img src="./images/project_3.png" alt="project_3.png"/>
                        <div className="projects__extra_two_overlay">
                            <h2>Unisaas Website
                                Design</h2>
                            <a href="#">View portfolio <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Project;
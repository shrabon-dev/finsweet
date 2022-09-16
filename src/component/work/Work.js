import React from "react";
import Workitem from "../reuseableComponent/Workitem";
import "./work.css";

const Work = () =>{
    return (
        <div className="work_process">
        <div className="container">
            <div className="row">
                <div className="work_process__content">
                    <h2>How we work</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <a href="#">Get in touch with us <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="work_process__flow">
                    <Workitem step='01' title='Strategy' info='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'/>
                    <Workitem step='02' title='Wireframing' info='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'/>
                    <Workitem step='03' title='Design' info='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'/>
                    <Workitem step='04' title='Development' info='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'/>

                </div>
            </div>
        </div>
    </div>
    )
}

export default Work;
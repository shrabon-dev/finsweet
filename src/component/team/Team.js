import React from "react";
import "./team.css";


const Team = () =>{
    return (
        <>
           <div className="team">
        <div className="container">
            <div className="team_part">
                <div className="team_one_part">
                    <div className="team_img">
                        <img src="./images/team/team.png" alt="./images/team/team.png"/>
                        <div className="team_img_overlay">
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        </div>
                    </div>
                    <h3>Simon Adams</h3>
                    <h4>CEO</h4>
                </div>
                <div className="team_one_part">
                    <div className="team_img">
                        <img src="./images/team/team2.png" alt="./images/team/team.png"/>
                        <div className="team_img_overlay">
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        </div>
                    </div>
                    <h3>Rush Adams</h3>
                    <h4>CEO</h4>
                </div>
                <div className="team_one_part">
                    <div className="team_img">
                    <img src="./images/team/team.png" alt="./images/team/team.png"/>

                        <div className="team_img_overlay">
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        </div>
                    </div>
                    <h3>Kush Adams</h3>
                    <h4>CEO</h4>
                </div>
                <div className="team_one_part">
                    <div className="team_img">
                    <img src="./images/team/team2.png" alt="./images/team/team.png"/>
                        <div className="team_img_overlay">
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        </div>
                    </div>
                    <h3>Bush Gaym</h3>
                    <h4>CEO</h4>
                </div>
             
            </div>
        </div>
    </div>
        </>
    )
}

export default Team;
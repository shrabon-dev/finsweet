import React from "react";
import "./workingAbout.css"


const WorkingAbout = () =>{
    return (
       <>
       <div className="working">
        <div className="container">
            <div className="working_heading">
                <h3>The benefits of working with us</h3>
            </div>
          <div className="design_hole_part design_separate">
            <div className="design_one working_first_one">
                <a href=""><i className="fa-solid fa-circle-check"></i></a>
                <h3>Uses Client First</h3>
                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi.
                    Pellentesque et
                    velit aliquam sed mi.</p>
            </div>
            <div className="design_one working_first_one">
                <a href=""><i className="fa-solid fa-circle-check"></i></a>
                <h3>Uses Client First</h3>
                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi.
                    Pellentesque et
                    velit aliquam sed mi.</p>
            </div>
            <div className="design_one working_first_one">
                <a href=""><i className="fa-solid fa-circle-check"></i></a>
                <h3>Uses Client First</h3>
                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi.
                    Pellentesque et
                    velit aliquam sed mi.</p>
            </div>
           </div>
           <div className="working_last_part">
               <div className="work_last_item_one">
                  <h4>100.000+</h4>
                  <h6>Finsweet Users</h6>
               </div>
               <div className="work_last_item_two">
                   <div className="work_client">
                    <img src="./images/work/Logo 1.png" alt=""/>
                   </div>
                   <div className="work_client">
                    <img src="./images/work/Logo 2.png" alt=""/>
                   </div>
                   <div className="work_client">
                    <img src="./images/work/Logo 3.png" alt=""/>
                   </div>
                   <div className="work_client">
                    <img src="./images/work/Logo 4.png" alt=""/>
                   </div>
                   <div className="work_client">
                    <img src="./images/work/Logo 5.png" alt=""/>
                   </div>
               </div>
           </div>
        </div>
    </div>
       </>
    )
}

export default WorkingAbout;
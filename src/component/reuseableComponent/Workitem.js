import React from "react";

const Workitem = (props) =>{
    return (
        <>
            <div className="work_process__item">
                <div className="work_process__step">{props.step}</div>
                <h2>{props.title}</h2>
                <p>{props.info}</p>
            </div>
        </>

    )
}

export default Workitem;
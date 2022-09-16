import React from "react";

const FeatureItem = (props) => {
    return (
        <div className="features__item">
        <i className={props.icon}></i>
        <h2>{props.title}</h2>
        <p>{props.info}</p>
         </div>
        )
}

export default FeatureItem;
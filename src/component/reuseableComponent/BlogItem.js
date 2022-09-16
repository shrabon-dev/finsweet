import React from "react";
import { Link } from "react-router-dom";


const BlogItem = (props) => {
    return (
        <div className="blog__single">
          <img src={props.img} alt={props.img}/>
          <h6>{props.date}</h6>
          <h2>{props.heading}</h2>
          <p>{props.info}</p>
          <Link to='/read-blog'>Read More <i className="fa-solid fa-arrow-right"></i></Link>
       </div>
    )
}

export default BlogItem;
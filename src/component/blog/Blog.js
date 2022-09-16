import React from "react";
import BlogItem from "../reuseableComponent/BlogItem";
import "./blog.css";

const Blog = () => {
    return (
        <div className="blog">
        <div className="container">
            <div className="blog__title">
                <h2>Our blog</h2>
            </div>
            <div className="row">
               <BlogItem  img='./images/blog_1.png' date='19 Jan 2022' heading='How one Webflow user grew his single person consultancy from $0-100K in 14 months'
                info='See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'/>
               <BlogItem  img='./images/blog_2.png' date='19 Jan 2022' heading='How one Webflow user grew his single person consultancy from $0-100K in 14 months'
                info='See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'/>
               <BlogItem  img='./images/blog_3.png' date='19 Jan 2022' heading='How one Webflow user grew his single person consultancy from $0-100K in 14 months'
                info='See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'/>
         
            </div>
        </div>
    </div>
    )
}

export default Blog;
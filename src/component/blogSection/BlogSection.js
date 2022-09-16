import React from "react";
import "./blogSection.css";
import BlogItem from "../reuseableComponent/BlogItem";




export const BlogSection = () =>{
    return (
        <>
            <div className="environment">
        <div className="container">
            <div className="environment_head">
                <h3>A UX Case Study on Creating a Studious Environment for Students</h3>
                <p>Andrew Jonson, Posted on 27th January 2021</p>
                <img src="./images/blog/blog.png" alt="blog"/>
                <div className="environ_img_text">
                    <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to
                    twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
                    <a href="">Read more</a>
                </div>
            </div>
            <div className="out_blog">
                <h3>Our Blog</h3>
                <div className="blog_item">
                <BlogItem  img='./images/blog_1.png' date='19 Jan 2022' heading='How one Webflow user grew his single person consultancy from $0-100K in 14 months'
                info='See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'/>
                <BlogItem  img='./images/blog_1.png' date='19 Jan 2022' heading='How one Webflow user grew his single person consultancy from $0-100K in 14 months'
                info='See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'/>
                <BlogItem  img='./images/blog_1.png' date='19 Jan 2022' heading='How one Webflow user grew his single person consultancy from $0-100K in 14 months'
                info='See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'/>
         

                </div>
                <div className="blog_item divided">
                     <BlogItem  img='./images/blog_1.png' date='19 Jan 2022' heading='How one Webflow user grew his single person consultancy from $0-100K in 14 months'
                     info='See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'/>
              
              <BlogItem  img='./images/blog_1.png' date='19 Jan 2022' heading='How one Webflow user grew his single person consultancy from $0-100K in 14 months'
                info='See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'/>
                <BlogItem  img='./images/blog_1.png' date='19 Jan 2022' heading='How one Webflow user grew his single person consultancy from $0-100K in 14 months'
                info='See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'/>
             
                </div>
         </div>
        </div>
    </div>
        </>   
    )
}
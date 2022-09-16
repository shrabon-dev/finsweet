import React from "react";
import "./pricing.css";



const Pricing = () =>{
    return (
      <>
          <div className="title">
        <h4>Our Pricing Plans</h4>
        <p>When you’re ready to go beyond prototyping in Figma, 
            Webflow is ready to help you bring your designs to life — without coding them. </p>
    </div>
      <div className="pricing_section">
         <div className="container">

            <div className="d-flex">
                <div className="price">
                    <h4 className="price_amount">$299 <span>per design</span></h4>
                    <h6>Landing Page</h6>
                    <p>When you’re ready to go beyond prototyping in Figma, </p>
    
    
                    <div>
                       <ul className="pricing_feture">
                           <li><img src="./images/price/Pointer.png" alt="Pointer.png"/> All limited links</li>
                           <li><img src="./images/price/Pointer.png" alt="Pointer.png"/> Own analytics platform</li>
                           <li><img src="./images/price/Pointer.png" alt="Pointer.png"/> Chat support</li>
                           <li><img src="./images/price/Pointerds.png" alt="Pointerds.png"/> Optimize hashtags</li>
                           <li><img src="./images/price/Pointerds.png" alt="Pointerds.png"/>  Unlimited users</li>
                       </ul>
                    </div>
                    <div className="button">
                       <a href="#">Get started</a>
                    </div>
                   </div>
                   <div className="price active">
                    <h4 className="price_amount">$399 <span>multi design</span></h4>
                    <h6>website Page</h6>
                    <p>When you’re ready to go beyond prototyping in Figma,  beyond prototyping in</p>
    
    
                    <div>
                       <ul className="pricing_feture">
                           <li> <img src="./images/price/Pointer.png" alt="Pointer.png"/> All limited links</li>
                           <li><img src="./images/price/Pointer.png" alt="Pointer.png"/> Own analytics platform</li>
                           <li><img src="./images/price/Pointer.png" alt="Pointer.png"/> Chat support</li>
                           <li><img src="./images/price/Pointer.png" alt="Pointer.png"/> Optimize hashtags</li>
                           <li><img src="./images/price/Pointer.png" alt="Pointer.png"/>  Unlimited users</li>
                       </ul>
                    </div>
                    <div className="button">
                       <a href="#">Get started</a>
                    </div>
                   </div>
                   <div className="price">
                    <h4 className="price_amount">$499 +<span>per design</span></h4>
                    <h6>Complex Project</h6>
                    <p>When you’re ready to go beyond prototyping in Figma, </p>
    
    
                    <div>
                       <ul className="pricing_feture">
                        <li> <img src="./images/price/Pointer.png" alt="Pointer.png"/> All limited links</li>
                        <li><img src="./images/price/Pointer.png" alt="Pointer.png"/> Own analytics platform</li>
                        <li><img src="./images/price/Pointer.png" alt="Pointer.png"/> Chat support</li>
                        <li><img src="./images/price/Pointer.png" alt="Pointer.png"/> Optimize hashtags</li>
                        <li><img src="./images/price/Pointer.png" alt="Pointer.png"/>  Unlimited users</li>
                       </ul>
                    </div>
                    <div className="button">
                       <a href="#">Get started</a>
                    </div>
                   </div>
            </div>
         </div>
      </div>
      </>
    )
}

export default Pricing;
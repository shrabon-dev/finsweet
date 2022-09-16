import React  from "react";
import "./clientSay.css";
import Slider from "react-slick";


const ClientSay = () =>{

 function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="next"
      style={{
        display:"inline-block",
        color: "#282938",
        fontSize: "20px",
        width:"50px",
        height:"50px",
        textAlign:"center",
        lineHeight:"50px",
        webkitBorderRadius: "50%",
        mozBorderRadius: "50%",
        msBorderRadius: "50%",
        oBorderRadius: "50%",
        transition: "all linear .4s",
        webkitTransition: "all linear .4s",
        mozTransition: "all linear .4s",
        msTransition: "all linear .4s",
        oTransition: "all linear .4s",
        position:"absolute",
        right:"80px",
        bottom:"0",
        zIndex:"999",
        border:"1px solid #282938",
        cursor:"pointer",
      }}
      onClick={onClick}
         >
        {props.icon}  
        </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="prev"
      style={{ 
        display:"inline-block",
        width:"50px",
        height:"50px",
        textAlign:"center",
        lineHeight:"50px",
        color: "#282938",
        fontSize: "20px",
        webkitBorderRadius: "50%",
        mozBorderRadius: "50%",
        msBorderRadius: "50%",
        oBorderRadius: "50%",
        transition: "all linear .4s",
        webkitTransition: "all linear .4s",
        mozTransition: "all linear .4s",
        msTransition: "all linear .4s",
        oTransition: "all linear .4s",
        position:"absolute",
        right:"0",
        bottom:"0",
        zIndex:"999",
        border:"1px solid #282938",
        cursor:"pointer",


         }}
      onClick={onClick}
      >
        {props.icon}  
        </div>
  );
}

  
        const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrow:true,
          nextArrow: <SampleNextArrow  icon={<i className="fa-sharp fa-solid fa-angle-left"></i>} />,
          prevArrow: <SamplePrevArrow  icon={<i className="fa-sharp fa-solid fa-angle-right"></i>} />
        };
    return (
        <>

            <div className="feedback">
                    <div className="container">
                        <div className="row">
                            <div className="feedback__title">
                                <h2>What our clients say about us</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                            </div>
                            
        
      

                            <div className="feedback__slider">
                                <Slider {...settings}>
                                        <div>             
                                                <div className="feedback__message">
                                                        <h2>"The best agency we’ve worked with so far. They understand our product and are able to add
                                                        new features with a great focus."</h2>
                                                </div>
                                                <div className="feedback__slider_details">
                                                    <div className="feedback__client_details">
                                                        <img src="./images/client.png" alt="client.png"/>
                                                        <h4>Jenny Wilson</h4>
                                                        <p>Vice President</p>
                                                    </div>
                                                </div>
                                        </div>
                                        <div>
                                                <div className="feedback__message">
                                                    <h2>"The best agency we’ve worked with so far. They understand our product and are able to add
                                                        new features with a great focus."</h2>
                                                </div>
                                                <div className="feedback__slider_details">
                                                    <div className="feedback__client_details">
                                                        <img src="./images/client.png" alt="client.png"/>
                                                        <h4>Jenny Wilson</h4>
                                                        <p>Vice President</p>
                                                    </div>
                                                </div>
                                        </div>
                                        <div>
                                                <div className="feedback__message">
                                                    <h2>"The best agency we’ve worked with so far. They understand our product and are able to add
                                                        new features with a great focus."</h2>
                                                </div>
                                                <div className="feedback__slider_details">
                                                    <div className="feedback__client_details">
                                                        <img src="./images/client.png" alt="client.png"/>
                                                        <h4>Jenny Wilson</h4>
                                                        <p>Vice President</p>
                                                    </div>
                                                </div>
                                    </div>                        
                                </Slider>
                             </div>
                            
 
                                    
                                    
                                    {/* <div className="feedback__slider_btn">
                                        <a href="#"><i className="fa-sharp fa-solid fa-angle-left"></i></a>
                                        <a href="#"><i className="fa-sharp fa-solid fa-angle-right"></i></a>
                                    </div> */}
                        </div>
                    </div>
          </div>
        </>
    )
}

export default ClientSay;
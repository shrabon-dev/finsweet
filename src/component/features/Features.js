import React from "react";
import FeatureItem from "../reuseableComponent/FeatureItem";
import "./features.css";


const Features = () =>{
       return(
          <>
        <section className="features">
          <div className="container">
            <div className="title">
                <h4>Features</h4>
                <h2>Design that solves problems, one product at a time</h2>
            </div>
            <div className="row features__row--flex">
                <FeatureItem icon='fa-solid fa-users fa-2x' title='Uses Client First' info='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida
                        mi. Pellentesque et velit aliquam sed mi.'/>
                <FeatureItem icon='fa-solid fa-circle-check fa-2x' title='Two Free Revision Round' info='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida
                        mi. Pellentesque et velit aliquam sed mi.'/>
                <FeatureItem  icon='fa-solid fa-paintbrush fa-2x' title='Template Customization' info='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida
                        mi. Pellentesque et velit aliquam sed mi.'/>
                <FeatureItem  icon='fa-solid fa-comments-dollar fa-2x' title='24/7 Support' info='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida
                        mi. Pellentesque et velit aliquam sed mi.'/>
                <FeatureItem  icon='fa-solid fa-stopwatch fa-2x' title='Quick Delivery' info='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida
                        mi. Pellentesque et velit aliquam sed mi.'/>
                <FeatureItem  icon='fa-solid fa-file-pen fa-2x' title='Hands-on approach' info='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida
                        mi. Pellentesque et velit aliquam sed mi.'/>
    
            </div>
          </div>
        </section>
          </>
       )
}

export default Features;
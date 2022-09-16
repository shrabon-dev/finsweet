import React, { useState } from "react";
import "./frequently.css";


const Frequently = ()=>{

    let [according, setAccording] = useState([
        {
            title:"How much time does it take?",
            description:"scelerisque, fringilla purus nec, dictum justo. Donec interdum mauris ut est suscipit viverra. Integer placerat vulputate erat id ullamcorper. Duis vehicula massa diam. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            status:true,
            icon:"fa-solid fa-xmark"
        },
        {
            title:"How much time does it take?",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            status:false,
            icon:"fa-solid fa-plus"

        },
        {
            title:"How much time does it take?",
            description:"Duis et urna non magna mattis ornare et quis urna. Fusce sed pellentesque lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse nec orci vitae orci convallis suscipitsed leo sed nulla posuere",
            status:false,
            icon:"fa-solid fa-plus"

        },
       
        {
            title:"How much time does it take?",
            description:"Duis et urna non magna mattis ornare et quis urna. Fusce sed pellentesque lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse nec orci vitae orci convallis suscipitsed leo sed nulla posuere",
            status:false,
            icon:"fa-solid fa-plus"
        },
        {
            title:"How much time does it take?",
            description:"Duis et urna non magna mattis ornare et quis urna. Fusce sed pellentesque lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse nec orci vitae orci convallis suscipitsed leo sed nulla posuere",
            status:false,
            icon:"fa-solid fa-plus"
        }
    ])

    let HandleClick = (id) =>{
        according.map((item,index)=>{
            if(id == index){


              item.icon = "fa-solid fa-xmark"  
              item.status = true
              setAccording([...according])
            }else{
                item.icon = "fa-solid fa-plus"
                item.status = false
                setAccording([...according])
            }
        })
     
    }



    return (
        <>
    <div className="FAQ">
        <div className="container">
            <div className="row">
                <div className="FAQ__title">
                    <h2>Frequently asked questions</h2>
                    <p>Contact us for more info</p>
                </div>
                <div className="FAQ__accordian">
                    {according.map((item,index)=>(
                    <div className="FAQ__que" onClick={()=>HandleClick(index)}>
                        <div className="FAQ_que_num">
                            { index + 1 > 9 ? index+1 : `0${index+1}`}
                        </div>
                        <div className="FAQ_que_ans">
                            <h2>{item.title}
                                <i className={item.icon}></i>
                            </h2>
                            {item.status && <p> {item.description}</p>}
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
        </>
    );
}

export default Frequently;
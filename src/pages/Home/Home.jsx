import React from 'react'
import { init } from "ityped";
import { useEffect, useRef } from "react";
import "./Home.scss";

export default function Home() {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
          showCursor: true,
          backDelay: 1500,
          backSpeed:60,
          strings: ["Merry Christmas "],
        });
      }, []);
    return (
        <div className='home-start'>
        <div className='container mt-5'>
            <div className='row mt-5'>
                <div className='col-sm-6 banner-info'>
                <div className="wrapper">
          <h2 class="">NosVoid Team</h2>
          
          <h3>
          
          wishes you <span ref={textRef}></span>
          </h3>
        </div>
                   
        <a class="btn btn-first" href='winter'>Christmas Event ⛄️</a>
                 

                </div>
                <div className='col-sm-6 banner-image imgContainer'>
                    <img src="asset/christmas.png" class="img-responsive" alt=""/>
                    
                </div>
            </div>
           
           
            </div>
            
            
        </div>
        
    )
}
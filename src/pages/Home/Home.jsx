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
          strings: ["Accesory", "Act4", "Badge", "Books", "Boxes", "C50", "C55", "Equipment","Faires","Fishing","Perdections","Prestige","Resistances",
        "Runes", "Shells","Sps","Tattos","Wings"],
        });
      }, []);
    return (
        <div className='home-start'>
        <div className='container mt-5'>
            <div className='row mt-5'>
                <div className='col-sm-6 banner-info'>
                <div className="wrapper">
          <h2>Hey Welcome in Void </h2>
          <h1>in a place where everything is possible</h1>
          <h3>
          
        let's start adventure <span ref={textRef}></span>
          </h3>
          <h3> are waiting for you</h3>
        </div>
                   
                    <a class="btn btn-first" href='customFeatures'>Let's start</a>
                    <a class="btn btn-second" href='rules'>Rules</a>

                </div>
                <div className='col-sm-6 banner-image imgContainer'>
                    <img src="asset/home1.png" class="img-responsive" alt=""/>
                    
                </div>
            </div>
           
           
            </div>
            
            
        </div>
        
    )
}

import React from 'react'
import { init } from "ityped";
import { useEffect, useRef } from "react";
import "./Home.scss";
import { Player } from 'video-react';


export default function Home() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Accesory", "Act4", "Badge", "Books", "Boxes", "C50", "C55", "Equipment", "Faires", "Fishing", "Perdections", "Prestige", "Resistances",
        "Runes", "Shells", "Sps", "Tattos", "Wings", "Pets", "Psps", "Titles", "Raids", "Costumes"],
    });
  }, []);
  return (
    <div className='home-start'>
      <div className='container '>
        <div className='row mt-5'>
          <div className='col-sm-6 banner-info'>
            <div className="wrapper">
              <img src="asset/home2.png" class="imghome" alt="" />
              <h2>Hey Welcome in Void </h2>
              <h1>in a place where everything is possible</h1>
              <h3>

                Discover <span ref={textRef}></span>
              </h3>
            </div>
            <h1>adventure will not wait</h1>
            <a class="btn btn-first" href='rules'>Let's start</a>


          </div>
          <div className='col-sm-6 banner-image imgContainer'>
            <Player>
              <source src="video/nosvoid.mp4" />
            </Player>


          </div>

        </div>


      </div>



    </div>


  )
}
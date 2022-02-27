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
      strings: ["Amora", "Cupid", "Wedding", "Romeo", "Julietta", "Love", "Pets"],
    });
  }, []);
  return (
    <div className='home-start-valentine'>
      <div className='container '>
        <div className='row mt-5'>
          <div className='col-sm-6 banner-info'>
            <div className="wrapper">
              <img src="asset/homeValentine.png" className="imghomevalentine" alt="" />
              <h2>Welcome to Void </h2>
              <h1>a place where everything is possible</h1>
              <h3>
                Discover <span ref={textRef}></span>
              </h3>
            </div>
            <h1>adventure will not wait!</h1>
            <a className="btn btn-first" href='valentine'>Let's start</a>
          </div>

          <div className='col-sm-6 banner-image imgContainer'>
            <div className="d-flex flex-row">
            <div className="p-1">__________________ <b>Evolution and Valentine event Trailer</b> __________________<Player>
                <source src="video/nosvoidValentine.mp4" />
              </Player></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
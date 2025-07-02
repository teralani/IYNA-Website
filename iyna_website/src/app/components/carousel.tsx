"use client"
import React, {useEffect} from "react";
import { ReactNode } from "react";

export default function Carousel({ children }: { children: ReactNode }) {



    function handleControl(cardNum : number) {
        const s = document.getElementsByClassName('slider__wrapper')[0];
        const o = 378;
        s.scroll(o * cardNum, 0)
    }

    useEffect(() => {
        const controlsContainer = document.querySelectorAll('.controls-container')
        const outer = document.querySelectorAll('.outer')
        const dot = document.querySelectorAll('.dot')
        const dotHiglight = document.querySelectorAll('.dot-two-button-highlight')
        const blue = document.querySelectorAll('.blue-thing')
        if(window.scrollY > 100) {
            controlsContainer.forEach((el) => el.classList.remove('closed'));
            outer.forEach((el) => el.classList.remove('invisible'));
            controlsContainer.forEach((el) => el.classList.add('controls-container-seen'));
            dot.forEach((el) => el.classList.add('dot-seen'));
            dotHiglight.forEach((el) => el.classList.add('dot-seen'));
            blue.forEach((el) => el.classList.add('blue-thing-seen'));
        } else {
            outer.forEach((el) => el.classList.add('invisible'));
            controlsContainer.forEach((el) => el.classList.remove('controls-container-seen'));
            controlsContainer.forEach((el) => el.classList.add('closed'));
            dot.forEach((el) => el.classList.remove('dot-seen'));
            dotHiglight.forEach((el) => el.classList.add('dot-seen'));
            blue.forEach((el) => el.classList.remove('blue-thing-seen'));
        }

    }, [])

    return (
       <div className="carousel max-w-[100vw] overflow-x-hidden">
         <div className="slider">
            <div className="slider__wrapper">
                {children}
            </div>

            <div className="outer-controls-placeholder">
                <div className="outer" style={{ position: "relative" }}>
                    <div className="controls-container controls-container-seen" style={{ maxWidth: 200 }}>
                        <div className="dot dot-seen">
                            <input onClick={() => handleControl(0)} type="radio" name="selector" value="slide1" defaultChecked />
                        </div>
                        <div className="dot dot-seen">
                            <input onClick={() => handleControl(1)} type="radio" name="selector" value="slide2" />
                        </div>
                        <div className="dot dot-seen">
                            <input onClick={() => handleControl(2)} type="radio" name="selector" value="slide3" />
                        </div>
                        <div className="dot dot-seen">
                            <input onClick={() => handleControl(3)} type="radio" name="selector" value="slide4" />
                        </div>
                        <div className="dot dot-seen">
                            <input onClick={() => handleControl(4)} type="radio" name="selector" value="slide5" />
                        </div>
                        <div className="dot dot-seen">
                            <input onClick={() => handleControl(5)} type="radio" name="selector" value="slide6" />
                        </div>
                    </div>
                    <div className="blue-thing controls blue-thing-seen"></div>
                </div>
            </div>
        </div>
       </div>
    );
}

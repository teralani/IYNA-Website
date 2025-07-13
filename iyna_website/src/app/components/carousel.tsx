"use client"
import React, { useEffect, useRef, useState} from "react";
import { ReactNode } from "react";

export default function Carousel({ children }: { children: ReactNode }) {
    const targetRef = useRef(null);
    const sliderWrapper = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleControl = React.useCallback((cardNum: number) => {
        const s = sliderWrapper.current

        // const o = 378;
        const o = 385;
        if (s) {
            (s as HTMLElement).scroll(o * cardNum, 0);
        }
    }, []);

    sliderWrapper.current?.addEventListener("scrollend", () => {
        if(targetRef.current) {
            const inputs = (targetRef.current as Element).querySelectorAll("input");
            inputs.forEach(el => el.checked = true)
            inputs[Math.round((sliderWrapper.current?.scrollLeft ?? 0) / 385) % 6].checked = true
        }
    })

    sliderWrapper.current?.addEventListener("touchstart", () => {setIsClicked(true)})
    
    useEffect(() => {
        let i = 0
        const timer = setInterval(() => {
            // Accessing All the carousel Items 
            if (!isClicked) {
                if(i < 6){
                    handleControl(i);
                    if (targetRef.current) {
                        const inputs = (targetRef.current as Element).querySelectorAll("input");
                        inputs[i === 0 ? 5 : i - 1].checked = false;
                        inputs[i].checked = true;
                    }
                }

                if(i < 6){
                    i++;
                }
                else{
                    i=0;
                }
            }
            
        },4000)

        return () => {window.clearInterval(timer)}
    }, [handleControl, isClicked])
    

      

    useEffect(() => {
        const node = targetRef.current;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(entry.isIntersecting);
                observer.unobserve(entry.target)
            }
          }, {threshold: 0.5}
        )
        
        if (node) {
          observer.observe(node);
        }

        return () => {
          if (observer) {
            observer.disconnect();
          }
        };
    }, [])

    return (
       <div className="carousel max-w-[100vw] overflow-x-hidden pb-3">
         <div className="slider">
            <div ref={sliderWrapper} className="slider__wrapper">
                {children}
            </div>

            <div ref={targetRef} className="outer-controls-placeholder">
                <div className={`${isVisible? "" : "invisible"} outer`} style={{ position: "relative" }}>
                    <div className={`${isVisible? "controls-container-seen" : "closed"} controls-container controls-container-seen`} style={{ maxWidth: 200 }}>
                        <div className={`${isVisible? "dot-seen" : ""} dot`}>
                            <input onClick={() => {setIsClicked(true); handleControl(0)}} type="radio" name="selector" value="slide1" defaultChecked />
                        </div>
                        <div className={`${isVisible? "dot-seen" : ""} dot`}>
                            <input onClick={() => {setIsClicked(true); handleControl(1)}} type="radio" name="selector" value="slide2" />
                        </div>
                        <div className={`${isVisible? "dot-seen" : ""} dot`}>
                            <input onClick={() => {setIsClicked(true); handleControl(2)}} type="radio" name="selector" value="slide3" />
                        </div>
                        <div className={`${isVisible? "dot-seen" : ""} dot`}>
                            <input onClick={() => {setIsClicked(true); handleControl(3)}} type="radio" name="selector" value="slide4" />
                        </div>
                        <div className={`${isVisible? "dot-seen" : ""} dot`}>
                            <input onClick={() => {setIsClicked(true); handleControl(4)}} type="radio" name="selector" value="slide5" />
                        </div>
                        <div className={`${isVisible? "dot-seen" : ""} dot`}>
                            <input onClick={() => {setIsClicked(true); handleControl(5)}} type="radio" name="selector" value="slide6" />
                        </div>
                    </div>
                    <div className={`${isVisible? "blue-thing-seen" : ""} blue-thing controls`}></div>
                </div>
            </div>
        </div>
       </div>
    );
}

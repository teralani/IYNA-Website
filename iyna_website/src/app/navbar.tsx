"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import {Readex_Pro} from "next/font/google"

const readex_pro = Readex_Pro({
  subsets: ["latin"],
});

interface NavbarProps {
    selectedPage: number;
    darken?: boolean;
}

export default function Navbar({selectedPage, darken = false}: NavbarProps) {
    const [page, setPage] = useState(-1);
    const [dark, setDark] = useState(darken || false);

    useEffect(() => {
        const handlePageChange = (newPage: number) => {
            // console.log( `Changing page to: ${newPage}`);
            setPage(newPage);
        }
        const pages = document.querySelectorAll('.a');
        pages.forEach((page, index) => {
            page.addEventListener('mouseover', () => handlePageChange(index));
        });
        const popup = document.querySelector(".popup")
        popup?.addEventListener('mouseleave', () => handlePageChange(-1))

        const handleScroll = () => {
            if (window.scrollY > 0 && window.innerWidth <= 768) {
                document.querySelector('.scroll')?.classList.remove('animate-fade-out');
                document.querySelector('.scroll')?.classList.add('animate-fade');
            } else {
                document.querySelector('.scroll')?.classList.add('animate-fade-out');
                document.querySelector('.scroll')?.classList.remove('animate-fade');
            }
            if (window.scrollY > 0 && window.innerWidth > 768) {
                // console.log('Scrolled down, adding selected class');
                document.querySelector('.wrapper')?.classList.add('selected');
                document.querySelector('.wrapper')?.classList.add('backdrop-blur-lg');
                // console.log('Scrolled down, adding selected class');
                setDark(false);
            } else {
                document.querySelector('.wrapper')?.classList.remove('selected');
                document.querySelector('.wrapper')?.classList.remove('backdrop-blur-lg');
                setDark(darken);
            }
        };
        document.addEventListener('scroll', () => {handleScroll();});
        document.addEventListener('scrollend', () => {handleScroll();});

        return () => {
            pages.forEach(element => {
                element.removeEventListener('mouseover', () => handlePageChange);
            });
            document.removeEventListener('scroll', () => {handleScroll();});
            document.removeEventListener('scrollend', () => {handleScroll();})
        };

    }, []);
    return (        
        <nav
        className={`${readex_pro.className} fixed w-screen z-20 flex flex-col justify-center`}
        >
            <div className="md:hidden fixed w-15 h-15 right-[5dvw] bottom-[5dvw] origin-bottom-right">
                <div className="scroll flex flex-col justify-center bg-[#6d9bc2a0] backdrop-blur-lg rounded-full w-full h-full cursor-pointer border-1 border-faded-blue" onClick={() => window.scrollTo({top: 0, left: 0, behavior: "smooth",})}>
                    <svg stroke="gray" fill="white" className="mx-auto mb-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>
                </div>
            </div>
            <div className="wrapper max-md:-translate-y-2 max-md:bg-[#9dd2df8a] max-md:backdrop-blur-lg md:mx-auto md:w-[98lvw] w-screen backdrop-blur-lg rounded-lg max-md:h-16">
                <div className="flex items-center justify-between w-full h-full">
                    <div className="flex-1 md:float-start @container flex align-middle justify-between max-md:px-5">
                        <Link href="/" className="md:justify-normal flex md:pl-[8%]">
                            <Image
                                src="/logo.png"
                                alt="IYNA Logo"
                                width={90}
                                height={90}
                                className="h-24 w-auto max-md:h-14 max-md:my-auto"
                            />
                            <div className={`hidden @md:block name my-auto ${dark? "dark" : ""}`}>
                                <div>
                                    <p className={`text-3xl my-auto ${readex_pro.className}`}>
                                        LWSD Chapter
                                    </p>
                                </div>
                                <div id="one" className="hidden md:block">
                                    <p className={`text-md my-auto ${readex_pro.className}`}>
                                       International Youth Neuroscience Association
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <button style={{scale: "0.75"}} onClick={() => {
                            const links = document.querySelector('.links');
                                if (links) {
                                    links.classList.toggle('invisible');
                                    links.classList.toggle('text-black');
                                    links.classList.toggle('max-md:-translate-x-full');
                                    
                                    if (links.classList.contains('max-md:-translate-x-full')) {
                                        (document.querySelector("#reverse") as SVGAnimateElement | null)?.beginElement()
                                    }
                                    else {
                                        (document.querySelector("#start") as SVGAnimateElement | null)?.beginElement()
                                    }
                                }
                            
                            }} className="z-50 md:hidden relative menu cursor-pointer my-auto">
                            <svg className="block w-16 hover:stroke-sky-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" stroke="#000" strokeWidth=".6" fill="rgba(0,0,0,0)" strokeLinecap="round" style={{cursor: "pointer"}}>
                                <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
                                    <animate dur="0.1s" attributeName="d" values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7" fill="freeze" begin="start.begin" />
                                    <animate dur="0.1s" attributeName="d" values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7" fill="freeze" begin="reverse.begin" />
                                </path>
                                <rect width="5" height="5" stroke="none">
                                    <animate dur="1s" id="reverse" attributeName="width" begin="" />
                                </rect>
                                <rect width="5" height="5" stroke="none">
                                    <animate dur="0.001s" id="start" attributeName="width" values="10;0" fill="freeze" begin="" />
                                    <animate dur="0.001s" attributeName="width" values="0;10" fill="freeze" begin="reverse.begin" />
                                </rect>
                            </svg>
                        </button>
                    </div>

                    <div className={`${dark? "dark" : ""}  invisible md:visible max-md:-translate-x-full transition-transform md:pt-0 w-[100dvw] md:pb-0 max-md:-top-2 fixed backdrop-blur-lg md:backdrop-blur-none md:blur-none bg-[#6d9bc2f6] md:bg-transparent h-screen justify-around py-[20svh] items-center  flex-col md:flex-row md:h-auto md:relative links flex-1 flex md:justify-center md:space-x-12`}>
                        <Link
                        href="/"
                        className={`${selectedPage == 0? "selected": ""} text-xl md:text-lg a`}
                        >
                        Home
                        </Link>
                        <Link
                        href="/aboutus"
                        className={`${selectedPage == 1? "selected": ""} text-xl md:text-lg a`}
                        >
                        About Us
                        </Link>
                        <Link
                        href="/events"
                        className={`${selectedPage == 2? "selected": ""} text-xl md:text-lg a dropdown`}
                        >
                        Events
                        <svg className="max-md:hidden ml-2 mt-[5.5px]" viewBox='0 0 140 140' width='14' height='14' xmlns='http://www.w3.org/2000/svg'><g><path fill={`${dark? "white" : "black"}`} d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' /></g></svg>
                        </Link>
                        <Link
                        href="/team"
                        className= {`${selectedPage == 3? "selected": ""} text-xl md:text-lg a`}
                        >
                        Our Team
                        </Link>
                    </div>

                    <button className={`hidden md:block contact flex-1 pr-20 ${dark? "dark" : ""}`}>
                        <Link
                            href="mailto:iynalwsdchapter@gmail.com"
                            className=" text-lg border-1  px-8 py-3 rounded-full transition-colors duration-400 float-right"
                        >
                            Contact Us
                        </Link>
                    </button>
                </div>
            </div>
            <div className="hidden md:block popup border-1 border-cyan mx-auto rounded-lg">
                {page === 2 && (
                    <div className="py-16 flex justify-evenly text-black px-20 w-[75svw]">
                        <ul>
                            <p>EVENTS</p>
                            <li><Link
                                href={"/events/workshops"}
                                scroll={true}
                            >Workshops</Link></li>
                            <li><Link
                                href={"/events#Webinars"}
                                scroll={true}
                            >Webinars</Link></li>
                            <li><Link
                                href={"/events/competitions"}
                                scroll={true}
                            >Competitions</Link></li>
                            <li><Link
                                href={"/events#Labs"}
                                scroll={true}
                            >Labs</Link></li>
                        </ul>
                        <ul>
                            <p>PROGRAMS</p>
                            <li><Link
                                href={"/events#NeuroPodcast"}
                                scroll={true}
                            >NeuroPodcast</Link></li>
                            <li><Link
                                href={"/events#Volunteer"}
                                scroll={true}
                            >Volunteer</Link></li>
                            <li><Link
                                href={"/events/fundraisers"}
                                scroll={true}
                            >Fundraisers</Link></li>
                        </ul>
                    </div>
                )}

            </div>
        </nav>
    )
}
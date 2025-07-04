"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';

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
        const handleScroll = () => {
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
        className="fixed w-screen z-20 flex flex-col justify-center"
        >
            <div className="wrapper max-md:bg-[#9dd2df8a] max-md:backdrop-blur-lg md:mx-auto md:w-[98lvw] w-screen backdrop-blur-lg rounded-lg max-md:h-16">
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
                                    <p className="text-3xl my-auto">
                                        LWSD Chapter
                                    </p>
                                </div>
                                <div id="one" className="hidden md:block">
                                    <p className="text-md my-auto">
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

                    <div className={`${dark? "dark" : ""}  invisible md:visible max-md:-translate-x-full transition-transform md:pt-0 w-[100dvw] md:pb-0 max-md:-top-5 fixed backdrop-blur-md md:backdrop-blur-none  md:blur-none  bg-[#d7dbdff6] md:bg-transparent h-screen justify-around py-[20svh] items-center  flex-col md:flex-row md:h-auto md:relative links flex-1 flex md:justify-center md:space-x-12`}>
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
                                href={"/events#workshops"}
                                scroll={true}
                            >Workshops</Link></li>
                            <li><Link
                                href={"/events#Webinars"}
                                scroll={true}
                            >Webinars</Link></li>
                            <li><Link
                                href={"/events#Competitions"}
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
                                href={"/events#Fundraisers"}
                                scroll={true}
                            >Fundraisers</Link></li>
                        </ul>
                    </div>
                )}

            </div>
        </nav>
    )
}
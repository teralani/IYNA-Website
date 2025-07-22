"use client";
import Image from 'next/image';
import { useRef, useState } from 'react';
type ProfileProps = {
    name: string;
    position: string;
    bio: string;
};

export default function Profile({name, position, bio} : ProfileProps) {
    const bioRef = useRef<HTMLDivElement>(null);
    const [more, setMore] = useState(true);
    const handleClick = () => {
        if(bioRef.current){
            const bioElement = bioRef.current.querySelector(".bio");
            if (bioElement) {
                bioElement.classList.toggle("hidden");
                if (more) {setMore(false)} else{setMore(true);}
            }
        }
    }
    const [currentSrc, setCurrentSrc] = useState(`/${name.replaceAll(" ", "")}.jpg`);
    const handleError = () => {setCurrentSrc("/profilefallback.jpg")}
    return (
        <div ref={bioRef} className={`profile-card bg-white shadow-lg rounded-lg p-4 m-4 w-80 h-min overflow-ellipsis ${bio.length < 1? "hidden" : ""}`}>
            <Image
                src={currentSrc}
                alt={name}
                width={128}
                height={128}
                className="w-58 h-58 mx-auto mb-4 object-cover"
                onError = {handleError}
            />
            <h2 className="text-2xl font-bold text-center">{name}</h2>
            <p className="text-lg text-center align-middle my-3 font-bold text-gray-500 px-5 min-h-14">{position}</p>
            <p className="bio hidden w-auto h-auto mb-3">{bio}</p>
            <button className="justify-center flex mx-auto bg-purple text-sm border-1 text-white px-4 py-2 rounded-full hover:bg-lavender hover:text-purple transition-colors duration-300" onClick={handleClick}>
                {more? "Show More" : "Show Less"}
            </button>
        </div>
    )
}
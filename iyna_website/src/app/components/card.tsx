"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type CardProps = {
    title: string;
    description: string;
    imageSrc: string;
    buttonText: string;
    number?: number;
    buttonLink?: string;
    disable?: boolean;
    buttonHidden? :boolean
};

export default function Card({title, description, imageSrc, buttonText, buttonLink, number = 0, disable = false, buttonHidden = false}: CardProps) {
    const [imageError, setImageError] = useState(false);    
    useEffect(() => {
        // This code runs after the component has mounted
        const loadingElement = document.querySelectorAll('.loading');
        loadingElement.forEach((el) => el.classList.remove('loading'));
        
    }, []); // The empty dependency array ensures this runs only once after initial render

    return (
        <div id={title} className="flex flex-col snap-center bg-[#eff4f8] shadow-lg rounded-lg overflow-hidden h-[27rem] max-w-96 min-w-80 basis-1/3 m-8">
            <Image
                src={imageError? '/logo.png' : imageSrc}
                alt={title}
                width={400}
                height={192}
                className={`w-full h-48 ${imageError? "object-contain" : "object-cover"} loading`}
                onError={() => {
                    setImageError(true);
                }}
            />
            <div className="p-4">
                <div className='slide-up'><p style={{animationDelay : `${number * 50}ms`}} className="text-xl font-bold mb-2">{title}</p></div>
                <p className="text-gray-700 rounded-slg">{description}</p>
            </div>
            <button disabled={disable} className={`${disable? "disabled" : ""} ${buttonHidden? "hidden" : ""} justify-self-center mb-5 mt-auto`}>
                <Link
                    href={buttonLink || "#"}
                    aria-disabled={disable}
                    className={`${disable? "pointer-events-none bg-blue-300" : "bg-blue-500"} text-lg border-1 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300`}
                >
                    {disable? "Not Available" :(buttonText || "Learn More")}
                </Link>
            </button>
        </div>
    );
}   
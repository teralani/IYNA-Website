"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

type CardProps = {
    title: string;
    description: string;
    imageSrc: string;
    buttonText: string;
    number?: number;
    buttonLink?: string;
    disable?: boolean;
};

export default function Card({title, description, imageSrc, buttonText, number = 0,  buttonLink, disable = false}: CardProps) {
        useEffect(() => {
        // This code runs after the component has mounted
        const loadingElement = document.querySelectorAll('.loading');
        loadingElement.forEach((el) => el.classList.remove('loading'));
        
    }, []); // The empty dependency array ensures this runs only once after initial render

    return (
        <div id={title} className="flex flex-col bg-[#eff4f8] shadow-lg rounded-lg overflow-hidden h-[27rem] w-80 basis-1/3 m-8">
            <Image
                src={imageSrc}
                alt={title}
                width={400}
                height={192}
                className="w-full h-48 object-cover loading"
            />
            <div className="p-4">
                <div className='slide-up'><p style={{animationDelay : `${number * 50}ms`}} className="text-xl font-bold mb-2">{title}</p></div>
                <p className="text-gray-700 rounded-slg">{description}</p>
            </div>
            <button disabled={disable} className={`${disable? "disabled" : ""} justify-self-center mb-5 mt-auto`}>
                <Link
                    href={buttonLink || "#"}
                    target='_blank'
                    aria-disabled={disable}
                    className={`${disable? "pointer-events-none bg-blue-300" : "bg-blue-500"} text-lg border-1 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300`}
                >
                    {disable? "Not Available" :(buttonText || "Learn More")}
                </Link>
            </button>
        </div>
    );
}   
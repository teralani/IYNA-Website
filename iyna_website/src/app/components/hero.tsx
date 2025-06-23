import Image from 'next/image';
export default function Hero() {
    return (
        <div>
            <Image
                src= "/hero-image.jpg"
                alt= "Hero Image"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[var(--foreground)]">
                <h1 className="text-6xl font-bold mb-4">International Youth Neuroscience Association</h1>
                <p className="text-xl mb-8">Lake Washington School District Chapter</p>
                <a href="/aboutus" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Learn More
                </a>
            </div>
        </div>
    )
}
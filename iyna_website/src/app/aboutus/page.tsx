import Image from 'next/image';
import Navbar from '../navbar';
import Footer from '../components/footer';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "About Us | IYNA",
  description: "...",
};

export default function AboutUsPage() {
    return (
        <div className='overflow-clip'>
            <Navbar selectedPage={1} darken={true} />
            <div className="px-[12vw] flex flex-col justify-center lg:px-[18vw] md:pb-10 h-[80vh] md:h-screen w-screen">
                <Image
                    src="/aboutus-image.jpg"
                    alt="About Us Image"
                    className="absolute h-full w-full top-0 left-0 shadow-lg -z-1"
                    fill={true}
                    style={{objectFit: "cover"}}

                />
                <div className="absolute h-full w-full top-0 left-0 shadow-lg bg-[#44444490] backdrop-blur-md -z-1">

                </div>
                <div className='items-center lg:mb-50'>
                    <h1 className="lg:text-7xl md:text-7xl text-5xl max-md:text-center font-bold mb-12 text-white"><span className='text-faded-blue'>Empowering young</span> neuroscientists</h1>
                    <p className="text- lg:text-xl text-md md:text-xl text-lavender max-md:text-center md:leading-12 2xl:max-w-[50rem] xl:leading-16">At IYNA - LWSD Chapter, we hope to inspire the next generation of neuroscience. From hosting workshops to competitions to even hosting NeuroPodcast—our Spotify podcast— we strive to make a positive impact on our community filled with curious students.</p>
                    <div className='bg-lavender h-1 md:w-1/3 mt-12'></div>
                </div>
            </div>
            <div className='text-white py-20 md:py-80 px-8 bg-purple'>
                <h1 className='text-center text-5xl font-bold pb-10'>Our Mission</h1>
                <div className="@container flex-wrap flex flex-row items-center justify-center">
                    <p className="text-lavender mt-4 text-lg max-md:text-center max-w-2xl lg:mr-8 leading-10">
                        The International Youth Neuroscience Association (IYNA) is a global community dedicated to fostering interest and education in neuroscience among young people. Our mission is to connect, educate, and inspire the next generation of neuroscientists through events, resources, and collaborative projects.
                    </p>
                    <div className='invisible @7xl:visible bg-lavender h-30 w-1'></div>
                    <ul className='about-list md:pl-30 pl-16'>
                        <li className='animate-fadeIn text-2xl md:text-3xl py-5 text-lavender'><span className='text-[#c6c6f5] font-bold'>Connect</span> with neuroscience enthusiasts</li>
                        <li className='animate-fadeIn text-2xl md:text-3xl py-5 text-lavender'><span className='text-[#c6c6f5] font-bold'>Educate</span> through our workshops</li>
                        <li className='animate-fadeIn text-2xl md:text-3xl py-5 text-lavender'><span className='text-[#c6c6f5] font-bold'>Inspire</span> the next generation</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}
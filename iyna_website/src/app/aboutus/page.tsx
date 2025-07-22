import Image from 'next/image';
import Navbar from '../navbar';
import Footer from '../components/footer';
import { Metadata } from 'next';
// import PenCircle from '../components/circle';
import HoverCircle from '../components/hovercircle';


export const metadata: Metadata = {
  title: "About Us | IYNA",
  description: "...",
};

export default function AboutUsPage() {
    return (
        <div className='overflow-clip'>
            <Navbar selectedPage={1} darken={true} />
            <div className="max-md:pt-20 px-[12vw] flex flex-col justify-center lg:px-[18vw] h-[80vh] md:h-[80vh] w-screen">
                <Image
                    src="/aboutus-image.jpg"
                    alt="About Us Image"
                    className="absolute h-full w-full top-0 left-0 shadow-lg -z-1"
                    fill={true}
                    style={{objectFit: "cover"}}

                />
                <div className="absolute h-full w-full top-0 left-0 shadow-lg bg-[#44444490] backdrop-blur-md -z-1">

                </div>
                <div className='items-center my-auto'>
                    <h1 className="lg:text-7xl md:text-5xl lg:text-7xl text-4xl max-md:text-center font-bold md:mb-12 mb-4 text-white"><span className='text-[#9dd2df]'>Empowering young</span> neuroscientists.</h1>
                    <p className=" lg:text-xl text-md md:text-xl text-lavender max-md:text-center md:leading-12 2xl:max-w-[50rem] xl:leading-16">At IYNA - LWSD Chapter, we hope to inspire the next generation of neuroscience. From hosting workshops to competitions to even hosting NeuroPodcast—our Spotify podcast— we strive to make a positive impact on our community filled with curious students.</p>
                    <div className='bg-lavender h-1 md:w-1/3 mt-12'></div>
                </div>
            </div>
            <div className='flex md:flex-row flex-col max-md:h-[55rem] h-96'>
                <div className="overflow-y-hidden text-white bg-blue text-center flex-1 max-md:h-40 h-auto text-5xl flex flex-col justify-center py-5">
                    {/* <h1>Hosted</h1><span className='overflow-y-hidden'><p className="py-1 text-7xl" >5+</p></span><h1>events</h1> */}
                    <h1>Hosted</h1><span className='flex justify-center'><HoverCircle text="5+" textClass='py-1 text-7xl' strokeColor='#faf8c8'></HoverCircle></span><h1>events</h1>
                </div>
                <div className="overflow-y-hidden text-white bg-[#6799a6] text-center flex-1 max-md:h-40 h-auto text-5xl flex flex-col justify-center py-5">
                    <h1>Impacted</h1><span className='flex justify-center'><HoverCircle text="100+" textClass='py-1 text-7xl' strokeColor='#faf8c8'></HoverCircle></span><h1 className=''>passionate neuroscientists</h1>
                </div>
                <div className="overflow-y-hidden text-white bg-dark-blue text-center flex-1 max-md:h-40 h-auto text-5xl flex flex-col justify-center py-5">
                    <h1>Reached</h1><span className='flex justify-center'><HoverCircle text="4+" textClass='py-1 text-7xl' strokeColor='#faf8c8'></HoverCircle></span><h1>schools</h1>
                </div>
            </div>
            <div className='text-white py-20 md:py-80 px-8 bg-purple'>
                {/* <h1 className='text-center text-5xl font-bold pb-2 md:pb-10'>Our Mission</h1> */}
                <span className='flex justify-center w-screen'><HoverCircle text="Our Mission" textClass='text-center text-5xl font-bold pb-2 md:pb-10' strokeColor="#faf8c8"></HoverCircle></span>
                <div className="@container flex-wrap flex flex-row items-center justify-center">
                    <p className="text-lavender mt-4 text-md md:tex-lg max-md:text-center max-w-2xl lg:mr-8 leading-8 md:leading-10 max-md:pb-7">
                        The International Youth Neuroscience Association (IYNA) is a global community dedicated to fostering interest and education in neuroscience among young people. Our mission is to connect, educate, and inspire the next generation of neuroscientists through events, resources, and collaborative projects.
                    </p>
                    <div className='max-md:hidden @7xl:visible bg-lavender h-30 w-1'></div>
                    <ul className='about-list md:pl-30 pl-16'>
                        <li className='animate-fadeIn text-xl md:text-3xl py-5 text-lavender'><span className='text-[#c6c6f5] font-bold'>Connect</span> with neuroscience enthusiasts</li>
                        <li className='animate-fadeIn text-xl md:text-3xl py-5 text-lavender'><span className='text-[#c6c6f5] font-bold'>Educate</span> through our workshops</li>
                        <li className='animate-fadeIn text-xl md:text-3xl py-5 text-lavender'><span className='text-[#c6c6f5] font-bold'>Inspire</span> the next generation</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}
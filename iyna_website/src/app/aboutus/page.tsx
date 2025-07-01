import Image from 'next/image';
import Navbar from '../navbar';
import Footer from '../components/footer';


export default function AboutUsPage() {


			
    
    return (
        <div>
            <Navbar selectedPage={1} />
            <div className="flex flex-col items-center justify-centerp pt-80 mb-40">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg">Learn more about our mission and team.</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="mt-8">
                    <Image
                        src="/aboutus-image.jpg"
                        alt="About Us Image"
                        className="w-full max-w-2xl rounded-lg shadow-lg"
                        width={800}
                        height={450}
                    />
                </div>
                <p className="mt-4 text-center max-w-2xl">
                    The International Youth Neuroscience Association (IYNA) is a global community dedicated to fostering interest and education in neuroscience among young people. Our mission is to connect, educate, and inspire the next generation of neuroscientists through events, resources, and collaborative projects.
                </p>
            </div>
            <Footer />
        </div>
    );
}
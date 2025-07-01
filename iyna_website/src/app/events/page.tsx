import Card from "../components/card";
import Footer from "../components/footer";
import Navbar from "../navbar";

export default function EventsPage() {
  return (
    <div>
        <Navbar selectedPage={2}/>
        <div className="flex flex-col items-center justify-center pt-60">
            <h1 className="text-4xl font-bold mb-4">Events</h1>
            <p className="text-lg">Stay tuned for upcoming events!</p>
        </div>
        <div className="flex flex-col items-center justify-center mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-20">
                <Card 
                    title="Workshops"
                    description="Join us for our annual summer neuroscience workshop, where you can learn about neuroscience topics and participate in hands-on activities."
                    imageSrc="/workshop.jpg"
                    buttonText="Learn More"
                    number={1}
                />
                <Card 
                    title="Webinars"
                    description="Learn more from experts in the field of neuroscience through our engaging webinars. Our webinars are perfect for students and those interested in neuroscience."
                    imageSrc="/workshop.jpg"
                    buttonText="Register Now"
                    number={2}
                    disable={true}
                />
                <Card 
                    title="Competitions"
                    description="Compete in our neuroscience competitions and win exciting prizes! Our competitions are designed to prepare you for other competitions like the Brain Bee."
                    imageSrc="/workshop.jpg"
                    buttonText="Register Now"
                    number={3}
                    disable={true}
                />
                <Card 
                    title="Labs"
                    description="Dive into exciting neuroscience education with our lab activities. Our labs are designed to provide hands-on experience and knowledge in neuroscience."
                    imageSrc="/workshop.jpg"
                    buttonText="Register Now"
                    number={4}
                    disable={true}
                />
                <Card 
                    title="NeuroPodcast"
                    description="Tune into our podcast, where we discuss various neuroscience topics and interview experts in the field. If you're interested in neuroscience, this is the podcast for you!"
                    imageSrc="/neuropodcast.jpg"
                    buttonText="Listen Now"
                    buttonLink="https://open.spotify.com/show/016sMZlvCkLjxqFIn3r14X?si=a0da89172a2a454e"
                    number={5}
                />
                <Card 
                    title="Volunteer Opportunities"
                    description="Join the IYNA community as a volunteer! We are always looking for passionate individuals to help us with our events and activities."
                    imageSrc="/workshop.jpg"
                    buttonText="Become a Volunteer"
                    number={6}
                />
                <Card 
                    title="Fundraisers"
                    description="Help us raise funds for our events and activities! Your support is crucial in helping us achieve our mission of promoting neuroscience education."
                    imageSrc="/workshop.jpg"
                    buttonText="Learn More"
                    number={7}
                />
            </div>
        </div>
        <Footer />
    </div>
  );
}
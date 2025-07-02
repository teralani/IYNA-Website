// import Image from "next/image";
import Card from "./components/card";
import Carousel from "./components/carousel";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./navbar";



export default function Home() {
  return (
  <div className="">
    <Navbar selectedPage={0} darken={true}/>
    <Hero />
    <div className="bg-lavender py-30">
      <h1 className="text-center text-5xl mb-12 font-bold">Past Events</h1>
      <Carousel>
        <Card buttonLink="/events" title={"Webinar with Dr. Chudler"} description={"Known for his Emmy-winning projects BrainWorks and Neuroscience for Kids, Dr. Chudler will share insights to inspire high school students passionate about neuroscience."} imageSrc={"/webinar.jpg"} buttonText={"Learn More"}/>
        <Card buttonLink="/events" title={"Brain Disection"} description={"This hands-on experience offers an amazing opportunity to dive deep into the anatomy and function of the brain and its vital role in human health."} imageSrc={"/braindisection.jpg"} buttonText={"Learn More"}/>
        <Card buttonLink="/events" title={"Apophenia Workshop"} description={" In this session, we will delve into the intriguing phenomena of pareidolia and apophenia—what they are, why they occur, and their connection to psychological conditions. "} imageSrc={"/apophenia.jpg"} buttonText={"Learn More"}/>
        <Card buttonLink="/events" title={"Krispy Kreme Fundraiser"} description={"We are running a Digital Dozens fundraiser with Krispy Kreme to help support IYNA!"} imageSrc={"/donuts.jpg"} buttonText={"Learn More"}/>
        <Card buttonLink="/events" title={"IYNA Brain Quiz"} description={"The Regional Brain Quiz is your chance to test your knowledge, compete with fellow students, and take the first stpe toward the National Brain Bee."} imageSrc={"/quiz.jpg"} buttonText={"Learn More"}/>
        <Card buttonLink="/events" title={"Card Making Event"} description={"The IYNA EHS Chapter is partnering with the EHS Junior Orthopedic Guild Club to host a card-making event where we will be creating heartfelt cards for hospital patients!"} imageSrc={"/cards.jpg"} buttonText={"Learn More"}/>
      </Carousel>
    </div>
    <Footer></Footer>
  </div>);
}

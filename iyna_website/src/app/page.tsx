// import Image from "next/image";
import Card from "./components/card";
import Carousel from "./components/carousel";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Quote from "./components/quote";
import { PriorityQueue } from "./heap";
import Navbar from "./navbar";
import fs from 'fs/promises';



export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/src/app/content.json', 'utf8');
  const data = JSON.parse(file)
  const recent_events = new PriorityQueue<React.ReactNode>()
  const today = new Date()
  let i = 0

  const folders = ["workshops", "webinars", "fundraisers", "labs", "competitions", "misc"]
  
  for (const folder of folders) {
    for (const w of data.events[folder]) {  
      const tempDate = new Date(w.date)
      if (tempDate < today ) {
          const el = (
              <Card
                  title={w.title}
                  description={w.description}
                  imageSrc={w.image_url}
                  buttonText={"Register Now"}
                  buttonLink={w.registration_link}
                  number={i}
                  key={i}
                  disable={true}
                  buttonHidden={true}
              />
          )
          recent_events.push(el, tempDate.getTime() - today.getTime())
        }
        i++
    }
  }

  const displayed_events = []
  for (let i = 0; i < 6; i++) {
    displayed_events.push(recent_events.pop())
  }


  return (
  <div className="">
    <Navbar selectedPage={0} darken={true}/>
    <Hero />
    <div className="bg-faded-blue py-50">
      <h1 className="text-center text-4xl md:text-5xl mb-6 md:mb-12 font-bold text-white">Our Mission</h1>
      <Quote author = "Haarika Nidadavolu">
        I founded the IYNA LWSD Chapter to create a space where students could explore neuroscience beyond the classroom and connect with others who share similar interests about the brain. My goal was to make neuroscience more accessible, whether through hands-on dissections, networking opportunities with guest speakers, or preparation for competitions such as the Brain Bee. By building this community, I hope members can not only further their understanding and involvement in the world of neuroscience, but also discover how it connects to real-world issues in healthcare and research.
      </Quote>
    </div>
    <div className="bg-lavender py-50">
      <h1 className="text-center text-4xl md:text-5xl mb-6 md:mb-12 font-bold">Recent Events</h1>
      <Carousel>
       {displayed_events}
      </Carousel>
    </div>
    <Footer></Footer>
  </div>);
}

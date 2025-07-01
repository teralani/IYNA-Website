// import Image from "next/image";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./navbar";



export default function Home() {
  return (
  <div className="">
    <Navbar selectedPage={0} darken={true}/>
    <Hero />
    <div className="h-screen">

    </div>
    <div className="grid">
        <p>hi</p>
    </div>
    <Footer></Footer>
  </div>);
}

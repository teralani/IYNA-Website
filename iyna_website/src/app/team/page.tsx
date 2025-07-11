import { Metadata } from "next";
import Footer from "../components/footer";
import Navbar from "../navbar";
import Profile from "./profile";

export const metadata: Metadata = {
  title: "Our Team | IYNA",
  description: "...",
};

export default function TeamPage() {
    return (
        <div>
            <Navbar selectedPage={3} />
            <div className="pt-44 flex flex-col items-center justify-center">
                <h1 className="max-md:px-6 text-4xl font-bold mb-4">Meet Our Team</h1>
                <p className="max-md:px-6 text-lg">Learn more about the dedicated individuals behind the IYNA.</p>
                <div className="mt-8">
                    {/* Team member profiles can be added here */}
                    <p className="max-md:px-6 mt-4 text-center max-w-2xl">
                        The LWSD Chapter of IYNA is run by a group of passionate individuals who are dedicated to promoting neuroscience education and outreach. To learn more about each of our team members, click on their profiles below. We are always looking for new members to join our team and help us in our mission to promote neuroscience education and outreach. If you are interested in joining us, please reach out to us by our email, or by clicking the New Members form below!
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mx-auto mt-8 mb-20">
                <div className="flex flex-wrap justify-center sm:mx-[5%] md:mx-[20%] lg:mx-[10%] xl:mx-[20%]">
                    <Profile
                        name="Haarika Nidadavolu"
                        position="President"
                        bio=" "
                    />
                    <Profile
                        name="Advaith Shyam"
                        position="Vice President"
                        bio=" "
                    />
                    <Profile
                        name="Aniketh Terala"
                        position="Events Coordinator"
                        bio=" "
                    />
                    <Profile
                        name="Ananya Raichura"
                        position="Public Relations"
                        bio=" "
                    />
                    <Profile
                        name="Devi Anand"
                        position="Secretary"
                        bio=" "
                    />
                    <Profile
                        name="Urja Varatkar"
                        position="Outreach Coordinator"
                        bio=" "
                    />
                </div>
            </div>
            <Footer/>
        </div>
    );  
}
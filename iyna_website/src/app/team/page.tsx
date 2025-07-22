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
            <div className="pt-44 flex flex-col items-center justify-center bg-lavender pb-20 text-dark-blue">
                <h1 className="max-md:px-6 text-4xl font-bold mb-4">Meet Our Team</h1>
                <p className="max-md:px-6 text-lg">Learn more about the dedicated individuals behind the IYNA.</p>
                <div className="mt-8">
                    {/* Team member profiles can be added here */}
                    <p className="max-md:px-6 mt-4 text-center max-w-2xl">
                        The LWSD Chapter of IYNA is run by a group of passionate individuals who are dedicated to promoting neuroscience education and outreach. To learn more about each of our team members, click on their profiles below. We are always looking for new members to join our team and help us in our mission to promote neuroscience education and outreach. If you are interested in joining us, please reach out to us by our email, or by clicking the New Members form below!
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mx-auto mt-12 mb-20">
                <h1 className="max-md:px-6 text-6xl font-bold mb-4">Chapter Officers</h1>
                <div className="flex flex-wrap justify-center sm:mx-[5%] md:mx-[20%] lg:mx-[10%] xl:mx-[20%] bg-faded-blue rounded-md">
                    <Profile
                        name="Haarika Nidadavolu"
                        position="President"
                        bio="Haarika is a senior at Eastlake High School in Sammamish, Washington. In addition to her enthusiasm for the IYNA LWSD Chapter, Haarika spends her time outside of school reading historical fiction novels and practicing Indian classical dance. She is currently conducting research in neuroscience and hopes to pursue a career in neurosurgery.
Haarika became involved in IYNA because she is passionate about exploring the brain and helping other students connect science to real-world impact. She believes that sparking curiosity at a young age is key to building the next generation of scientists, researchers, and healthcare leaders."
                    />
                    <Profile
                        name="Advaith Shyam"
                        position="Vice President"
                        bio="Coming Soon..."
                    />
                    <Profile
                        name="Devi Anand"
                        position="Secretary"
                        bio="Coming Soon..."
                    />
                    <Profile
                        name="Ashika Garg"
                        position="Treasurer"
                        bio="Coming Soon..."
                    />
                    <Profile
                        name="Aniketh Terala"
                        position="Events Coordinator"
                        bio="Aniketh is a senior at Eastlake High School in Sammamish, Washington. He first became fascinated by the world of neuroscience when learning how neuroanatomy influenced the beginnings of AI models. Aniketh joined IYNA due to his passion for the intersection of neuroscience and computer science, especially in new research. He hopes to host and organize events to expand neuroscience education and awareness in addition to inspiring the next generation of neuroscience leaders. Outside of the LWSD Chapter of IYNA, you can catch him exploring new hikes, learning new languages, and debating global issues in Model UN conferences. Aniketh is beyond ecstatic to see how this year's IYNA workshops, labs, and competitions will inspire new students."
                    />
                    <Profile
                        name="Urja Varatkar"
                        position="Outreach Coordinator"
                        bio="Coming Soon..."
                    />
                    <Profile
                        name="Rewa Rathee"
                        position="School Representative (Tesla Stem)"
                        bio="Coming Soon..."
                    />
                    <Profile
                        name="Layan Sattout"
                        position="School Representative  (Juanita High)"
                        bio="Coming Soon..."
                    />
                </div>
                <h1 className="max-md:px-6 text-6xl font-bold my-12">Interns</h1>
                <div className="flex flex-wrap justify-center sm:mx-[5%] md:mx-[20%] lg:mx-[10%] xl:mx-[20%] bg-light-blue rounded-md">
                    <Profile
                        name="Jane Karaca"
                        position="Media"
                        bio="Coming Soon..." 
                    />
                    <Profile
                        name="Neha Murkuri"
                        position="Media"
                        bio="Coming Soon..."
                    />
                    <Profile
                        name="Varnika Elenderthal"
                        position="Events"
                        bio="Coming Soon..."
                    />
                    <Profile
                        name="Prajna Sakshi"
                        position="Events"
                        bio="Coming Soon..."
                    />
                    <Profile
                        name="Arka Samatham"
                        position="Events"
                        bio="Coming Soon..."
                    />
                    <Profile
                        name="Arsema Sileshi"
                        position="Finance"
                        bio="Coming Soon..."
                    />
                </div>
            </div>
            <Footer/>
        </div>
    );  
}
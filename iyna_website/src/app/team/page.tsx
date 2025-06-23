import Footer from "../components/footer";
import Navbar from "../navbar";
import Profile from "./profile";

export default function TeamPage() {
    return (
        <div>
            <Navbar selectedPage={3} />
            <div className="pt-60 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
                <p className="text-lg">Learn more about the dedicated individuals behind the IYNA.</p>
                <div className="mt-8">
                    {/* Team member profiles can be added here */}
                    <p className="mt-4 text-center max-w-2xl">
                        The LWSD Chapter of IYNA is run by a group of passionate individuals who are dedicated to promoting neuroscience education and outreach. To learn more about each of our team members, click on their profiles below. We are always looking for new members to join our team and help us in our mission to promote neuroscience education and outreach. If you are interested in joining us, please reach out to us by our email, or by clicking the New Members form below!
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mx-auto mt-8 mb-20">
                <div className="flex flex-wrap justify-center sm:mx-[5%] md:mx-[20%] lg:mx-[10%] xl:mx-[20%]">
                    <Profile
                        name="Haarika Nidadavolu"
                        position="President"
                        bio="John is a neuroscience enthusiast with a passion for education and outreach. He has been involved in various neuroscience initiatives and is dedicated to promoting awareness about the brain."
                    />
                    <Profile
                        name="Advaith Shyam"
                        position="Vice President"
                        bio="John is a neuroscience enthusiast with a passion for education and outreach. He has been involved in various neuroscience initiatives and is dedicated to promoting awareness about the brain."
                    />
                    <Profile
                        name="Aniketh Terala"
                        position="Events Coordinator"
                        bio="John is a neuroscience enthusiast with a passion for education and outreach. He has been involved in various neuroscience initiatives and is dedicated to promoting awareness about the brain."
                    />
                    <Profile
                        name="Ananya Raihura"
                        position="Public Relations"
                        bio="John is a neuroscience enthusiast with a passion for education and outreach. He has been involved in various neuroscience initiatives and is dedicated to promoting awareness about the brain."
                    />
                    <Profile
                        name="Devi Anand"
                        position="Events Coordinator"
                        bio="John is a neuroscience enthusiast with a passion for education and outreach. He has been involved in various neuroscience initiatives and is dedicated to promoting awareness about the brain."
                    />
                    <Profile
                        name="Urja Varatkar"
                        position="Events Coordinator"
                        bio="John is a neuroscience enthusiast with a passion for education and outreach. He has been involved in various neuroscience initiatives and is dedicated to promoting awareness about the brain."
                    />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );  
}
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
                        bio="Haarika is a senior at Eastlake High School in Sammamish, Washington. In addition to her enthusiasm for the IYNA LWSD Chapter, Haarika spends her time outside of school reading historical fiction novels and practicing Indian classical dance. She is currently conducting research in neuroscience and hopes to pursue a career in neurosurgery. Haarika became involved in IYNA because she is passionate about exploring the brain and helping other students connect science to real-world impact. She believes that sparking curiosity at a young age is key to building the next generation of scientists, researchers, and healthcare leaders."
                    />
                    <Profile
                        name="Advaith Shyam"
                        position="Vice President"
                        bio="Advaith is a senior at Eastlake High School in Sammamish, Washington. He first developed a passion for neuroscience after reading one of his many fun fact books and discovering the complexity of cognition within the human brain. Advaith became a part of IYNA because of his deep interest for the connection of neuroscience to other anatomical sciences, such as neurocardiology, as well as his desire to spread knowledge to the neighboring middle schools and high schools. Away from developing IYNA workshops and hosting the IYNA LWSD NeuroPodcast, you can find Advaith watching the new movies released or producing music. Advaith can't wait to see how IYNA grows this year and welcomes everyone to the student-led IYNA community."
                    />
                    <Profile
                        name="Devi Anand"
                        position="Secretary"
                        bio="Hi! I’m Devi, and I’m currently serving as the Secretary of the International Youth Neuroscience Association (IYNA). I help with organizing meetings, keeping track of important documents, and making sure everything runs smoothly behind the scenes. I’m really passionate about making neuroscience more accessible and exciting for students everywhere. When I’m not working on IYNA projects, you can probably find me onstage—I absolutely love theatre and performing. It’s one of my favorite ways to explore new perspectives and connect with people."
                    />
                    <Profile
                        name="Ashika Garg"
                        position="Treasurer"
                        bio="Ashika Garg is a freshmen at the University of Washington in Seattle, Washington. She hopes to pursue a career in medicine and is fascinated by neurosurgery. She joined IYNA to learn more about neuroscience while being part of a community that seeks to educate and inspire more individuals. Outside of her passion for medicine she loves to read books and bake. She hopes to double major in neuroscience at business at the University of Washington and spends her time working on her organization that raises awareness for blood cancer. Ashika is excited to be a part of the IYNA team and take part in all of their exciting events."
                    />
                    <Profile
                        name="Aniketh Terala"
                        position="Events Coordinator"
                        bio="Aniketh is a senior at Eastlake High School in Sammamish, Washington. He first became fascinated by the world of neuroscience when learning how neuroanatomy influenced the beginnings of AI models. Aniketh joined IYNA due to his passion for the intersection of neuroscience and computer science, especially in new research. He hopes to host and organize events to expand neuroscience education and awareness in addition to inspiring the next generation of neuroscience leaders. Outside of the LWSD Chapter of IYNA, you can catch him exploring new hikes, learning new languages, and debating global issues in Model UN conferences. Aniketh is beyond ecstatic to see how this year's IYNA workshops, labs, and competitions will inspire new students."
                    />
                    <Profile
                        name="Ananya Raichura"
                        position="Public Relations"
                        bio="Ananya Raichura is a senior at Glacier Peak High School in Snohomish, Washington, with a strong interest in medicine and neuroscience. Her curiosity about why people think and behave the way they do led her to explore the brain’s impact on everyday life. She joined IYNA to dive deeper into neuroscience and help others discover its real-world connections through creative, hands-on workshops. Ananya is passionate about making science accessible and hopes to inspire lasting curiosity in others. Outside of IYNA, she enjoys photography, hiking, scrapbooking, traveling, listening to music, and playing sports. She loves spending time in nature, capturing meaningful moments, and making memories with the people around her. Ananya is excited to be part of a driven and passionate team, and she looks forward to helping the chapter grow while exploring new ways to share the wonder of neuroscience."
                        srcSuffix="jpg"
                    />
                    <Profile
                        name="Urja Varatkar"
                        position="Outreach Coordinator"
                        bio="Hello! My name is Urja Varatkar and I’m passionate about exploring neuroscience and sharing that excitement with the community through neuroscience outreach and education. I love connecting with others and helping make neuroscience more accessible and inspiring. Outside of neuroscience, I enjoy spending time with my family, friends, and my dog. In my free time, I love to bake and do taekwondo."
                    />
                    <Profile
                        name="Rewa Rathee"
                        position="School Representative (Tesla Stem)"
                        bio="Coming Soon..."
                    />
                    <Profile
                        name="Layan Sattout"
                        position="School Representative  (Juanita High)"
                        bio="Layan Sattout is a high school student in the class of 2026 at Juanita High School in Kirkland, Washington. With a deep passion for neuroscience and research, she actively seeks out programs and initiatives that challenge her curiosity and help her grow. She joined IYNA to be part of a movement that makes neuroscience exciting and accessible for all students, especially those who may not see themselves represented in the field. Layan believes that science should be shared, understood, and celebrated, and she’s excited to contribute to that through IYNA. In her free time, she enjoys cooking and baking, spending time with friends, staying organized, and even solving math problems just for fun."
                    />
                </div>
                <h1 className="max-md:px-6 text-6xl font-bold my-12">Interns</h1>
                <div className="flex flex-wrap justify-center sm:mx-[5%] md:mx-[20%] lg:mx-[10%] xl:mx-[20%] bg-light-blue rounded-md">
                    <Profile
                        name="Jane Karaca"
                        position="Media"
                        bio="Hi! My name is Jane Karaca and I’m a rising Junior in Eastlake High School. I joined IYNA because I’m passionate about taking part in spreading science to a wider audience and bringing people together through learning and ambition. I’m especially interested in bioengineering and how it can play a big part in shaping the future of science. Outside of IYNA, I’ve earned my 1st Degree Black Belt in Taekwondo and enjoy playing piano in my free time." 
                        srcSuffix="png"
                    />
                    <Profile
                        name="Neha Murkuri"
                        position="Media"
                        bio="Hi, I’m Neha Murkuri, and I am a rising junior in Eastlake High School. I am very passionate about neuroscience and mental health advocacy! I joined IYNA because I believe in making neuroscience more accessible—especially in areas that are often overlooked, like chronic pain conditions and invisible disabilities. As someone living with CRPS, a rare neurological pain disorder, I’ve experienced firsthand how limited public awareness can be, and I’m excited to contribute to a community that values education, innovation, and impact. Outside of school and IYNA, I love to write poetry, dance in three different forms, play the piano, and swim. Excited to be part of this journey and can’t wait to see what we accomplish together!"
                        srcSuffix="png"
                    />
                    <Profile
                        name="Varnika Elenthendral"
                        position="Events"
                        bio="Hi everyone! My name is Varnika Elenthendral and I’m a rising sophomore at Tesla STEM High School with a strong interest in neuroscience and cognitive science. I'm fascinated by how the brain adapts, learns, and processes information, and I hope to pursue a future career in neurology or neuroscience."
                        srcSuffix="png"
                    />
                    <Profile
                        name="Prajna Sakshi"
                        position="Events"
                        bio="Prajna Sakshi is a junior at Eastlake High School who has an interest in the medical field, particularly in the area of neuroscience. She hopes to address the pressing issue of addiction, both substance-related and behavioral, and strives to make a meaningful impact on community health. She has actively explored her interest in medicine through her involvement in Health Occupations Students of America (HOSA), the Youth Advisory Board of the Digital Youth Lab (UW-YAB), and by volunteering at Cornerstone Medical Clinic (CMS). In addition to her academic pursuits, Prajna is a National Honor Society (NHS) officer. Music is another passion of hers, one that has become a bridge to her interest in medicine. With over 100 hours of volunteer experience at Redmond Care and Rehabilitation and Aegis Living Marymoor and Issaquah, she provides music therapy through live guitar and vocal performances. She is also a varsity tennis player who competed in KingCo during her freshman year and actively participates in USTA matches. She believes that being a part of the IYNA will be an ideal way for her to continue her journey of pursuing neuroscience and advocacy."
                        srcSuffix="png"
                    />
                    <Profile
                        name="Arka Samatham"
                        position="Events"
                        bio="Hi, my name is Arka Samatham, and I’m a sophomore at Tesla STEM high school aspiring to become a neuroscientist. Through my work, I hope to build a collaborative and diverse community that breaks medical stigma for future generations. I joined IYNA to make the world of neuroscience more accessible and engaging for younger students. I believe that creating that spark of interest at young age is the key to shaping the next generation of doctors. Outside of academics, I love to pursue my hobby of playing basketball and tennis."
                    />
                    <Profile
                        name="Arsema Sileshi"
                        position="Finance"
                        bio="Hi, my name is Arsema Sileshi. I’m someone who loves exploring creative projects, whether it’s photography, writing, or anything that challenges me to think differently. I really enjoy studying history and understanding the world from different perspectives. People often describe me as organized and shy, but once I get to know everyone, you’ll find that I also really love to laugh and have fun with the people around me. I’m excited to be here, meet new people, and grow in any way I can during this internship."
                        srcSuffix="jpeg"
                    />
                </div>
            </div>
            <Footer/>
        </div>
    );  
}
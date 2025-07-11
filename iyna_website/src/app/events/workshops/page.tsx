import Card from "@/app/components/card";
import Footer from "@/app/components/footer";
import Navbar from "@/app/navbar";
import fs from 'fs/promises';

export default async function Workshops() {
    const file = await fs.readFile(process.cwd() + '/src/app/content.json', 'utf8');
    const data = JSON.parse(file)
    const curr_workshops = []
    const past_workshops = []

    let i = 0
    for (const w of data.events.workshops) {
        if (new Date(w.date) < new Date() ) {
            const el = (
                <Card
                    title={w.title}
                    description={w.description}
                    imageSrc={w.image_url}
                    buttonText={"Register Now"}
                    buttonLink={w.registration_link}
                    disable = {true}
                    number={i}
                    key={i}
                />
            );
            past_workshops.push(el)
        } else {
            const el = (
                <Card
                    title={w.title}
                    description={w.description}
                    imageSrc={w.image_url}
                    buttonText={"Register Now"}
                    buttonLink={w.registration_link}
                    key={i}
                />
            );
            curr_workshops.push(el)
        }
        i++
    }

    if(curr_workshops.length == 0) {
        curr_workshops.push(
            <div key={-1} className="w-screen h-80 bg-faded-blue mx-auto flex justify-center">
                <h1 className="my-auto text-lg md:text-3xl text-white font-bold">Currently, we have no workshops available. Please contact us to learn more about future events.</h1>
            </div>
        )
    }

    return (
        <div>
            <Navbar selectedPage={-1}/>
            <div className="flex flex-col items-center justify-center pt-60">
                <h1 className="text-4xl font-bold mb-4 text-center">Workshops</h1>
                <p className="text-lg text-center">Explore our workshops!</p>
            </div>
            <div className="flex flex-col items-center mx-auto mt-8 min-h-screen">
                <div className={`grid ${curr_workshops.length == 1? "flex items-center" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-20"}`}>
                    {curr_workshops}
                </div>
                <h1 className="text-4xl font-bold my-4 text-center">Past Workshops</h1>
                <div className={`grid ${past_workshops.length == 1? "flex items-center" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-20"}`}>
                    {past_workshops}
                </div>
            </div>
            <Footer />
        </div>
    );
}
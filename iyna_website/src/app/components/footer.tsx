import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white pt-4">
            <div className="px-6 bg-gray-800 flex flex-wrap flex-col md:flex-row justify-center text-center md:text-start mt-5 w-full md:max-w-[70rem] mx-auto mb-2 pb-4">
                <div className="pt-3 max-md:mx-auto mr-12 max-w-[30rem] text-start">
                    <h6 className="uppercase font-bold">About IYNA</h6>
                    <hr
                        className="mb-2 inline-block bg-purple border-t-0"
                        style={{width: "120px", height: "2px"}}
                    />
                    <p className="text-lavender">IYNA LWSD Chapter was founded by Haarika Nidadavolu in 2024. Since then, we have hosted numerous events like competitions, labs, and workshops. We hope to expand neuroscience education and to inspire the next generation of neuroscientists.</p>
                </div>
                <div className="flex flex-wrap pt-3 max-md:mx-auto">
                    <div className="w-34 mb-4 mx-3">
                        <h6 className="uppercase font-bold">Useful Links</h6>
                        <hr
                            className="mb-2 inline-block bg-purple border-t-0"
                            style={{width: "60px", height: "2px"}}
                        />
                        <p>
                            <Link href="/" className="text-lavender">Home</Link>
                        </p>
                        <p>
                            <Link href="/events" className="text-lavender">Events</Link>
                        </p>
                        <p>
                            <Link href="/team" className="text-lavender">Our Team</Link>
                        </p>
                        <p>
                            <Link href="/aboutus" className="text-lavender">About Us</Link>
                        </p>
                    </div>
                    <div className="w-34 mb-4 mx-3">
                        <h6 className="uppercase font-bold">Events</h6>
                        <hr
                            className="mb-2 inline-block bg-purple border-t-0"
                            style={{width: "60px", height: "2px"}}
                        />
                        <p>
                            <Link href="#!" className="text-lavender">Workshops</Link>
                        </p>
                        <p>
                            <Link href="#!" className="text-lavender">Competitions</Link>
                        </p>
                        <p>
                            <Link href="#!" className="text-lavender">NeuroPodcast</Link>
                        </p>
                        <p>
                            <Link href="#!" className="text-lavender">Fundraisers</Link>
                        </p>
                    </div>
                </div>

            </div>
            <div className="mx-auto text-center bg-gray-900 py-3">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} International Youth Neuroscience Association, LWSD Chapter. All rights reserved.
                </p>
                <p className="text-xs mt-2">
                    <Link id="instagram" href="https://www.instagram.com/lwsd_iynachapter/" target="_blank" className="text-gray-400 hover:text-white">Instagram</Link> |
                    <Link href="" className="text-gray-400 hover:text-white ml-1">Become a Member</Link> |
                    <Link id="email" href="mailto:iynalwsdchapter@gmail.com" className="text-gray-400 hover:text-white ml-2">Email</Link>
                </p>
            </div>
        </footer>
    );
}
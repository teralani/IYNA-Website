export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} International Youth Neuroscience Association, LWSD Chapter. All rights reserved.
                </p>
                <p className="text-xs mt-2">
                    <a id="instagram" href="https://www.instagram.com/lwsd_iynachapter/" target="_blank" className="text-gray-400 hover:text-white">Instagram</a> |
                    <a href="" className="text-gray-400 hover:text-white ml-1">Become a Member</a> |
                    <a id="email" href="mailto:iynalwsdchapter@gmail.com" className="text-gray-400 hover:text-white ml-2">Email</a>
                </p>
            </div>
        </footer>
    );
}
// import Image from 'next/image';
import {Gantari} from "next/font/google"

const gantari = Gantari({
  subsets: ["latin"],
});

export default function Hero() {
    return (
        <div className='hero relative w-full h-screen flex items-center justify-center overflow-hidden bg-dark-blue pt-20'>
            {/* <Image
                src= "/brain.svg"
                alt= "Hero Image"
                width={1920}
                height={1080}
                className="w-full h-auto object-contain"
            /> */}
            <div className="max-lg:backdrop-blur-md w-full h-screen absolute">
            </div>
            <svg className="brain-svg lg:h-max opacity-[0.5]" width="1350.000000pt" height="1038.000000pt" viewBox="0 0 1350.000000 1038.000000" preserveAspectRatio="xMidYMid meet">
                    <defs>
                        <linearGradient id="myLinearGradient" x1="-5%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#E6E6FA" />
                        <stop offset="10%" stopColor="#9dd2d4" />
                        <stop offset="30%" stopColor="#6d9bc2" />
                        <stop offset="60%" stopColor="#1e385b" />
                        <stop offset="95%" stopColor="#6c638c" />
                        </linearGradient>
                    </defs>
                    <g fill="transparent" vectorEffect="non-scaling-stroke"  transform = "translate(0.000000,1038.000000) scale(0.100000,-0.100000)">
                        <path stroke="url(#myLinearGradient)" strokeWidth="100" strokeLinecap="round" d = "M6780 4374c-178-158-385-268-511-618-249-769 450-734 667-676M9442 5059c928 621 1073 1219 1009 1533-117 278-304 582-1171 194-501-324-996-841-1028-1294-15-254.3333-13-433-45-763-130-737-873-1506-1271-1649 184-359 504-372 896-278M9605 6238c-125-83-186-98-373-331-361-616-292-246-338-1503-33-455-194-1149-1062-1605 58-573 1196-375 1396-55m-601 71c491-194 860-29 1374 220m-769-291c465-369 1251 29 1374 439M9173 3494c401-26 644 71 802 278m-57 249c192-1245 1400-905 1427-260M9428 4357c485 128 719 463 932 788-165-1427 815-1379 990-1374 400 213 432 511 378 735M9364 7392c927 681 1608-266 1661-767 75-500-85-1427-106-1507 27-559 447-708 820-612 586 453 160 1304-149 1368m-155-591c655 1891-346 3429-1927 2993M7495 5656c64 958 874 1491 1134 1762 368 256 650 528 879 858 298 479 0 947-708 719M7330 6897c251 484 570 809 921 1144 368 288 682 666 549 954-282 580-1464 324-2045-522m-133 575c-463 229-852 229-1310-69m1896-512c-884-21-1257 86-1896 512-415 63-788 159-1139-118-778-628 724-1762 2428-1777M4988 8334c628-532 1389-644 2092-601m910 894c-612-532-1560-1459-1761-2418m-257 402c-285 26-566 58-938 199m291-591C4540 8243 2629 8334 2732 7270m1455-524c-847 1016-3046 505-2321-879m110-679c478 834 1610 902 1820 339m-1559 7c-145 78-252 187-375 330-90-20-688-705-181-1216 107-36 576-495 1446 653m-951-763c-32-268 155-427 433-433m-19 2315c504 252 1597-36 1875-711m372 226C3835 5489 3521 4144 2609 4105c20-417 369-640 951-395M7659 6290c-1215 266-2221-245-3097-1610-307-452-582-737-1002-970 336-475 874-277 1172 72l685 889c569 747 1145 942 1420 929"></path>
                        <path id="path2"stroke="url(#myLinearGradient)" strokeWidth="100" strokeLinecap="round" d="M7103 1466c-10-348 240-471 551-383 220 68 325 288 166 446-93 138-252 203-868 228-228-17-491 97-686 446m1291-511c33 430-345 746-1181 803-239 33-527 33-913 511-519 845 1193 2415 1883 2042 374-272 142-905-397-1295"/>
                    </g>
                 </svg>
            <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[var(--foreground)]">
                <h1 className={`text-4xl md:text-6xl mb-4 text-white md:mx-auto md:max-w-[80%] ${gantari.className}`} style={{fontWeight: 600}}>Discover your passion for neuroscience.</h1>
                <p className={`text-lg md:text-2xl mb-8 text-lavender text-center md:mx-auto md:max-w-[80%] ${gantari.className}`}>Connect and learn more about the neuroscience community as a part of the LWSD Chapter of IYNA. Discover how joining IYNA can inspire you, today!</p>
                <a href="/aboutus" className="text-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full max-md:text-md">
                    Learn More
                </a>
            </div>
        </div>
    )
}
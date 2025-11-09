"use client"
import { ReactNode } from "react"
import Image from "next/image"

const Quote = ({children, author} : {children : ReactNode, author: string}) => {
    return (
        <div className="flex justify-center min-h-120 flex-wrap">
            <div className="relative rounded-full min-h-96 mb-8 md:rounded-2xl w-86 overflow-clip shadow-lg">
                <Image
                src="/IYNAHEADSHOT.jpeg"
                alt="Haarika Nidavolu"
                fill={true}
                objectFit={"cover"}
                />
            </div>
            <div className="w-4xl relative px-20 bg-[#eff4f8] rounded-2xl mx-5 md:mx-20 flex justify-center flex-col shadow-lg py-15">

                <span className="quote -my-2">
                    <svg className="w-20 fill-blue" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21.301 4c.411 0 .699.313.699.663 0 .248-.145.515-.497.702-1.788.948-3.858 4.226-3.858 6.248 3.016-.092 4.326 2.582 4.326 4.258 0 2.007-1.738 4.129-4.308 4.129-3.24 0-4.83-2.547-4.83-5.307 0-5.98 6.834-10.693 8.468-10.693zm-10.833 0c.41 0 .699.313.699.663 0 .248-.145.515-.497.702-1.788.948-3.858 4.226-3.858 6.248 3.016-.092 4.326 2.582 4.326 4.258 0 2.007-1.739 4.129-4.308 4.129-3.241 0-4.83-2.547-4.83-5.307 0-5.98 6.833-10.693 8.468-10.693z" fillRule="nonzero"/></svg>
                </span>
                <span className="md:text-lg my-5">{children}</span>

                <span className="">
                    <div id="t" className="py-4"> <span className="text-lg md:text-2xl font-bold">— {author}</span> <p className="relative mx-7 italic">Chapter President</p></div>
                    <svg  className="float-right -my-22 w-20 fill-blue" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.699 20c-.411 0-.699-.312-.699-.662 0-.249.145-.516.497-.703 1.788-.947 3.858-4.226 3.858-6.248-3.016.092-4.326-2.582-4.326-4.258 0-2.006 1.738-4.129 4.308-4.129 3.241 0 4.83 2.547 4.83 5.307 0 5.981-6.834 10.693-8.468 10.693zm10.833 0c-.41 0-.699-.312-.699-.662 0-.249.145-.516.497-.703 1.788-.947 3.858-4.226 3.858-6.248-3.015.092-4.326-2.582-4.326-4.258 0-2.006 1.739-4.129 4.308-4.129 3.241 0 4.83 2.547 4.83 5.307 0 5.981-6.833 10.693-8.468 10.693z" fillRule="nonzero"/></svg>
                </span>
            </div>
            <style jsx>{`
                @media screen and (min-width: 1058px ) {
                    .quote::after {
                        content: "";
                        width: 85%;
                        height: 3px;
                        display: block;
                        background-color: var(--color-blue);
                        transform: translate(5rem, -30);
                    }
                    #t::before {
                    content: "";
                        height: 3px;
                        display: block;
                        background-color: var(--color-blue);
                        width: 40%;
                        position: absolute;
                        transform: translate(18rem, 10);
                    }
            }
            `}</style>
        </div>
    )


}

export default Quote
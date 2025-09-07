"use client";
import CompaniesMarq from "@/components/companies/CompaniesMarq";
import Footer3 from "@/components/footernew/Footer3";
import Industries from "@/components/Industries/Industries";
import Modal from "@/components/modal/Modal";
import Partnerships from "@/components/partnership/Partnerships";
import Services from "@/components/services3/Services";
import Statistics from "@/components/statistics/Statistics";
// import v from "../../public/assests/DCWebsiteBanner.mp4"
import { scrollBy } from "@/utilities/scrollanim";
import { useState } from "react";
import "animate.css";
import Presence3 from "@/components/presence/Presence3";
import ContactUs from "@/components/contactmodal/ContactUs";
import Link from "next/link";
import BlurText from "@/components/BlurText";


export default function Home() {
    const [quotedisplay, setquotedisplay] = useState(false);

  return (

    <>

    <div id="video-test" >
      <video className="" src="assests/DCWebsiteBanner.mp4" poster="assests/video_poster.png" preload="auto"  autoPlay loop muted playsInline >
            <source src="./xcis homepage video.webm" type="video/webm" />
      <source src="./xcis homepage video.mp4" type="video/mp4" />
      </video>
    <section className="content">
    <div className="flex flex-col items-center px-4 py-12 text-center">

        <h2 className="text-3xl md:text:4xl font-bold tracking-tight text-white-800 xl:text-6xl dark:text-white">
            <BlurText
  text="Secure. Reliable. Dependable."
  delay={150}
  animateBy="words"
  direction="top"
//   onAnimationComplete={handleAnimationComplete}
  className="text-3xl md:text:4xl font-bold tracking-tight text-white-800 xl:text-6xl dark:text-white flex justify-center"
/>
        
        </h2>



        {/* <p className="block max-w-4xl mt-4 text-gray-500 text-xl font-medium text-white/[0.8]"> */}
        <BlurText
  text="With AuthCor as your partner, you can focus on your core business while we handle the complexities of your data center."
  delay={150}
  animateBy="words"
  direction="bottom"
//   onAnimationComplete={handleAnimationComplete}
  className="max-w-4xl mt-4  text-center text-xl font-medium text-white flex justify-center"
/>
        {/* With AuthCor as your partner, you can focus on your core business while we handle the complexities of your data center. */}
        {/* </p> */}

        <div className="mt-6 ">
            
            <button onClick={()=>{setquotedisplay(true)}}  className="inline-flex font-sans font-semibold items-center justify-center w-full px-10 py-2.5 overflow-hidden text-md font-medium text-white transition-colors duration-300 bg-red-500 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-white hover:text-black  border-0 border-red-500 ">
                <span className="mx-2">
                    Contact us
                </span>
            </button>

            <Link href="/about"
                className="inline-flex items-center font-semibold justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-md text-white hover:border-red transition-colors duration-300 border-2 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:border-red-500 hover:bg-red-500">
                <span className="mx-2">
                    Know more
                </span>
            </Link>


        </div>
        <div className="mt-16 cursor-pointer hover:scale-150" onClick={()=>{scrollBy(document.documentElement.clientHeight-30,1000)}}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="22" stroke="white" strokeWidth="2"/>
                <line x1="24" y1="12" x2="24" y2="32" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="18" y1="26" x2="24" y2="32" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="30" y1="26" x2="24" y2="32" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </div>
    </div>
</section>
    </div>

    <Services/>
    <Statistics/>
    <CompaniesMarq/>

    <Partnerships/>

    <Industries/>

    <Presence3/>


    <Footer3/>
    <Modal open={quotedisplay} onClose={()=>{setquotedisplay(false)}} >

<ContactUs/>
</Modal>

    </>

  );
}

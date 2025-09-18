"use client"
import BlurText from "@/components/BlurText";
import DarkVeil from "@/components/DarkVeil";
import Footer3 from "@/components/footernew/Footer3";
import React from "react";

export default function ServiceHero() {
  return (
    <>
    <section className="relative flex flex-col items-center justify-center h-screen  text-white text-center px-4">
      <div className="absolute top-0 left-0 h-screen w-screen" >
  <DarkVeil hueShift={242} />
</div>

<div className="z-10 grid justify-center items-center gap-8" >

      <div className="backdrop-blur-sm py-2 w-fit justify-self-center rounded-full border border-white/40  px-24 flex justify-center">
        <span className="text-sm  tracking-wide">Infrastructure Built Around You</span>
      </div>

      {/* <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-wide">
        Be Part Of The Mission
      </h1> */}
       <BlurText
  text="More Than Data Storage. "
  delay={150}
  animateBy="words"
  direction="top"
  className="text-4xl md:text:5xl  tracking-tight text-white-800 lg:text-7xl text-white flex justify-center"
/>
       <BlurText
  text="It’s Business Continuity."
  delay={150}
  animateBy="words"
  direction="top"
  className="text-4xl md:text:5xl  tracking-tight text-white-800 lg:text-7xl text-white flex justify-center"
/>

      <p className="text-base sm:text-lg max-w-2xl text-white">
        Authcor ensures uptime, security, and scalability, so you focus on growth while we safeguard your most critical assets.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-2 bg-white border border-white text-black rounded-lg  shadow hover:bg-transparent hover:text-white transition">
          Know More
        </button>
        <button className="px-8 py-2 border border-white text-white rounded-lg  hover:bg-white hover:text-black transition">
          Company Insights
        </button>
      </div>
</div>
    
    </section>

    </>
  );
}

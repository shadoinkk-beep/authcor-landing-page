// src/components/Hero.tsx
"use client";

import DarkVeil from "@/components/DarkVeil";
import React from "react";
import BlurText from "../BlurText";
  const buttons = [
    "Deployment & Maintenance",
    "Network Migrations",
    "Cloud & Hybrid",
    "Remote Hands & Eye Support",
  ];

export default function AboutHero() {
  return (
    <div className="relative pt-36 pb-12  w-full min-h-screen h-fit bg-gradient-to-br from-black via-black to-red-800 text-white overflow-hidden">
      {/* Top Left Section */}
      <div className="absolute top-0 left-0 h-full w-screen" >
        <DarkVeil hueShift={242} />
      </div>
        <div className="grid px-6 gap-y-16  max-w-7xl mx-auto md:content-between sm:h-[70vh]">

<div className="relative gap-y-6  text-white flex flex-col md:flex-row items-center justify-between ">
      {/* Left Section */}
      <div className="flex-1 mb-6 md:mb-0">
        <p className="text-sm md:text-base mb-4 border-b border-white pb-6">
          Freeing Businesses From Data Risks Through 
          <br />Reliability and Innovation
        </p>
        <div className="flex flex-wrap gap-3">
          {buttons.map((btn) => (
            <button
              key={btn}
              className="border border-white rounded-full px-4 py-2 text-sm bg-white/20 hover:bg-white backdrop-blur-sm hover:text-red-700 transition"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 text-right">
        <BlurText
  text="Authcor Technologies"
  delay={150}
  animateBy="words"
  direction="top"
  className="text-4xl md:text:5xl  tracking-tight text-white-800 lg:text-7xl text-white flex justify-end"
/>
        {/* <h1 className="text-4xl md:text-6xl tracking-wide font-bold">Authcor Technologies</h1> */}
      </div>
    </div>

      {/* Bottom Left Text */}
<div className="w-full relative gap-y-6  grid gap-4 sm:flex items-center justify-between  text-white">
      {/* Left Side Content */}
      <div className="max-w-lg">
        <p className="text-lg leading-relaxed">
          We transform{" "}
          <span className="font-medium">Fleeting moments</span> into everlasting
          memories, using innovation and creativity to craft visual stories that
          resonate.
        </p>
        <div className="flex gap-4 mt-6">
          <button className="px-5 py-2 rounded-md border bg-white  text-black font-medium shadow-md hover:bg-transparent hover:text-white transition">
            Know More About Author
          </button>
          <button className="px-5 py-2 rounded-md border border-white font-medium hover:bg-white hover:text-black transition">
            Unlock Industry Insights
          </button>
        </div>
      </div>

      {/* Right Side Card */}
      <div className="bg-white/40 border border-white rounded-3xl p-6 shadow-lg max-w-sm w-full">
        <h3 className="font-semibold text-white">Author.com</h3>
        <p className="text-sm text-gray-300 mt-2">
          Powering growth with Tier III+ data centers, trusted by enterprises
          and innovators across Asia.
        </p>
        <button className="w-full mt-4 px-5 py-2 rounded-lg bg-white text-black shadow hover:bg-gray-100 transition">
          Plan Your Consultation
        </button>
      </div>
    </div>
        </div>

    </div>
  );
};


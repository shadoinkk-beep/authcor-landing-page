"use client"
import BlurText from "@/components/BlurText";
import DarkVeil from "@/components/DarkVeil";
import Footer3 from "@/components/footernew/Footer3";
import React from "react";
import { JobsEXp } from "./page1";
import { scrollBy } from "@/utilities/scrollanim";

import { motion } from "framer-motion";
import Link from "next/link";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function MissionSection() {
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



       <BlurText
  text="Be Part Of The Mission"
  delay={150}
  animateBy="words"
  direction="top"
  className="text-4xl md:text:5xl  tracking-tight text-white-800 lg:text-7xl text-white flex justify-center"
/>


      <motion.div
      className="text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.p
        className="text-base sm:text-lg max-w-2xl text-white mx-auto mb-8"
        variants={textVariants}
      >
        We're looking for curious people ready to grow with us. At Author, we champion <br /> trust, clarity, and taking full responsibility.
      </motion.p>

      <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={textVariants}>
        <button               
                      onClick={() => {
                scrollBy(document.documentElement.clientHeight - 30, 1000);
              }}
               className="px-8 py-2 bg-white border border-white text-black rounded-lg shadow hover:bg-transparent hover:text-white transition">
          Know More
        </button>
<Link
  href="/insights"
  className="px-8 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition block text-center"
>
  Company Insights
</Link>
      </motion.div>
    </motion.div>
</div>
    
    </section>

    <JobsEXp/>
    <Footer3/>
    </>
  );
}

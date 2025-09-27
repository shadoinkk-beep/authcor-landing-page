// app/about/aboutclient.tsx
"use client";

import { FC } from "react";
import { motion } from "framer-motion";

import AboutHero from "@/components/about/AboutHero";
import { ServiceCardEx } from "@/components/services/Serviceslg";
import { serviceJson } from "@/components/services3/servicesjson";
import { StatisticsTable } from "@/components/statistics/Statistics";
import Footer3 from "@/components/footernew/Footer3";
import Link from "next/link";

// Core Values Array
const coreValues = [
  {
    title: "Expertise is Our Foundation",
    text: "We employ certified engineers, not just technicians. We solve complex problems with deep knowledge and a proactive, strategic mindset."
  },
  {
    title: "Reliability is Our Promise",
    text: "We operate with unwavering discipline, 24/7/365. Our clients trust us because we deliver on our commitments, every time. It's in our DNA."
  },
  {
    title: "Partnership is Our Method",
    text: "Your objectives become our objectives. We integrate seamlessly, communicate with clarity, and measure our success by your success."
  },
  {
    title: "Precision is Our Standard",
    text: "In the data center, there is no margin for error. We execute every task, from cabling a rack to managing a global deployment, with meticulous attention to detail."
  }
];

// Framer Motion Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const } // cast to const
  }
};



const AboutClient: FC = () => {
  return (
    <>
      <AboutHero />

      <CoreValuesSec />

      <div className="container py-12 pb-0 mx-auto  max-w-7xl px-4 sm:px-0">
        {/* Mission Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeUp}>
          <div className="flex flex-col-reverse md:flex-row py-8 gap-12">
            <div className="md:w-2/4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">OUR MISSION</h2>
              <p className="text-gray-700 mb-6">
                To uncomplicate global infrastructure management, empowering our clients...
              </p>
            </div>
            <img src="assests/ourmission.jpeg" alt="Network cables" className="rounded-lg shadow-lg md:w-2/4 max-h-60 object-cover" />
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false}} variants={fadeUp} className="grid md:flex gap-12">
          <img src="assests/ourvission.jpg" alt="Network cables" className="rounded-lg shadow-lg md:w-2/4 max-h-60 object-cover" />
          <div className="md:w-2/4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">OUR VISION</h2>
            <p className="text-gray-700 mb-6">
              To be the world's most trusted and respected name in data center operational excellence...
            </p>
          </div>
        </motion.div>
      </div>

      {/* Engineered Section */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false}} variants={fadeUp} className="text-black container px-5 py-12 md:mx-auto max-w-7xl text-center">
        <h2 className="text-4xl font-bold font-sans">Engineered for the New Era of Global IT</h2>
        <p className="m-6">
          Headquartered in Singapore, AuthCor was born from a frustration with the status quo...
        </p>
      </motion.div>

      <StatisticsTable />

      {/* Services Section */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false}} variants={fadeUp} className="text-black container mt-12 grid justify-items-center mx-auto  max-w-7xl px-4 sm:px-0">
        <h2 className="text-4xl font-bold font-sans">Our Comprehensive Services</h2>
        <p className="text-md m-4">At Authcor Technologies, we empower businesses with robust, scalable data center solutions.</p>
        <Link href={"/services"} className="py-2 mt-4 flex gap-8 text-black relative h-fit w-fit overflow-hidden border border-black bg-white rounded-xl text-red-500 shadow-2xl transition-all hover:text-black hover:shadow-red-500">
          <span className="relative z-10 p-2 grid gap-8 grid-flow-col items-center text-black hover:text-black">
            Explore all services
          </span>
        </Link>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false}} variants={fadeUp} className="container px-5 py-12 md:mx-auto max-w-7xl justify-items-center flex flex-wrap my-4 text-black">
        {serviceJson.slice(0, 3).map((serv, i) => (
          <ServiceCardEx img={i} key={serv.title} subtitle={serv.subtitle} checks={serv.checks} title={serv.title} text={serv.text} />
        ))}
      </motion.div>

      <Footer3 />
    </>
  );
};

export default AboutClient;

// Core Values Component
const CoreValuesSec: FC = () => (
  <section className="container py-12 pb-0  mx-auto  max-w-7xl px-4 sm:px-0">
    <div className="text-black grid text-center">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false}} variants={fadeUp}>
        <h2 className="text-4xl font-bold font-sans">Our Core Values</h2>
        <p className="m-6">At Authcor Technologies, our values shape who we are and guide everything we do.</p>
      </motion.div>
    </div>
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: false}} variants={fadeUp}>
      <CompRow props={coreValues.slice(0, 2)} />
    </motion.div>
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: false}} variants={fadeUp}>
      <CompRow props={coreValues.slice(2, 4)} />
    </motion.div>
  </section>
);

type CardData = { title: string; text: string }[];

const CompRow: FC<{ props: CardData }> = ({ props }) => (
  <div className="px-12 py-8 my-6 bg-gray-100 rounded-3xl">
    <div className="grid md:flex gap-8">
      {props.map((val, idx) => (
        <div key={idx} className={`text-black md:w-1/2 w-full pr-4 grid ${idx < props.length - 1 ? "border-b-2 border-b-red-600 pb-6 sm:pb-0 md:border-r-2 md:border-r-red-600 md:border-b-0" : ""}`}>
          <h5 className="font-semibold">{val.title}</h5>
          <p>{val.text}</p>
        </div>
      ))}
    </div>
  </div>
);

"use client";

import DarkVeil from "@/components/DarkVeil";
import { motion } from "framer-motion";
import Link from "next/link";
import { scrollBy } from "@/utilities/scrollanim";
const buttons = [
  "Deployment & Maintenance",
  "Network Migrations",
  "Cloud & Hybrid",
  "Remote Hands & Eye Support",
];

export default function AboutHero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 } // removed ease string
  },
};


  return (
    <div className="relative pt-36 pb-12 w-full min-h-screen h-fit bg-gradient-to-br from-black via-black to-red-800 text-white overflow-hidden">
      {/* Top Left Section */}
      <div className="absolute top-0 left-0 h-full w-screen">
        <DarkVeil hueShift={242} />
      </div>

      <div className="grid px-6 gap-y-16 max-w-7xl mx-auto md:content-between sm:h-[70vh]">
        <motion.div
          className="relative gap-y-6 gap-x-48 text-white flex flex-col md:flex-row items-center justify-between"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Section */}
          <motion.div className="flex-1 mb-6 md:mb-0" variants={fadeUp}>
            <motion.p
              className="text-sm md:text-base mb-4 border-b border-white pb-6"
              variants={fadeUp}
            >
              Freeing Businesses From Data Risks Through
              <br />
              Reliability and Innovation
            </motion.p>

            <motion.div className="flex flex-wrap gap-3" variants={containerVariants}>
              {buttons.map((btn) => (
                <motion.button
                  key={btn}
                  className="border border-white rounded-full px-4 py-2 text-sm bg-white/20 hover:bg-white backdrop-blur-sm hover:text-red-700 transition"
                  variants={fadeUp}
                >
                  {btn}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div className="grid" variants={fadeUp}>
            <motion.div className="flex-1 text-right" variants={fadeUp}>
              <motion.h1
                className="text-3xl md:text-4xl tracking-tight lg:text-5xl flex justify-end"
                variants={fadeUp}
              >
                The Partner We Wanted.
              </motion.h1>
            </motion.div>

            <motion.div className="flex-1 text-right" variants={fadeUp}>
              <motion.h1
                className="text-3xl md:text-4xl tracking-tight lg:text-5xl flex justify-end"
                variants={fadeUp}
              >
                So, We Built It.
              </motion.h1>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Left Text */}
        <motion.div
          className="w-full relative gap-y-6 grid gap-4 sm:flex items-center justify-between text-white"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Side Content */}
          <motion.div className="max-w-lg" variants={fadeUp}>
            <p className="text-lg leading-relaxed">
              We transform{" "}
              <span className="font-medium">Fleeting moments</span> into
              everlasting memories, using innovation and creativity to craft
              visual stories that resonate.
            </p>
            <div className="flex gap-4 mt-6">
              <motion.button
                className="px-5 py-2 rounded-md border bg-white text-black font-medium shadow-md hover:bg-transparent hover:text-white transition"
                variants={fadeUp}
                                            onClick={() => {
                scrollBy(document.documentElement.clientHeight - 30, 1000);
              }}
              >
                Know More About Author
              </motion.button>
<motion.div variants={fadeUp}>
  <Link
    href="/insights"
    className="px-5 py-2 rounded-md border border-white font-medium hover:bg-white hover:text-black transition block text-center"
  >
    Unlock Industry Insights
  </Link>
</motion.div>
            </div>
          </motion.div>

          {/* Right Side Card */}
          <motion.div
            className="bg-white/40 border border-white rounded-3xl p-6 shadow-lg max-w-sm w-full"
            variants={fadeUp}
          >
            <h3 className="font-semibold text-white">Author.com</h3>
            <p className="text-sm text-gray-300 mt-2">
              Powering growth with Tier III+ data centers, trusted by
              enterprises and innovators across Asia.
            </p>
            <Link href={"/contact/partnership"} className="block w-full mt-4 px-5 py-2 rounded-lg bg-white text-black shadow hover:bg-gray-100 transition">
              Plan Your Consultation
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

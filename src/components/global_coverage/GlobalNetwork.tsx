"use client";
import React from "react";
import { motion } from "framer-motion";

const GlobalNetwork: React.FC = () => {
  // Parent container for staggered card appearance
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  // Each card animation
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // For internal content (heading, text, list items)
  const innerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section className="bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-12 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // 👈 re-animates every time in view
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            A Global Network Built for <br className="hidden md:block" /> Enterprise Performance
          </h2>
          <p className="text-gray-300 max-w-4xl mx-auto py-4">
            With over 40 operational metros across APAC, EMEA, and the Americas, Authcor delivers
            consistent uptime and connectivity through Tier III and IV certified facilities. From
            hyperscale hubs like Singapore and Ashburn to emerging markets across India and Dubai,
            our infrastructure powers mission-critical workloads worldwide.
          </p>
        </motion.div>

        {/* Cards Container */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // 👈 also re-animates
          variants={container}
        >
          {/* APAC */}
          <motion.div
            className="bg-[#f8f8f8] text-gray-900 rounded-sm p-6 py-10 shadow-md"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }} // 👈 each card re-animates
          >
            <motion.div variants={innerContainer}>
              <motion.h3 variants={fadeInUp} className="text-xl font-semibold mb-2">
                APAC
              </motion.h3>
              <motion.p variants={fadeInUp} className="text-gray-600 mb-4 text-sm">
                Our Asia-Pacific presence is anchored in major hubs. Also serving: India (Mumbai,
                Chennai), Indonesia, New Zealand, China, Malaysia, South Korea, Thailand, and more.
              </motion.p>
              <motion.ul variants={innerContainer} className="space-y-3 text-sm">
                {[
                  "Singapore (e.g., Equinix SG1–SG5, Digital Realty JUR)",
                  "Tokyo, Japan (e.g., Equinix TY1–TY13, AT TOKYO)",
                  "Sydney, Australia (e.g., Equinix SY1–SY5, NEXTDC S1–S3)",
                  "Hong Kong (e.g., Equinix HK1–HK5, MEGA-i)",
                ].map((item, idx) => (
                  <motion.li key={idx} className="flex items-start gap-2" variants={fadeInUp}>
                    <img src="/assests/tick_circular.png" alt="tick" className="w-6 h-6" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* EMEA */}
          <motion.div
            className="bg-red-600 text-white rounded-sm p-6 py-10 shadow-md"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
          >
            <motion.div variants={innerContainer}>
              <motion.h3 variants={fadeInUp} className="text-xl font-semibold mb-2">
                EMEA
              </motion.h3>
              <motion.p variants={fadeInUp} className="text-gray-100 mb-4 text-sm">
                Our Europe, Middle East & Africa operations provide coverage in key markets: Paris 🇫🇷 |
                Dublin 🇮🇪 | Dubai 🇦🇪 | Johannesburg 🇿🇦 and 20+ more countries.
              </motion.p>
              <motion.ul variants={innerContainer} className="space-y-3 text-sm">
                {[
                  "Frankfurt, Germany (e.g., Equinix FR1–FR8, Interxion FRA)",
                  "London, United Kingdom (Slough Trading Estate, Docklands)",
                  "Amsterdam, Netherlands (Science Park)",
                ].map((item, idx) => (
                  <motion.li key={idx} className="flex items-start gap-2" variants={fadeInUp}>
                    <img src="/assests/tick_circular.png" alt="tick" className="w-4 h-4 mt-[2px]" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* AMERICAS */}
          <motion.div
            className="bg-[#f8f8f8] text-gray-900 rounded-sm p-6 py-10 shadow-md"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
          >
            <motion.div variants={innerContainer}>
              <motion.h3 variants={fadeInUp} className="text-xl font-semibold mb-2">
                AMERICAS
              </motion.h3>
              <motion.p variants={fadeInUp} className="text-gray-600 mb-4 text-sm">
                We provide coast-to-coast coverage in North and South America’s most critical markets:
                Toronto, Canada | São Paulo, Brazil | Querétaro, Mexico, and more.
              </motion.p>
              <motion.ul variants={innerContainer} className="space-y-3 text-sm">
                {[
                  "Ashburn, Virginia, USA (“Data Center Alley”)",
                  "Silicon Valley, California, USA (Santa Clara)",
                  "Dallas, Texas, USA | Chicago, Illinois, USA",
                ].map((item, idx) => (
                  <motion.li key={idx} className="flex items-start gap-2" variants={fadeInUp}>
                    <img src="/assests/tick_circular.png" alt="tick" className="w-4 h-4 mt-[2px]" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalNetwork;

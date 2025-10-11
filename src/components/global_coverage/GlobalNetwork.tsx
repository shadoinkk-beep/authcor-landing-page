"use client";
import React from "react";
import { motion } from "framer-motion";

const GlobalNetwork: React.FC = () => {
  // Animation variants
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-12 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
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
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          {/* APAC */}
          <motion.div
            className="bg-[#f8f8f8] text-gray-900 rounded-sm p-6 py-10 shadow-md"
            variants={fadeUp}
          >
            <h3 className="text-xl font-semibold mb-2">APAC</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Our Asia-Pacific presence is anchored in major hubs. Also serving: India (Mumbai,
              Chennai), Indonesia, New Zealand, China, Malaysia, South Korea, Thailand, and more.
            </p>
            <ul className="space-y-3 text-sm">
              {[
                "Singapore (e.g., Equinix SG1–SG5, Digital Realty JUR)",
                "Tokyo, Japan (e.g., Equinix TY1–TY13, AT TOKYO)",
                "Sydney, Australia (e.g., Equinix SY1–SY5, NEXTDC S1–S3)",
                "Hong Kong (e.g., Equinix HK1–HK5, MEGA-i)",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <img src="/assests/tick_circular.png" alt="tick" className="w-6 h-6" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* EMEA */}
          <motion.div
            className="bg-red-600 text-white rounded-sm p-6 py-10 shadow-md"
            variants={fadeUp}
          >
            <h3 className="text-xl font-semibold mb-2">EMEA</h3>
            <p className="text-gray-100 mb-4 text-sm">
              Our Europe, Middle East & Africa operations provide coverage in key markets: Paris 🇫🇷 |
              Dublin 🇮🇪 | Dubai 🇦🇪 | Johannesburg 🇿🇦 and 20+ more countries
            </p>
            <ul className="space-y-3 text-sm">
              {[
                "Frankfurt, Germany (e.g., Equinix FR1–FR8, Interxion FRA)",
                "London, United Kingdom (Slough Trading Estate, Docklands)",
                "Amsterdam, Netherlands (Science Park)",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <img src="/assests/tick_circular.png" alt="tick" className="w-4 h-4 mt-[2px]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* AMERICAS */}
          <motion.div
            className="bg-[#f8f8f8] text-gray-900 rounded-sm p-6 py-10 shadow-md"
            variants={fadeUp}
          >
            <h3 className="text-xl font-semibold mb-2">AMERICAS</h3>
            <p className="text-gray-600 mb-4 text-sm">
              We provide coast-to-coast coverage in North and South America’s most critical markets:
              Toronto, Canada | São Paulo, Brazil | Querétaro, Mexico, and more
            </p>
            <ul className="space-y-3 text-sm">
              {[
                "Ashburn, Virginia, USA (“Data Center Alley”)",
                "Silicon Valley, California, USA (Santa Clara)",
                "Dallas, Texas, USA | Chicago, Illinois, USA",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <img src="/assests/tick_circular.png" alt="tick" className="w-4 h-4 mt-[2px]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalNetwork;

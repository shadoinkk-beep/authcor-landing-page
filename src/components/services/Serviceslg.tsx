"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const servicesData = [
  {
    category: "Smart Hands & On-Site Support",
    services: [
      {
        img: 1,
        title: "24/7 Smart Hands & Remote Hands Support",
        text: "Your expert eyes, ears, and hands on the ground, anytime, anywhere. We provide immediate, intelligent support for emergency reboots, complex diagnostics, hardware audits, device inventories, and secure vendor escorts.",
        checks: [
          "Dramatically reduce Mean Time to Resolution (MTTR)",
          "Eliminate costly engineer travel",
          "Achieve total operational peace of mind",
        ],
      },
      {
        img: 2,
        title: "Break/Fix & IMAC Services",
        text: "An end-to-end solution for the hardware lifecycle. We perform rapid diagnostics, manage the entire vendor RMA process, and execute precise component replacements and IMAC (Install, Move, Add, Change) tasks to minimize downtime.",
        checks: [
          "Simplify complex vendor management",
          "Optimize spare parts logistics",
          "Accelerate hardware issue resolution",
        ],
      },
    ],
  },
  {
    category: "Infrastructure Deployment & Lifecycle Services",
    services: [
      {
        img: 3,
        title: "Turnkey Data Center Deployments (Rack and Stack)",
        text: "From Pallet to Production. Perfected. We manage the complete deployment lifecycle—logistics, receiving, rack and stack, network cabling, and power-up—ensuring your projects are delivered on time, on budget, and to the highest industry standard.",
        checks: [
          "Accelerate time-to-revenue for new infrastructure",
          "De-risk complex multi-site projects",
          "Free your internal teams for core business tasks",
        ],
      },
      {
        img: 4,
        title: "Structured Cabling Installation",
        text: "The blueprint for performance and scale. Our certified technicians design and install clean, documented, and high-performance copper and fiber optic cabling infrastructure that maximizes data flow and simplifies future growth.",
        checks: [
          "Enhance network speed and reliability",
          "Future-proof your physical layer",
          "Reduce troubleshooting complexity and time",
        ],
      },
      {
        img: 5,
        title: "Data Center Migrations & Technology Refreshes",
        text: "Execute change with zero business disruption. We provide meticulous planning and flawless execution for data center consolidations, cloud migrations, and hardware modernization projects, safeguarding your business continuity at every step.",
        checks: [
          "Modernize without incurring operational risk",
          "Ensure seamless project transitions",
          "Hit critical transformation deadlines",
        ],
      },
    ],
  },
  {
    category: "Managed & Strategic Services",
    services: [
      {
        img: 6,
        title: "Proactive Infrastructure Management",
        text: "Shift from reactive fixes to proactive control. We offload daily operational burdens with continuous monitoring, scheduled patch management, and performance tuning to identify and resolve issues before they impact your services.",
        checks: [
          "Increase service stability and uptime",
          "Strengthen security posture and compliance",
          "Reduce operational overhead (OPEX)",
        ],
      },
      {
        img: 7,
        title: "Data Center Strategy & Optimization",
        text: "Maximize the ROI of your infrastructure. Our senior consultants provide expert analysis and actionable recommendations on facility design, capacity planning, and operational efficiency to optimize your CAPEX and OPEX.",
        checks: [
          "Make data-driven infrastructure decisions",
          "Align your data center footprint with business goals",
          "Enhance long-term asset value",
        ],
      },
    ],
  },
];


const Servicelg: FC = () => {
  return (
    <section className="text-gray-700 body-font mb-10 max-w-7xl mx-auto px-5">
      <h1 className="text-4xl md:text-5xl text-black font-bold text-center py-12">
        Our Comprehensive Data Center Solutions
      </h1>

      {servicesData.map((cat, idx) => (
        <div key={idx} className="mb-16">
          <h2 className="text-3xl font-semibold text-red-500 mb-8 text-center">
            {cat.category}
          </h2>

          <div className="flex flex-wrap justify-center -m-4">
            {cat.services.map((serv, i) => (
              <ServiceCardEx
                key={serv.title}
                img={serv.img}
                title={serv.title}
                text={serv.text}
                checks={serv.checks}
                // Adjust width based on number of cards in category
                widthClass={
                  cat.services.length === 2
                    ? "md:w-1/2"
                    : "md:w-1/3"
                }
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

interface CardProps {
  img: string;
  title: string;
  text: string;
  checks: string[];
  widthClass: string;
}

export const ServiceCardEx: FC<CardProps> = ({
  img,
  title,
  text,
  checks,
  widthClass,
}) => {
  return (
    <motion.div
      className={`p-4 w-full ${widthClass}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="h-full border-gray-300 border rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white">
        <img
          width={400}
          height={240}
          className="lg:h-56 md:h-44 w-full object-cover object-center"
          src={`/assests/Services/${img}Service.jpg`}
          alt={title}
        />

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="leading-relaxed text-sm text-gray-700 mb-6">{text}</p>

          <ul className="list-none space-y-2">
            {checks.map((str, i) => (
              <li key={i} className="flex items-start text-gray-800">
                <img
                  alt="tick"
                  height={16}
                  width={16}
                  className="h-4 w-4 mt-1 mr-2"
                  src="/assests/checked.png"
                />
                <span>{str}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Servicelg;

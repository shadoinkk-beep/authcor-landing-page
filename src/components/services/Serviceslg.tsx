"use client";

import { FC } from "react";
import { serviceJson } from "../services3/servicesjson";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Servicelg: FC = () => {
  return (
    <section className="text-gray-600 body-font mb-5 max-w-7xl mx-auto">
      <div className="container px-5 py-4 mx-auto">
        <h1 className="text-4xl text-black font-bold text-center py-8">
          Our comprehensive data center solutions
        </h1>

        <div className="flex flex-wrap -m-4">
          {serviceJson.map((serv, i) => (
            <ServiceCardEx
              img={i}
              key={serv.title}
              subtitle={serv.subtitle}
              checks={serv.checks}
              title={serv.title}
              text={serv.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CardProps {
  img: number;
  title: string;
  text: string;
  subtitle: string;
  checks: string[];
}

export const ServiceCardEx: FC<CardProps> = ({
  img,
  title,
  text,
  subtitle,
  checks,
}) => {
  return (
    <motion.div
      className="p-4 md:w-1/3"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // animate every time it comes into view
    >
      <div className="h-full border-gray-500 transition-all hover:scale-105 hover:shadow-[4px_8px_8px_rgba(0,0,0,0.38)] border-opacity-60 rounded-lg overflow-hidden shadow-md">
        <img
          width={200}
          height={200}
          className="lg:h-64 md:h-44 w-full object-cover object-center"
          src={`/assests/Services/${img + 1}Service.jpg`}
          alt={title}
        />

        <div className="p-6">
          <h2 className="title-font text-lg font-semibold text-gray-900 mb-3">
            {title}
          </h2>
          <h3 className="title-font text-md font-medium font-sans text-red-400 mb-3">
            {subtitle}
          </h3>
          <p className="leading-relaxed text-sm mb-8">{text}</p>

          <ul className="list-none space-y-2">
            {checks.map((str, i) => (
              <li key={i} className="flex items-center font-sans">
                <span className="text-green-500 mr-2 font-sans">
                  <img
                    alt="tick"
                    height={4}
                    width={4}
                    className="h-4 w-4"
                    src="/assests/checked.png"
                  />
                </span>
                {str}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Servicelg;

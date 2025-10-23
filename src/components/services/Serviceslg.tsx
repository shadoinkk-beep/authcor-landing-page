"use client";
import { FC } from "react";

import { motion } from "framer-motion";
import { serviceJson } from "../services3/servicesjson";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Servicelg: FC = () => {
  return (
    <section className="text-gray-600 body-font mb-5 max-w-7xl mx-auto">
      <div className="container px-5 py-8 mx-auto">
        <h2 className="text-4xl text-black font-bold text-center py-8">
          Our Comprehensive Data Center Solutions
        </h2>

        {serviceJson.map((category, idx) => (
          <div key={idx} className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {category.category}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {category.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap -m-4">
              {category.services.map((serv, i) => (
                <ServiceCardEx
                  key={serv.title}
                  img={i + idx * 3}
                  title={serv.title}
                  subtitle={serv.subtitle}
                  text={serv.text}
                  checks={serv.checks}
                />
              ))}
            </div>
          </div>
        ))}
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

const ServiceCardEx: FC<CardProps> = ({
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
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="h-full border border-gray-200 hover:scale-105 transition-all duration-300 hover:shadow-xl rounded-xl overflow-hidden shadow-md">
        <img
          width={200}
          height={200}
          className="lg:h-64 md:h-44 w-full object-cover object-center"
          src={`/assests/Services/${img + 1}Service.jpg`}
          alt={title}
        />

        <div className="p-6">
          <h2 className="title-font text-lg font-semibold text-gray-900 mb-2">
            {title}
          </h2>
          <h3 className="title-font text-sm font-medium text-red-400 mb-3">
            {subtitle}
          </h3>
          <p className="leading-relaxed text-sm mb-6">{text}</p>

          <ul className="list-none space-y-2">
            {checks.map((str, i) => (
              <li key={i} className="flex items-center text-sm">
                <img
                  alt="tick"
                  className="h-4 w-4 mr-2"
                  src="/assests/checked.png"
                />
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

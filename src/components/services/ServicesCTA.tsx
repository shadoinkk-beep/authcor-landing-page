"use client";
import Link from "next/link";
import React from "react";

const ServicesCTA: React.FC = () => {
  return (
    <section className="bg-white text-center py-24 px-6">
      <h2 className="text-3xl md:text-4xl mb-4 font-semibold">
        Define Your Ideal Service Level Agreement.
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm md:text-base">
        Let’s create a service model tailored to your performance, reliability, and
        operational needs—on your terms.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center">
                      <Link href={"/contact/partnership"} className="inline-flex border font-sans items-center justify-center w-full hover:border-red-500 px-10 py-2.5 overflow-hidden text-md font-medium text-white transition-colors duration-300 bg-red-500 rounded-lg sm:w-auto sm:mx-2 hover:bg-white hover:text-black border-red-500 ">
                Request a Custom Quote
              </Link>

        <Link
          href="/service-catalog"
          className="inline-flex items-center text-red-500 font-semibold justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-md hover:text-white hover:border-red transition-colors duration-300 border-2 rounded-lg  sm:w-auto sm:mx-2 sm:mt-0 hover:border-red-500 hover:bg-red-500"
        >
          <span className="mx-2">Download Our Service Catalog</span>
        </Link>
      </div>
    </section>
  );
};

export default ServicesCTA;

"use client";
import Link from "next/link";
import React from "react";

const BlogCTA: React.FC = () => {
  return (
    <section className="bg-white text-center py-24 px-6">
      <h2 className="text-3xl md:text-4xl mb-4 font-semibold">
        Turn Insight into Action.
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm md:text-base">
        Our experts are ready to help you apply these strategies to solve your
        unique infrastructure challenges.
      </p>

      <div className="flex justify-center items-center">
                      <Link href={"/contact/partnership"} className="inline-flex border font-sans items-center justify-center w-full hover:border-red-500 px-10 py-2.5 overflow-hidden text-md font-medium text-white transition-colors duration-300 bg-red-500 rounded-lg sm:w-auto sm:mx-2 hover:bg-white hover:text-black border-red-500 ">
                Speak with an Engineer
              </Link>
      </div>
    </section>
  );
};

export default BlogCTA;

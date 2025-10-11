"use client";
import Link from "next/link";
import React from "react";

const EngineerCTA: React.FC = () => {
  return (
    <section className="bg-white text-center py-24 px-6">
      <h2 className="text-3xl md:text-4xl mb-4">
        Need an Engineer Somewhere Else?
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-6 text-sm md:text-base">
        Our network is built on client demand. Contact us to discuss your specific
        geographical requirements and we’ll build a solution.
      </p>
      <Link href={"/contact/quote"}  className="bg-[#ff0000] hover:bg-red-600 text-white font-medium px-6 py-3 rounded-md transition-all">
        Request Coverage Information
      </Link>
    </section>
  );
};

export default EngineerCTA;

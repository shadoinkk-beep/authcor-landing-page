"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import MapComponent — disables SSR for it
const MapComponent = dynamic(() => import("./MapComponent"), { ssr: false });

const GlobalPresence: React.FC = () => {
  return (
    <section className="bg-white mx-auto max-w-7xl px-6 py-10 text-center">
      <h1 className="text-4xl md:text-5xl font-semibold mb-4">
        Global Presence. Local Performance.
      </h1>
      <p className="text-black max-w-3xl mx-auto mb-10 text-sm md:text-base">
        Authcor operates a network of high-performance data centers strategically located
        in key global markets. From North America to Asia, our facilities are built
        to meet enterprise-grade uptime, scalability, and compliance standards.
      </p>

      <div className="z-20 relative w-full aspect-[2/1] rounded-2xl overflow-hidden shadow-md">
        <MapComponent />
      </div>
    </section>
  );
};

export default GlobalPresence;

"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default icon issue for React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/assests/mappin.png",
  iconUrl: "/assests/mappin.png",
  shadowUrl: "",
});

type Location = {
  name: string;
  lat: number;
  lng: number;
};

const locations: Location[] = [
  { name: "Ashburn, USA", lat: 39.0438, lng: -77.4875 },
  { name: "London, UK", lat: 51.5072, lng: -0.1276 },
  { name: "Dubai, UAE", lat: 25.2048, lng: 55.2708 },
  { name: "Singapore", lat: 1.3521, lng: 103.8198 },
  { name: "Sydney, AUS", lat: -33.8688, lng: 151.2093 },
];

const GlobalPresence: React.FC = () => {
  return (
    <section className="bg-white mx-auto  max-w-7xl px-6  py-10 text-center">
      <h2 className="text-4xl md:text-5xl font-semibold mb-4">
        Global Presence. Local Performance.
      </h2>
      <p className="text-black max-w-3xl mx-auto mb-10 text-sm md:text-base">
        Authcor operates a network of high-performance data centers strategically located
        in key global markets. From North America to Asia, our facilities are built
        to meet enterprise-grade uptime, scalability, and compliance standards.
      </p>

      <div className="z-20 relative w-full aspect-[2/1] rounded-2xl overflow-hidden shadow-md">
        <MapContainer center={[20, 0]} zoom={2} className="w-full h-full" scrollWheelZoom={false}>
          {/* OpenStreetMap tiles */}
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {/* Custom markers */}
          {locations.map((loc) => (
            <Marker
              key={loc.name}
              position={[loc.lat, loc.lng]}
              icon={new L.Icon({
                iconUrl: "/assests/mappin.png",
                iconSize: [24, 24],
                iconAnchor: [12, 12],
              })}
            >
              <Tooltip direction="top" offset={[0, -12]} opacity={1} permanent>
                {loc.name}
              </Tooltip>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default GlobalPresence;

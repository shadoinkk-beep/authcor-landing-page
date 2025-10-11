"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

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

const MapComponent: React.FC = () => {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      className="w-full h-full"
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
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
  );
};

export default MapComponent;

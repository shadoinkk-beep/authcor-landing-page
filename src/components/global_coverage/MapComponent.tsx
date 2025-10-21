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
  { name: "Tokyo, Japan", lat: 35.6762, lng: 139.6503 },
  { name: "Mumbai, India", lat: 19.076, lng: 72.8777 },
  { name: "Riyadh, KSA", lat: 24.7136, lng: 46.6753 },
  { name: "Frankfurt, Germany", lat: 50.1109, lng: 8.6821 },
  { name: "Amsterdam, Netherlands", lat: 52.3676, lng: 4.9041 },
  { name: "Paris, France", lat: 48.8566, lng: 2.3522 },
  { name: "Johannesburg, South Africa", lat: -26.2041, lng: 28.0473 },
  { name: "Silicon Valley, USA", lat: 37.3875, lng: -122.0575 },
  { name: "Dallas, Texas, USA", lat: 32.7767, lng: -96.7970 },
  { name: "Toronto, Canada", lat: 43.6532, lng: -79.3832 },
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

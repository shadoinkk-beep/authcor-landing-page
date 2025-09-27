import DarkVeil from "@/components/DarkVeil";
import React from "react";
import ServiceHero from "./Hero";
import Servicelg from "@/components/services/Serviceslg";
import Footer3 from "@/components/footernew/Footer3";


export const metadata = {
  title: "Our Data Center Services | Smart Hands, Deployments, Managed IT | AuthCor",
  description:
    "Discover AuthCor's data center services: 24/7 Smart & Remote Hands, break/fix and IMAC, turnkey deployments, structured cabling installation, and proactive infrastructure management.",
};

export default function Services() {
  return (
    <>
    <ServiceHero/>
    <Servicelg/>
    <Footer3/>
    </>
  );
}

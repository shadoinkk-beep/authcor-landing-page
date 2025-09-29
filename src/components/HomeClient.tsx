"use client";

import CompaniesMarq from "@/components/companies/CompaniesMarq";
import Footer3 from "@/components/footernew/Footer3";
import Industries from "@/components/Industries/Industries";
import Partnerships from "@/components/partnership/Partnerships";
import Services from "@/components/services3/Services";
import Statistics from "@/components/statistics/Statistics";
import { scrollBy } from "@/utilities/scrollanim";
import "animate.css";
import Presence3 from "@/components/presence/Presence3";
import ContactUs from "@/components/contactmodal/ContactUs";
import Link from "next/link";
import BlurText from "@/components/BlurText";

export default function HomeClient() {
  return (
    <>
      <div id="video-test">
        <video
          className=""
          poster="assests/video_poster.png"
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="assests/DCWebsiteBanner.webm" type="video/webm" />
          <source src="assests/DCWebsiteBanner.mp4" type="video/mp4" />
        </video>

        <section className="content">
          <div className="flex flex-col items-center px-4 py-12 text-center">
            <h2 className="text-3xl md:text:4xl font-bold tracking-tight text-white-800 xl:text-6xl dark:text-white">
              <BlurText
                text="Your Global Data Center Operations, Solved."
                delay={150}
                animateBy="words"
                direction="top"
                className="text-2xl md:text:4xl font-bold tracking-tight text-white-800 xl:text-6xl dark:text-white flex justify-center"
              />
            </h2>

            <BlurText
              text="We are your single, strategic partner for 24/7 Smart Hands, flawless IT deployments, and proactive managed services—delivering unwavering control and consistency across your entire data center footprint."
              delay={150}
              animateBy="words"
              direction="bottom"
              className="max-w-4xl mt-4 text-center text-base sm:text-xl text-white flex justify-center"
            />

            <div className="mt-6 ">
              <Link href={"/contact/partnership"} className="inline-flex font-sans items-center justify-center w-full px-10 py-2.5 overflow-hidden text-md font-medium text-white transition-colors duration-300 bg-red-500 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-white hover:text-black border-0 border-red-500 ">
                <span className="mx-2">Design Your Service Plan</span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center font-semibold justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-md text-white hover:border-red transition-colors duration-300 border-2 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:border-red-500 hover:bg-red-500"
              >
                <span className="mx-2">Explore Our Global Services</span>
              </Link>
            </div>

            <div
              className="mt-16 cursor-pointer hover:scale-150"
              onClick={() => {
                scrollBy(document.documentElement.clientHeight - 30, 1000);
              }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="22"
                  stroke="white"
                  strokeWidth="2"
                />
                <line
                  x1="24"
                  y1="12"
                  x2="24"
                  y2="32"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="18"
                  y1="26"
                  x2="24"
                  y2="32"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="30"
                  y1="26"
                  x2="24"
                  y2="32"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </section>
      </div>

      <Services />
      <Statistics />
      <CompaniesMarq />
      <Partnerships />
      <Industries />
      <Presence3 />
      <Footer3 />
    </>
  );
}

"use client";

import BlurText from "@/components/BlurText";
import DarkVeil from "@/components/DarkVeil";
import Footer3 from "@/components/footernew/Footer3";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useParams, usePathname, useRouter } from "next/navigation";
import { ArrowBigRight } from "lucide-react";
import LongTailRightArrow from "@/components/LongTailRightArrow";

const tabs = ["Get a Quote", "Partnership", "General Enquiry", "Careers"];

const urlMap: Record<string, string> = {
  quote: "Get a Quote",
  partnership: "Partnership",
  general: "General Enquiry",
  careers: "Careers",
};

export default function ContactSection() {
  const params = useParams<{ type?: string }>();
  const pathname = usePathname();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("Get a Quote");
  const [phone, setPhone] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Update activeTab based on URL
  useEffect(() => {
    const pathParts = pathname.split("/");
    const type = pathParts[2]; // /contact/:type
    if (type && urlMap[type]) {
      setActiveTab(urlMap[type]);
    }
  }, [pathname]);

  // Optional: click a tab and navigate
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    const key = Object.keys(urlMap).find((k) => urlMap[k] === tab);
    if (key) {
      router.push(`/contact/${key}`);
    }
  };

  return (
    <>
      <section className="relative w-full min-h-screen h-fit bg-gradient-to-br flex justify-center content-center items-center from-red-900 via-red-700 to-black text-white">
        <div className="absolute top-0 left-0 bottom-0 min-h-screen w-screen">
          <DarkVeil hueShift={242} />
        </div>

        <div className="py-36 max-w-7xl mx-auto w-full px-6 justify-between grid md:grid-cols-2 gap-12 items-start z-10 relative">
          <div className="grid gap-6">
            <div>
              <BlurText
                text="Let's Discuss "
                delay={150}
                animateBy="words"
                direction="top"
                className="text-4xl md:text:5xl  tracking-tight text-white-800 lg:text-7xl text-white flex justify-start"
              />
              <BlurText
                text="Your Solution."
                delay={150}
                animateBy="words"
                direction="top"
                className="text-4xl md:text:5xl  tracking-tight text-white-800 lg:text-7xl text-white flex justify-start"
              />
            </div>

            <p className="text-white/90 mb-6 max-w-md">
              For immediate support, project quotes, or strategic discussions,
              our global team is ready to respond.
            </p>

            <div className="flex items-center gap-4 bg-white max-w-md h-36">
              <img
                src="/assests/Contact/contact_more.png"
                alt="Brochure"
                className="w-36 h-full rounded object-cover"
              />
              <div>
                <p className="text-sm text-black mb-1">
                  Learn More About Author <br /> Technologies
                </p>
                <a
                  href="#"
                  className="text-black/80 underline hover:text-blue-400 text-sm"
                >
                  Download Our Brochure
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="flex gap-8 mb-6 text-base border-b border-white/20">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`pb-2 transition-colors duration-300 relative ${
                    activeTab === tab
                      ? "text-white after:absolute after:left-0 after:right-0 after:-bottom-[1px] after:h-[2px] after:bg-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

<form className="space-y-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="flex flex-col">
      <label className="text-sm mb-1 text-white/80">First Name*</label>
      <input className="w-full bg-transparent border-b border-white/30 p-2 focus:outline-none focus:border-white" />
    </div>
    <div className="flex flex-col">
      <label className="text-sm mb-1 text-white/80">Last Name</label>
      <input className="w-full bg-transparent border-b border-white/30 p-2 focus:outline-none focus:border-white" />
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="flex flex-col">
      <label className="text-sm mb-1 text-white/80">Email*</label>
      <input
        type="email"
        className="w-full bg-transparent border-b border-white/30 p-2 focus:outline-none focus:border-white"
      />
    </div>
    <div className="flex flex-col">
      <label className="text-sm mb-1 text-white/80">Phone Number*</label>
      {isClient && (
        <PhoneInput
          country="in"
          value={phone}
          onChange={(value) => setPhone(value || "")}
          inputClass="!bg-transparent !text-white !border-0 !w-full"
          buttonClass="!bg-transparent !border-0"
          containerClass="!bg-transparent !border-b !border-white/30 p-1"
        />
      )}
    </div>
  </div>

  {/* ✅ Show Resume Link only in Careers tab */}
  {activeTab === "Careers" && (
    <div className="flex flex-col">
      <label className="text-sm mb-1 text-white/80">Resume Drive Link*</label>
      <input
        type="url"
        placeholder="https://drive.google.com/..."
        className="w-full bg-transparent border-b border-white/30 p-2 focus:outline-none focus:border-white"
      />
    </div>
  )}

  <div>
    <label className="text-sm text-white/80">Tell Us More</label>
    <textarea
      placeholder="Tell Us More"
      maxLength={1000}
      rows={8}
      className="w-full mt-2 bg-transparent border border-white/30 p-3 focus:outline-none focus:border-white resize-none"
    ></textarea>
    <div className="text-right text-xs text-white/60 mt-1">0/1000</div>
  </div>

  <button className="py-1 mt-4 flex gap-2 items-center relative h-fit w-fit overflow-hidden border border-white bg-white hover:bg-transparent text-black hover:text-white px-3 rounded-xl shadow-2xl transition-all">
    Send Enquiry <LongTailRightArrow  width={80} />
  </button>
</form>


          </div>
        </div>
      </section>

      <Footer3 />
    </>
  );
}

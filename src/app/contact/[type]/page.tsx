"use client";

import React, { useEffect, useState } from "react";
import BlurText from "@/components/BlurText";
import DarkVeil from "@/components/DarkVeil";
import Footer3 from "@/components/footernew/Footer3";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { usePathname, useRouter, useParams } from "next/navigation";
import LongTailRightArrow from "@/components/LongTailRightArrow";
import emailjs from "@emailjs/browser";
import { CheckIcon, X } from "lucide-react";

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
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    resumeLink: "",
    message: "",
  });
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => setIsClient(true), []);

  useEffect(() => {
    const pathParts = pathname.split("/");
    const type = pathParts[2];
    if (type && urlMap[type]) {
      setActiveTab(urlMap[type]);
    }
  }, [pathname]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    const key = Object.keys(urlMap).find((k) => urlMap[k] === tab);
    if (key) router.push(`/contact/${key}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    if (!phone.trim()) {
      alert("Phone number is required.");
      return;
    }

    if (!form.message.trim()) {
      alert("Please provide details in 'Tell Us More'.");
      return;
    }

    setLoading(true);
    try {

      const now = new Date();
const submission_date = now.toLocaleDateString("en-IN", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
const submission_time = now.toLocaleTimeString("en-IN", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});

      const templateParams = {
        enquiry_type: activeTab,
        first_name: form.firstName,
        last_name: form.lastName,
        email: form.email,
        phone,
        resume_link: form.resumeLink,
        message: form.message,
        current_year: new Date().getFullYear(),

        // control display of optional fields
        last_name_display: form.lastName ? "table-row" : "none",
        resume_link_display: form.resumeLink ? "table-row" : "none",
        submission_date,
        submission_time,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", resumeLink: "", message: "" });
      setPhone("");
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="relative w-full min-h-screen h-fit bg-gradient-to-br from-red-900 via-red-700 to-black text-white flex justify-center items-center">
        <div className="absolute top-0 left-0 bottom-0 min-h-screen w-screen">
          <DarkVeil hueShift={242} />
        </div>

        <div className="py-36 max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 gap-12 items-start z-10 relative">
          <div className="grid gap-6">
            <div>
              <BlurText
                text="Let's Discuss"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-4xl md:text-5xl lg:text-7xl text-white"
              />
              <BlurText
                text="Your Solution."
                delay={150}
                animateBy="words"
                direction="top"
                className="text-4xl md:text-5xl lg:text-7xl text-white"
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
                          {status === "success" && (
                <p className="text-white mt-2 flex gap-4 mb-8"> <CheckIcon/> Your enquiry has been received successfully — our team will get in touch with you shortly.</p>
              )}
              {status === "error" && (
                <p className="text-white mt-2 flex gap-4 mb-8"> <X/>  Failed to send. Try again later.</p>
              )}
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

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm mb-1 text-white/80">First Name</label>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/30 p-2 focus:outline-none focus:border-white"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm mb-1 text-white/80">Last Name</label>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/30 p-2 focus:outline-none focus:border-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm mb-1 text-white/80">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/30 p-2 focus:outline-none focus:border-white"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm mb-1 text-white/80">Phone Number</label>
                  {isClient && (
                    <PhoneInput
                      country="us"
                      value={phone}
                      onChange={(value) => setPhone(value || "")}
                      inputClass="!bg-transparent !text-white !border-0 !w-full"
                      buttonClass="!bg-transparent !border-0"
                      containerClass="!bg-transparent !border-b !border-white/30 p-1"
                    />
                  )}
                </div>
              </div>

              {activeTab === "Careers" && (
                <div className="flex flex-col">
                  <label className="text-sm mb-1 text-white/80">Resume Drive Link</label>
                  <input
                    type="url"
                    name="resumeLink"
                    value={form.resumeLink}
                    onChange={handleChange}
                    placeholder="https://drive.google.com/..."
                    className="w-full bg-transparent border-b border-white/30 p-2 focus:outline-none focus:border-white"
                  />
                </div>
              )}

              <div>
                <label className="text-sm text-white/80">Tell Us More</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell Us More"
                  maxLength={1000}
                  rows={8}
                  required
                  className="w-full mt-2 bg-transparent border border-white/30 p-3 focus:outline-none focus:border-white resize-none"
                ></textarea>
                <div className="text-right text-xs text-white/60 mt-1">
                  {form.message.length}/1000
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="py-2 mt-4 flex gap-2 items-center relative h-fit w-fit overflow-hidden border border-white bg-white hover:bg-transparent text-black hover:text-white px-4 rounded-xl shadow-2xl transition-all disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Enquiry"}
                <LongTailRightArrow width={80} />
              </button>


            </form>
          </div>
        </div>
      </section>

      <Footer3 />
    </>
  );
}

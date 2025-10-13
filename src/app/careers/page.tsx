// app/careers/page.tsx
import type { Metadata } from "next";
import CareersClient from "./careersclient";

export const metadata: Metadata = {
  title: "Careers at AuthCor Technologies | Data Center & Tech Jobs in Singapore",
  description:
    "Join our mission at AuthCor Technologies. We're hiring experienced Field Service Engineers and Technical Project Managers in Singapore. Explore senior roles (5+ years exp.) and grow with a leader in data infrastructure.",
  openGraph: {
    title: "Careers at AuthCor Technologies | Data Center & Tech Jobs in Singapore",
    description:
      "Join our mission at AuthCor Technologies. We're hiring experienced Field Service Engineers and Technical Project Managers in Singapore. Explore senior roles (5+ years exp.) and grow with a leader in data infrastructure.",
    url: "https://authcor.com/careers",
    siteName: "AuthCor",
    type: "website",
  },
};

export default function CareersPage() {
  // Server component just renders client component
  return <CareersClient />;
}

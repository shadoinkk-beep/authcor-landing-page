// app/about/page.tsx
import type { Metadata } from "next";
import AboutClient from "./aboutclient";

export const metadata: Metadata = {
  title: "About AuthCor | Your Partner in Global Data Center Excellence",
  description:
    "Founded in Singapore, AuthCor was built by industry veterans to set a new standard for global data center operations. Learn about our mission to deliver reliability and expertise in 50+ countries.",
  openGraph: {
    title: "Expert Care For Your Data Center",
    description:
      "Founded in Singapore, AuthCor was built by industry veterans to set a new standard for global data center operations. Learn about our mission to deliver reliability and expertise in 50+ countries.",
    url: "https://authcor.com/about",
    siteName: "AuthCor",
    type: "website",
  },
};

export default function AboutPage() {
  // This page itself is server component, just renders client component
  return <AboutClient />;
}

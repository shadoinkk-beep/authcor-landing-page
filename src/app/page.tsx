// app/page.tsx (Server Component by default)

import HomeClient from "../components/HomeClient"


// ✅ SEO metadata works here
export const metadata = {
  title: "Global Data Center Services: 24/7 Smart Hands & IT Deployments | AuthCor",
  description:
    "AuthCor provides expert 24/7 Smart Hands, remote hands, and data center deployment services in 50+ countries. Maximize uptime and streamline your global IT operations with our SLA-backed support.",
  openGraph: {
    title: "Global Data Center Services | AuthCor",
    description:
      "24/7 Smart Hands, IT deployments, and managed services in 50+ countries.",
    url: "https://www.authcor.com", // 🔑 replace with your domain
    siteName: "AuthCor",
    images: ["/assests/video_poster.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Data Center Services | AuthCor",
    description:
      "Smart Hands, IT deployments, and managed services across 50+ countries.",
    images: ["/assests/video_poster.png"],
  },
};

export default function Page() {
  return <HomeClient />; // 👈 your interactive homepage
}

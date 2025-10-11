import Footer3 from "@/components/footernew/Footer3";
import EngineerCTA from "@/components/global_coverage/EngineerCTA";
import GlobalNetwork from "@/components/global_coverage/GlobalNetwork";
import GlobalPresence from "@/components/global_coverage/GlobalPresence";
import GlobalCoverageHero from "@/components/global_coverage/Hero";
import { Metadata } from "next";
import { FC } from "react";


export const metadata: Metadata = {
  title: "Global Data Center Support Coverage in 50+ Countries | AuthCor",
  description:
    "AuthCor provides on-site data center technicians in the Americas, EMEA, and APAC. See our interactive map and list of major supported metro areas including Singapore, Ashburn, London, and Frankfurt.",
  openGraph: {
    title: "Global Data Center Support Coverage in 50+ Countries | AuthCor",
    description:
      "AuthCor provides on-site data center technicians in the Americas, EMEA, and APAC. See our interactive map and list of major supported metro areas including Singapore, Ashburn, London, and Frankfurt.",
    url: "https://authcor.com/global_coverage",
    siteName: "AuthCor",
    type: "website",
  },
};

const page:FC = () => {
    return <>   
    <GlobalCoverageHero/>
    <GlobalPresence/>
    <GlobalNetwork/>
    <EngineerCTA/>
    <Footer3 />
    </>
}

export default page;


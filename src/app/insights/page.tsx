import BlogList from "@/components/blog/BlogList";
import RecentPosts from "@/components/blog/RecentPosts";
import Footer3 from "@/components/footernew/Footer3";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "The Edge: Data Center Strategy & Intelligence Hub | AuthCor",
  description:
    " Gain an operational edge with expert insights from AuthCor's global engineers. Explore articles, case studies, and best practices on data center management, deployment, and optimization.",
  openGraph: {
    title: "Expert Care For Your Data Center",
    description:
      " Gain an operational edge with expert insights from AuthCor's global engineers. Explore articles, case studies, and best practices on data center management, deployment, and optimization.",
    url: "https://authcor.com/about",
    siteName: "AuthCor",
    type: "website",
  },
};


export default function Page(){



    return (
        <>
        <Client/>
        </>
    )

}

function Client(){
    return (
        <>
        
        <RecentPosts/>
        <BlogList/>
        <Footer3/>
        </>
    )
}
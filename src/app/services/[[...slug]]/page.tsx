"use client";
import Footer3 from "@/components/footernew/Footer3";
import Servicelg from "@/components/services/Serviceslg";
import { FC, useEffect, useState } from "react"
import { scrollBy } from "@/utilities/scrollanim";
import { useParams } from 'next/navigation'
import Modal from "@/components/modal/Modal";
import ContactUs from "@/components/contactmodal/ContactUs";
import Image from "next/image";
import Link from "next/link";

// import type { Metadata } from "next";


// export const metadata: Metadata = {
//     applicationName:"AuthCor",
//     title: "Expert Care For Your Data center",
//     description: "AuthCor provides expert solutions for every aspect of your data center. From remote hands & eye support to complex deployments, we've got you covered.",
//   };

const ServicePage:FC = () =>{

    const params = useParams<{ slug:string[]}>()
    const [quotedisplay, setquotedisplay] = useState(false)

    useEffect(() => {
    //   console.log(params)
      
      if(params && params.slug && params.slug[0] == "s3" ){
        scrollBy(document.documentElement.clientHeight-30,1000)
      }else       if(params && params.slug && params.slug[0] == "s6" ){
        scrollBy((2*document.documentElement.clientHeight)-30,1000)
      }
    }, [params])
    


    return <>
        <div id="video-test " >
      <Image alt="services" height={500} width={500}  className="h-screen w-full object-cover brightness-[60%]" src="/assests/srvc.jpg"   />
    <section className="content">
    <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white-800 xl:text-6xl dark:text-white">
        Your Trusted Data Center Partner
        </h2>

        <p className="block max-w-4xl mt-4  text-xl font-medium text-white">
        AuthCor provides expert solutions for every aspect of your
data center. From remote hands & eye support to complex deployments, we've got you covered.
        </p>

        <div className="mt-6 ">
            
            <button onClick={()=>{setquotedisplay(true)}}  className="inline-flex font-sans font-semibold items-center justify-center w-full px-10 py-2.5 overflow-hidden text-md font-medium text-white transition-colors duration-300 bg-red-500 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-white hover:text-black  border-0 border-red-500 ">
                <span className="mx-2">
                    Contact us
                </span>
            </button>

            <Link href="/about"
                className="inline-flex items-center font-semibold justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-md text-white hover:border-red transition-colors duration-300 border-2 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:border-red-500 hover:bg-red-500">
                <span className="mx-2">
                    Know more
                </span>
            </Link>


        </div>
        <div className="mt-16 cursor-pointer hover:scale-150" onClick={()=>{scrollBy(document.documentElement.clientHeight-30,1000)}}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="22" stroke="white" strokeWidth="2"/>
                <line x1="24" y1="12" x2="24" y2="32" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="18" y1="26" x2="24" y2="32" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="30" y1="26" x2="24" y2="32" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </div>
    </div>
</section>
    </div>

    <Servicelg/>
    <Footer3/>
    <Modal open={quotedisplay} onClose={()=>{setquotedisplay(false)}} >

<ContactUs  />
</Modal>

    </>
}

export default ServicePage;


"use client";
import ContactUs from "@/components/contactmodal/ContactUs";
import Footer3 from "@/components/footernew/Footer3";
import Modal from "@/components/modal/Modal";
import { ServiceCardEx } from "@/components/services/Serviceslg";
import { serviceJson } from "@/components/services3/servicesjson";
import { StatisticsTable } from "@/components/statistics/Statistics";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react"
import ScrollAnimation from 'react-animate-on-scroll'
import { scrollBy } from "@/utilities/scrollanim";

// import type { Metadata } from "next";


// export const metadata: Metadata = {
//     applicationName:"AuthCor",
//     title: "Expert Care For Your Data center",
//     description: "A leading independent provider of cutting-edge network infrastructure solutions and services tailored for data centers.",
//   };

const coreValues = [
    {title:"Integrity",text:"We uphold the highest ethical standards, fostering trust and transparency."},
    {title:"Innovation",text:"We embrace change and leverage cutting-edge technology to stay ahead."},
    {title:"Customer-Centricity",text:"We prioritize understanding and exceeding our clients’ unique needs."},
    {title:"Excellence",text:"We aim for the highest quality in every project and service while setting up your data center."},
    {title:"Collaboration",text:"We believe teamwork and partnerships are keys to mutual success."},
    {title:"Sustainability",text:"We commit to sustainable practices, contributing to a greener future."},
]

const About:FC = () =>{
    const [quotedisplay, setquotedisplay] = useState(false)

    return(
    <>
        <div id="video-test">

        <Image alt="about" height={500} width={500} className="w-full h-screen object-cover brightness-[60%]" src="/assests/aboutpage.jpeg"  />
        <section className="content">
    <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white-800 xl:text-6xl dark:text-white">
        Welcome to Authcor Technologies
        </h2>

        <p className="block max-w-4xl mt-4 text-gray-500 text-xl font-medium text-white/[0.9]">
        A leading independent provider of cutting-edge network infrastructure solutions and services tailored for data centers.
        </p>

        <div className="mt-6 ">
            
            <button onClick={()=>{setquotedisplay(true)}}  className="inline-flex font-sans font-semibold items-center justify-center w-full px-10 py-2.5 overflow-hidden text-md font-medium text-white transition-colors duration-300 bg-red-500 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-white hover:text-black  border-0 border-red-500 ">
                <span className="mx-2">
                    Contact us
                </span>
            </button>

            <Link href="/services"
                className="inline-flex items-center font-semibold justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-md text-white hover:border-red transition-colors duration-300 border-2 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:border-red-500 hover:bg-red-500">
                <span className="mx-2">
                    Explore services
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
        

    <CoreValuesSec/>

    <div className="container px-5 py-12 pb-0 md:mx-auto">
        {/* <!-- Mission Section --> */}
        <ScrollAnimation animateIn="animate__fadeInUp">

        <div className="flex flex-col-reverse md:flex-row p-8 gap-12" >
            <div className="md:w-2/4">

            <h2 className="text-2xl font-bold text-gray-900 mb-4">OUR MISSION</h2>
            <p className="text-gray-700 mb-6">
                To empower businesses with innovative and reliable network infrastructure solutions, ensuring seamless operations in data centers. We strive to deliver exceptional services through expertise, precision, and commitment, enabling our clients to focus on their core objectives while we handle their critical infrastructure needs.
            </p>
            </div>
            <img src="assests/ourmission.jpeg" alt="Network cables" className="rounded-lg shadow-lg md:w-2/4 max-h-60 object-cover"/>
        </div>
        </ScrollAnimation>

        {/* <!-- Vision Section --> */}
        <ScrollAnimation animateIn="animate__fadeInUp">

        <div className="grid md:flex p-8 gap-12">
            <img src="assests/ourvission.jpg" alt="Network cables" className="rounded-lg shadow-lg md:w-2/4 max-h-60 object-cover"/>

            <div className="md:w-2/4" >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">OUR VISION</h2>
            <p className="text-gray-700 mb-6">
                To be the global leader in data center infrastructure solutions, setting new benchmarks for quality, efficiency, and sustainability. We aim to build a future where businesses worldwide benefit from robust, scalable, and secure networks that drive growth, innovation, and digital transformation.
            </p>
            </div>
        </div>

        </ScrollAnimation>

        {/* Histroy section */}


    </div>


        
    <div className="text-black container px-5 py-12  md:mx-auto text-center">
    <ScrollAnimation animateIn="animate__fadeInUp">

            <h2 className="text-4xl font-bold font-sans">Our History and Achievements</h2>
            <p className="m-6">Founded in Singapore in 2021, Authcor Technologies started with a vision to provide exceptional network infrastructure solutions for data centers. Over the years, we expanded to UAE and India, establishing ourselves as a trusted partner globally. </p>
    </ScrollAnimation>
    </div>
    <StatisticsTable/>






    {/* Services */}
    <div className="text-black container px-5 mt-12 grid justify-items-center  md:mx-auto">
            <h2 className="text-4xl font-bold font-sans"> Our Comprehensive Services  </h2>
            <p className="text-md m-4"> At Authcor Technologies, we are committed to empowering businesses with robust, scalable, and secure data center solutions that drive performance and success.</p>
            {/* <Link href={"/services"} className="px-4 py-2 grid text-red hover:before:bg-redborder-red-500 relative h-[50px] w-60 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full">
      <span className="relative z-10 inline-flex items-center">
        Explore all Services
      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7"></path>
      </svg>
      </span>
    </Link> */}
    <Link href={"/services"} className="py-2 mt-4 px-12 flex gap-8 text-black hover:before:bg-redborder-red-500 relative h-fit w-fit overflow-hidden border border-black bg-white px-3 rounded-xl text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full">
        
        <span className="relative z-10 px-12 grid gap-8 grid-flow-col items-center text-black hover:text-white">
          Explore all services
        </span>
      </Link>
                {/* <Link className="border-2 border-red-900 py-2 px-4 rounded-xl w-fit" href={"/services"} >Explore all services</Link> */}
        </div>

        <div className="container px-5 py-12  md:mx-auto justify-items-center flex flex-wrap my-4 text-black">


    {serviceJson.slice(0,3).map((serv,i)=> <ServiceCardEx img={i} key={serv.title} subtitle={serv.subtitle} checks={serv.checks}  title={serv.title} text={serv.text} />)}



</div>


    <Footer3/>
    <Modal open={quotedisplay} onClose={()=>{setquotedisplay(false)}} >

<ContactUs  />
</Modal>
    </>)
}

export default About;




const CoreValuesSec:FC = () =>{

    return (<>
    <section className="container px-5 py-12 pb-0  md:mx-auto">
        <div className="text-black grid text-center">
        <ScrollAnimation animateIn="animate__fadeInUp">

            <h2 className="text-4xl font-bold font-sans">Our Core Values</h2>
            <p className="m-6">At Authcor Technologies Our values shape who we are and guide everything we do  </p>
        </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn="animate__fadeInUp">
        <CompRow props={coreValues.slice(0,3)} />
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp">

        <CompRow props={coreValues.slice(3,6)} />
        </ScrollAnimation>

    </section>

    </>)
}


type CardData =  {title:string,text:string}[];

const CompRow:FC<{props:CardData}> = ({props}) =>{


    return (<>
            <div className="px-12 py-8 my-6 bg-gray-100 rounded-3xl">
            <div className="grid md:flex gap-8">

            

            <div className="text-black  md:w-1/3 w-full pr-4 grid border-b-2 border-b-red-600 md:border-r-2 md:border-r-red-600 md:border-b-0">
                <h5 className="font-semibold">{props[0].title}</h5>
                <p>{props[0].text}</p>

                {/* <Link href={"#"} className="flex self-end text-red-600 my-2 gap-1"> Learn More <svg xmlns="http://www.w3.org/2000/svg" fill="red" width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>  </Link> */}
            </div>

            <div className="text-black md:w-1/3 w-full pr-4 grid border-b-2 border-b-red-600 md:border-r-2 md:border-r-red-600 md:border-b-0">
                <h5 className="font-semibold">{props[1].title}</h5>
                <p>{props[1].text}</p>

                {/* <Link href={"#"} className="flex self-end text-red-600 my-2 gap-1"> Learn More <svg xmlns="http://www.w3.org/2000/svg" fill="red" width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>  </Link> */}
            </div>

            <div className="text-black md:w-1/3 w-full pr-4 grid">
                <h5 className="font-semibold">{props[2].title}</h5>
                <p>{props[2].text}</p>

                {/* <Link href={"#"} className="flex self-end text-red-600 my-2 gap-1"> Learn More <svg xmlns="http://www.w3.org/2000/svg" fill="red" width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>  </Link> */}
            </div>


            </div>
        </div>
    </>)
}
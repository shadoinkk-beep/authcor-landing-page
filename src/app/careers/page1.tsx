"use client";
import Apply from "@/components/contactmodal/Apply";
import Connect from "@/components/contactmodal/Connect";
import ContactUs from "@/components/contactmodal/ContactUs";
import Footer3 from "@/components/footernew/Footer3";
import Modal from "@/components/modal/Modal";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";



const CareerPage:FC = ( ) =>{

  const [quotedisplay, setquotedisplay] = useState(false)
  const [applydisplay, setapplydisplay] = useState(false)
    return <>
    <section className="pt-10 px-10 pb-10">
          <div className="flex flex-col py-16 lg:flex-row items-center max-w-6xl mx-auto p-8">
    
    {/* <!-- Text Content --> */}
    <div className="lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
      <h2 className="text-5xl font-bold text-gray-800 mb-2">Your Career Starts Here!</h2>
      <p className="text-2xl font-semibold text-gray-600">Power The Future With AuthCor</p>
      <p className="text-gray-500 mb-6">
        At AuthCor Technologies, we don’t just power data—we power possibilities. As a global leader in data center solutions, we thrive on challenges and celebrate ingenuity. Whether you’re an engineer, technician, or strategist, your ideas will drive the future of connectivity.
      </p>
      <div className="flex justify-center lg:justify-start space-x-4">
        <button onClick={()=>{setquotedisplay(true)}} className="bg-red-500 border-2 border-red-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-white hover:text-black">Contact us</button>
        <button onClick={()=>{setapplydisplay(true)}} className="border-2 border-red-500 text-red-500 font-semibold py-3 px-6 rounded-md hover:bg-indigo-600 hover:border-white hover:text-white hover:bg-red-500">Apply now</button>
      </div>
    </div>

    {/* <!-- Image Section --> */}
    <div className="lg:w-1/2 relative">
      {/* <div className="absolute -z-10 w-48 h-48 bg-red-500 rounded-full top-0 lg:top-10 lg:right-10"></div> */}

      {/* <svg className="absolute self-center justify-self-center" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FF0066" d="M44.4,-69.9C56.9,-61.1,65.8,-47.6,71.7,-33.2C77.6,-18.8,80.5,-3.4,80.6,13.2C80.7,29.7,77.9,47.4,68,59.1C58.1,70.7,41.1,76.3,24.3,79.8C7.6,83.2,-8.8,84.6,-23,79.8C-37.1,74.9,-49,63.9,-58.2,51.4C-67.3,39,-73.6,25.3,-75.1,11.2C-76.5,-2.9,-73.1,-17.4,-68.4,-32.7C-63.7,-48,-57.7,-64.2,-46.1,-73.4C-34.5,-82.6,-17.2,-84.7,-0.6,-83.7C16,-82.8,32,-78.7,44.4,-69.9Z" transform="translate(100 100)" />
</svg> */}
{/* <svg className="absolute self-center justify-self-center" xmlns="http://www.w3.org/2000/svg"  id="visual" viewBox="0 0 1200 1200" version="1.1"><g transform="translate(444.6950551104474 462.75828399682473)"><path d="M383.6 -135.4C432.3 25.5 362.5 214.2 224.6 316.1C86.6 418 -119.5 433.1 -246.3 340.6C-373.1 248.1 -420.6 48 -366.3 -120.4C-312.1 -288.9 -156 -425.7 5.7 -427.5C167.4 -429.4 334.8 -296.3 383.6 -135.4" fill="#BB004B"/></g></svg> */}
<svg className="absolute self-center justify-self-center m-4  lg:m-16 md:m-12 " xmlns="http://www.w3.org/2000/svg" id="visual" viewBox="0 0 578 642" version="1.1">
  <g transform="translate(299.7683567018774 313.7468931872862)"><path d="M235.3 -70.1C270.2 30.9 239.7 159.4 157.4 220.1C75 280.7 -59.2 273.4 -151.3 206.8C-243.4 140.2 -293.5 14.3 -261.3 -83.1C-229 -180.4 -114.5 -249.2 -7.2 -246.9C100.2 -244.6 200.4 -171.1 235.3 -70.1" fill="#BB004B" /></g>
</svg>
      <Image height={400} width={400} className="relative object-cover w-full h-[30rem] max-w-xs mx-auto lg:max-w-full" src="/assests/Professional Woman.png" alt="Professional Woman"/>
    </div>

  </div>


    <JobsEXp/>
    </section>
    <Footer3/>
    <Modal open={quotedisplay} onClose={()=>{setquotedisplay(false)}} >

<ContactUs/>
</Modal>
<Modal open={applydisplay} onClose={()=>{setapplydisplay(false)}} >

<Apply  />
</Modal>
    </>
}


export default CareerPage;


export const JobsEXp:FC = ()=>{


    return(<>

    <section className="font-sans py-12 bg-white">

{/* <!-- Header Section --> */}
<div className="text-center py-8">
  <h2 className="text-3xl font-bold text-gray-800">Find Your Path at AuthCor Technologies</h2>
</div>

{/* <!-- Job Cards Section --> */}
<div className="mx-auto  max-w-7xl px-2 sm:px-0 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  
  {/* <!-- Job Card 1 --> */}
  <div className="bg-white shadow-lg rounded-lg p-6 border grid">
    <h2 className="text-xl font-bold text-gray-800 mb-2">Associative Field Service Engineer</h2>
    <p className="text-sm text-red-500 font-semibold mb-2">
    Diploma in a relevant field or equivalent practical experience.

    </p>
    <p className="text-gray-600 text-sm mb-4">
      As an Associate Field Service Engineer, you’ll ensure optimal data center performance by installing, maintaining, troubleshooting, and repairing hardware and infrastructure systems.
    </p>
    <div className="flex items-center text-sm text-gray-500 mb-4">
      <span className="mr-4">
      <svg fill="#000000" className="h-4 w-4" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M255.991,213.339c35.355,0,64-28.645,64-64s-28.645-64-64-64s-64,28.645-64,64S220.636,213.339,255.991,213.339z M255.991,128.006c11.791,0,21.333,9.542,21.333,21.333s-9.542,21.333-21.333,21.333c-11.791,0-21.333-9.542-21.333-21.333 S244.2,128.006,255.991,128.006z"></path> <path d="M228.229,397.518l8.681,17.362c7.863,15.726,30.305,15.723,38.164-0.004l18.389-36.8 c18.466-36.902,35.939-66.021,75.763-128.619l1.036-1.629c5.852-9.199,8.681-13.651,12.042-18.961 c14.956-23.623,23.02-50.992,23.02-79.527c0-89.032-77.35-158.521-166.786-148.343c-66.548,7.591-121.188,60.835-130.398,127.125 c-5.511,39.683,4.604,78.394,27.526,109.517C166.5,279.435,190.243,321.574,228.229,397.518z M150.402,133.992 c6.528-46.989,45.76-85.218,92.967-90.603c64.055-7.29,119.289,42.33,119.289,105.951c0,20.39-5.735,39.855-16.403,56.706 c-3.34,5.276-6.155,9.708-11.991,18.88l-1.036,1.629c-40.148,63.109-58.184,93.122-77.28,131.152 c-33.196-65.363-56.271-105.169-85.935-145.383C153.636,190.087,146.437,162.538,150.402,133.992z"></path> <path d="M388.88,313.04c-11.464-2.719-22.961,4.371-25.68,15.835c-2.719,11.464,4.371,22.962,15.835,25.68 c57.212,13.567,90.298,35.274,90.298,50.773c0,29.478-94.949,64-213.333,64c-118.398,0-213.333-34.518-213.333-64 c0-15.508,33.053-37.209,90.236-50.773c11.464-2.719,18.553-14.217,15.834-25.681c-2.719-11.464-14.217-18.553-25.681-15.833 C48.205,330.796,0,362.445,0,405.329c0,64.804,115.134,106.667,256,106.667c140.853,0,256-41.865,256-106.667 C512,362.444,463.765,330.798,388.88,313.04z"></path> </g> </g> </g> </g></svg>
       Singapore, On-site</span>
      <span>
      <svg fill="#000000" className="h-4 w-4" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 33.7169 50.6051 C 45.9141 50.6051 56.0000 40.4968 56.0000 28.2994 C 56.0000 16.1245 45.8920 5.9937 33.6944 5.9937 C 22.4180 5.9937 12.9611 14.6419 11.5909 25.5365 C 12.1749 25.5365 12.7365 25.5814 13.2981 25.6712 C 13.9944 25.7611 14.6908 25.9183 15.3646 26.1205 C 16.4204 16.9332 24.1926 9.8124 33.6944 9.8124 C 43.9598 9.8124 52.1812 18.0563 52.2037 28.2994 C 52.2037 33.0840 50.4294 37.3969 47.5090 40.6765 C 44.1171 37.8461 39.0406 35.9593 33.6944 35.9593 C 31.1785 35.9593 28.3258 36.4984 25.6751 37.4418 C 25.8324 38.2954 25.9222 39.1715 25.9222 40.0475 C 25.9222 42.9902 25.0012 45.7531 23.4513 48.0668 C 26.5287 49.6616 30.0329 50.6051 33.7169 50.6051 Z M 33.6944 32.0956 C 38.0073 32.0956 41.2644 28.3668 41.2644 23.6720 C 41.2644 19.2469 37.9399 15.4057 33.6944 15.4057 C 29.4714 15.4057 26.1244 19.2469 26.1244 23.6720 C 26.1244 28.3668 29.4040 32.0956 33.6944 32.0956 Z M 11.4112 51.4587 C 17.6783 51.4587 22.8224 46.3372 22.8224 40.0475 C 22.8224 33.8028 17.6783 28.6363 11.4112 28.6363 C 5.1665 28.6363 0 33.8028 0 40.0475 C 0 46.3372 5.1665 51.4587 11.4112 51.4587 Z M 10.0634 46.7415 C 9.7040 46.7415 9.2547 46.5842 8.9627 46.2698 L 4.6498 41.5301 C 4.4926 41.3504 4.3803 40.9685 4.3803 40.6540 C 4.3803 39.8903 4.9868 39.2838 5.7505 39.2838 C 6.1998 39.2838 6.5592 39.4860 6.8063 39.7555 L 9.9960 43.2148 L 15.9487 34.9709 C 16.1958 34.6115 16.6001 34.3644 17.0943 34.3644 C 17.8356 34.3644 18.4870 34.9484 18.4870 35.7122 C 18.4870 35.9593 18.3747 36.2513 18.1725 36.5433 L 11.2090 46.2248 C 10.9844 46.5393 10.5351 46.7415 10.0634 46.7415 Z"></path></g></svg>

        1-2 Years Of Experience</span>
    </div>
    <Link href={"/contact/careers"} className="w-full bg-red-600 block text-center font-semibold text-white py-2 px-4 rounded-md  self-end h-fit hover:bg-white hover:text-black border-2 border-red-600">Apply here</Link>
  </div>

  {/* <!-- Job Card 2 --> */}
  <div className="bg-white shadow-lg rounded-lg p-6 border grid">
    <h2 className="text-xl font-bold text-gray-800 mb-2">Field Service Engineer</h2>
    <p className="text-sm text-red-500 font-semibold mb-2">
    Bachelor’s degree or equivalent practical experience.
    </p>
    <p className="text-gray-600 text-sm mb-4">
      As a Field Service Engineer, you will lead the maintenance, installation, troubleshooting, and repair of data center hardware and infrastructure systems, ensuring peak performance and operational reliability.
    </p>
    <div className="flex items-center text-sm text-gray-500 mb-4">
      <span className="mr-4">
        <svg fill="#000000" className="h-4 w-4" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M255.991,213.339c35.355,0,64-28.645,64-64s-28.645-64-64-64s-64,28.645-64,64S220.636,213.339,255.991,213.339z M255.991,128.006c11.791,0,21.333,9.542,21.333,21.333s-9.542,21.333-21.333,21.333c-11.791,0-21.333-9.542-21.333-21.333 S244.2,128.006,255.991,128.006z"></path> <path d="M228.229,397.518l8.681,17.362c7.863,15.726,30.305,15.723,38.164-0.004l18.389-36.8 c18.466-36.902,35.939-66.021,75.763-128.619l1.036-1.629c5.852-9.199,8.681-13.651,12.042-18.961 c14.956-23.623,23.02-50.992,23.02-79.527c0-89.032-77.35-158.521-166.786-148.343c-66.548,7.591-121.188,60.835-130.398,127.125 c-5.511,39.683,4.604,78.394,27.526,109.517C166.5,279.435,190.243,321.574,228.229,397.518z M150.402,133.992 c6.528-46.989,45.76-85.218,92.967-90.603c64.055-7.29,119.289,42.33,119.289,105.951c0,20.39-5.735,39.855-16.403,56.706 c-3.34,5.276-6.155,9.708-11.991,18.88l-1.036,1.629c-40.148,63.109-58.184,93.122-77.28,131.152 c-33.196-65.363-56.271-105.169-85.935-145.383C153.636,190.087,146.437,162.538,150.402,133.992z"></path> <path d="M388.88,313.04c-11.464-2.719-22.961,4.371-25.68,15.835c-2.719,11.464,4.371,22.962,15.835,25.68 c57.212,13.567,90.298,35.274,90.298,50.773c0,29.478-94.949,64-213.333,64c-118.398,0-213.333-34.518-213.333-64 c0-15.508,33.053-37.209,90.236-50.773c11.464-2.719,18.553-14.217,15.834-25.681c-2.719-11.464-14.217-18.553-25.681-15.833 C48.205,330.796,0,362.445,0,405.329c0,64.804,115.134,106.667,256,106.667c140.853,0,256-41.865,256-106.667 C512,362.444,463.765,330.798,388.88,313.04z"></path> </g> </g> </g> </g></svg>
       Singapore, On-site</span>
      <span>
      <svg fill="#000000" className="h-4 w-4" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 33.7169 50.6051 C 45.9141 50.6051 56.0000 40.4968 56.0000 28.2994 C 56.0000 16.1245 45.8920 5.9937 33.6944 5.9937 C 22.4180 5.9937 12.9611 14.6419 11.5909 25.5365 C 12.1749 25.5365 12.7365 25.5814 13.2981 25.6712 C 13.9944 25.7611 14.6908 25.9183 15.3646 26.1205 C 16.4204 16.9332 24.1926 9.8124 33.6944 9.8124 C 43.9598 9.8124 52.1812 18.0563 52.2037 28.2994 C 52.2037 33.0840 50.4294 37.3969 47.5090 40.6765 C 44.1171 37.8461 39.0406 35.9593 33.6944 35.9593 C 31.1785 35.9593 28.3258 36.4984 25.6751 37.4418 C 25.8324 38.2954 25.9222 39.1715 25.9222 40.0475 C 25.9222 42.9902 25.0012 45.7531 23.4513 48.0668 C 26.5287 49.6616 30.0329 50.6051 33.7169 50.6051 Z M 33.6944 32.0956 C 38.0073 32.0956 41.2644 28.3668 41.2644 23.6720 C 41.2644 19.2469 37.9399 15.4057 33.6944 15.4057 C 29.4714 15.4057 26.1244 19.2469 26.1244 23.6720 C 26.1244 28.3668 29.4040 32.0956 33.6944 32.0956 Z M 11.4112 51.4587 C 17.6783 51.4587 22.8224 46.3372 22.8224 40.0475 C 22.8224 33.8028 17.6783 28.6363 11.4112 28.6363 C 5.1665 28.6363 0 33.8028 0 40.0475 C 0 46.3372 5.1665 51.4587 11.4112 51.4587 Z M 10.0634 46.7415 C 9.7040 46.7415 9.2547 46.5842 8.9627 46.2698 L 4.6498 41.5301 C 4.4926 41.3504 4.3803 40.9685 4.3803 40.6540 C 4.3803 39.8903 4.9868 39.2838 5.7505 39.2838 C 6.1998 39.2838 6.5592 39.4860 6.8063 39.7555 L 9.9960 43.2148 L 15.9487 34.9709 C 16.1958 34.6115 16.6001 34.3644 17.0943 34.3644 C 17.8356 34.3644 18.4870 34.9484 18.4870 35.7122 C 18.4870 35.9593 18.3747 36.2513 18.1725 36.5433 L 11.2090 46.2248 C 10.9844 46.5393 10.5351 46.7415 10.0634 46.7415 Z"></path></g></svg>
        3+ Years Of Experience</span>
    </div>
    <Link href={"/contact/careers"} className="w-full bg-red-600 block text-center font-semibold text-white py-2 px-4 rounded-md self-end h-fit hover:bg-white hover:text-black border-2 border-red-600">Apply here</Link>

  </div>

  {/* <!-- Job Card 3 --> */}
  <div className="bg-white shadow-lg rounded-lg p-6 border grid">
    <h2 className="text-xl font-bold text-gray-800 mb-2">Technical Project Manager</h2>
    <p className="text-sm text-red-500 font-semibold mb-2">
    Bachelor’s degree or equivalent practical experience.
    </p>
    <p className="text-gray-600 text-sm mb-4">
      As a Technical Project Manager, you will lead data center projects from planning to delivery, ensuring timely, on-budget completion while meeting quality standards. Your expertise will drive innovation and operational success.
    </p>
    <div>

    <div className="flex items-center text-sm text-gray-500 mb-4">
      <span className="mr-4">
      <svg fill="#000000" className="h-4 w-4" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M255.991,213.339c35.355,0,64-28.645,64-64s-28.645-64-64-64s-64,28.645-64,64S220.636,213.339,255.991,213.339z M255.991,128.006c11.791,0,21.333,9.542,21.333,21.333s-9.542,21.333-21.333,21.333c-11.791,0-21.333-9.542-21.333-21.333 S244.2,128.006,255.991,128.006z"></path> <path d="M228.229,397.518l8.681,17.362c7.863,15.726,30.305,15.723,38.164-0.004l18.389-36.8 c18.466-36.902,35.939-66.021,75.763-128.619l1.036-1.629c5.852-9.199,8.681-13.651,12.042-18.961 c14.956-23.623,23.02-50.992,23.02-79.527c0-89.032-77.35-158.521-166.786-148.343c-66.548,7.591-121.188,60.835-130.398,127.125 c-5.511,39.683,4.604,78.394,27.526,109.517C166.5,279.435,190.243,321.574,228.229,397.518z M150.402,133.992 c6.528-46.989,45.76-85.218,92.967-90.603c64.055-7.29,119.289,42.33,119.289,105.951c0,20.39-5.735,39.855-16.403,56.706 c-3.34,5.276-6.155,9.708-11.991,18.88l-1.036,1.629c-40.148,63.109-58.184,93.122-77.28,131.152 c-33.196-65.363-56.271-105.169-85.935-145.383C153.636,190.087,146.437,162.538,150.402,133.992z"></path> <path d="M388.88,313.04c-11.464-2.719-22.961,4.371-25.68,15.835c-2.719,11.464,4.371,22.962,15.835,25.68 c57.212,13.567,90.298,35.274,90.298,50.773c0,29.478-94.949,64-213.333,64c-118.398,0-213.333-34.518-213.333-64 c0-15.508,33.053-37.209,90.236-50.773c11.464-2.719,18.553-14.217,15.834-25.681c-2.719-11.464-14.217-18.553-25.681-15.833 C48.205,330.796,0,362.445,0,405.329c0,64.804,115.134,106.667,256,106.667c140.853,0,256-41.865,256-106.667 C512,362.444,463.765,330.798,388.88,313.04z"></path> </g> </g> </g> </g></svg>

         Singapore, On-site</span>
      <span>
      <svg fill="#000000" className="h-4 w-4" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 33.7169 50.6051 C 45.9141 50.6051 56.0000 40.4968 56.0000 28.2994 C 56.0000 16.1245 45.8920 5.9937 33.6944 5.9937 C 22.4180 5.9937 12.9611 14.6419 11.5909 25.5365 C 12.1749 25.5365 12.7365 25.5814 13.2981 25.6712 C 13.9944 25.7611 14.6908 25.9183 15.3646 26.1205 C 16.4204 16.9332 24.1926 9.8124 33.6944 9.8124 C 43.9598 9.8124 52.1812 18.0563 52.2037 28.2994 C 52.2037 33.0840 50.4294 37.3969 47.5090 40.6765 C 44.1171 37.8461 39.0406 35.9593 33.6944 35.9593 C 31.1785 35.9593 28.3258 36.4984 25.6751 37.4418 C 25.8324 38.2954 25.9222 39.1715 25.9222 40.0475 C 25.9222 42.9902 25.0012 45.7531 23.4513 48.0668 C 26.5287 49.6616 30.0329 50.6051 33.7169 50.6051 Z M 33.6944 32.0956 C 38.0073 32.0956 41.2644 28.3668 41.2644 23.6720 C 41.2644 19.2469 37.9399 15.4057 33.6944 15.4057 C 29.4714 15.4057 26.1244 19.2469 26.1244 23.6720 C 26.1244 28.3668 29.4040 32.0956 33.6944 32.0956 Z M 11.4112 51.4587 C 17.6783 51.4587 22.8224 46.3372 22.8224 40.0475 C 22.8224 33.8028 17.6783 28.6363 11.4112 28.6363 C 5.1665 28.6363 0 33.8028 0 40.0475 C 0 46.3372 5.1665 51.4587 11.4112 51.4587 Z M 10.0634 46.7415 C 9.7040 46.7415 9.2547 46.5842 8.9627 46.2698 L 4.6498 41.5301 C 4.4926 41.3504 4.3803 40.9685 4.3803 40.6540 C 4.3803 39.8903 4.9868 39.2838 5.7505 39.2838 C 6.1998 39.2838 6.5592 39.4860 6.8063 39.7555 L 9.9960 43.2148 L 15.9487 34.9709 C 16.1958 34.6115 16.6001 34.3644 17.0943 34.3644 C 17.8356 34.3644 18.4870 34.9484 18.4870 35.7122 C 18.4870 35.9593 18.3747 36.2513 18.1725 36.5433 L 11.2090 46.2248 C 10.9844 46.5393 10.5351 46.7415 10.0634 46.7415 Z"></path></g></svg>
        5+ Years Of Experience
        </span>
    </div>
    <Link href={"/contact/careers"} className="w-full bg-red-600 font-semibold block text-center text-white py-2 px-4 rounded-md  self-end h-fit hover:bg-white hover:text-black border-2 border-red-600">Apply here</Link>
    
    </div>
  </div>

</div>

</section>
    </>)
}
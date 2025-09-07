"use client"
import { FC, useRef, useState } from "react";
import Connect from "../contactmodal/Connect";
import Modal from "../modal/Modal";
import ScrollAnimation from 'react-animate-on-scroll'
import useScrollTriggeredCountUp from "@/utilities/useScrollTriggeredCountUp";

const Statistics:FC = () =>{



  const [quotedisplay, setquotedisplay] = useState(false)

    return(<><div className="container md:mx-auto grid justify-center">
          
          
          <div className="container px-5 py-6  md:mx-auto">
          <ScrollAnimation animateIn="animate__fadeInUp">
    <h1 className="text-4xl px-4 font-medium text-gray-700 text-center">
    Why AuthCor Technologies?
    </h1>
    <p  className="text-center px-4 mt-6 text-lg font-light text-black">
    We offer a comprehensive suite of data center solutions, including remote hands support, logistics, deployment, and 24/7 emergency services. They stand out for their expert, adaptable workforce and tailored solutions to meet unique business needs. With a global reach and experience across IT and cloud industries AuthCor ensures seamless network migrations, structured cabling, and reliable managed services. 
    </p>
          </ScrollAnimation>
    <div className="flex items-center justify-center m-4" >
    {/* <button className="inline-flex text-white font-bold bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Let’s Have A Conversation</button> */}
    
    <button onClick={()=>{setquotedisplay(true)}} className="inline-flex border-2 border-red-500 text-white font-semibold bg-red-500 border-0 py-2 px-6 focus:outline-none relative h-fit w-fit  shadow-xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm  before:bg-white hover:text-black before:duration-200 before:ease-out  hover:before:h-full hover:before:w-full hover:before:opacity-100  rounded text-lg"> <span className="relative"> Let’s have a conversation </span></button>

    </div>
  </div>

    <div>

    {/* <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-semibold text-3xl text-gray-900">2.7K</h2>
        <p className="leading-relaxed text-gray-500 ">Users</p>
      </div> */}

</div>
    </div>

      <StatisticsTable/>
      <Modal open={quotedisplay} onClose={()=>{setquotedisplay(false)}} >

<Connect  />
</Modal>

    </>)

}


export default Statistics;



export const StatisticsTable:FC = () =>{

  return (<>
      <div className="container px-5 py-0 md:mx-auto grid grid-cols-1   overflow-hidden text-center sm:grid-cols-2 lg:grid-cols-4">
      
        <div className="flex flex-col  p-8 sm:border-r-2 border-red-700 border-b-2">
        {/* <ScrollAnimation animateIn="animate__bounceInUp"> */}
          <dd className="order-first text-4xl font-semibold tracking-tight text-red-700"> <CountUp end={3} /> </dd>
        {/* </ScrollAnimation> */}
          <dt className="text-sm font-light leading-6 text-gray-600">Years of experience</dt>
        </div>
        <div className="flex flex-col  p-8 lg:border-r-2 border-red-700 border-b-2">
        {/* <ScrollAnimation animateIn="animate__bounceInUp"> */}
          <dd className="order-first text-4xl font-semibold tracking-tight text-red-700"><CountUp end={13} /></dd>
        {/* </ScrollAnimation> */}
          <dt className="text-sm font-light leading-6 text-gray-600">Countries Served</dt>
        </div>
        <div className="flex flex-col  p-8 sm:border-r-2 border-red-700 border-b-2">
        {/* <ScrollAnimation animateIn="animate__bounceInUp"> */}
          <dd className="order-first text-4xl font-semibold tracking-tight text-red-700"> <CountUp end={100} /></dd>
        {/* </ScrollAnimation> */}
          <dt className="text-sm font-light leading-6 text-gray-600">Clients Sites Supported</dt>
        </div>
        <div className="flex flex-col  p-8 border-red-700 border-b-2">
        {/* <ScrollAnimation animateIn="animate__bounceInUp"> */}

          <dd className="order-first text-4xl font-semibold tracking-tight text-red-700"><CountUp end={1000}   /></dd>
        {/* </ScrollAnimation> */}
          <dt className="text-sm font-light leading-6 text-gray-600">Tickets Resolved Monthly</dt>
        </div>

        <div className="flex flex-col  p-8 sm:border-r-2 border-b-2 lg:border-b-0 border-red-700">
        {/* <ScrollAnimation animateIn="animate__bounceInUp"> */}

          <dd className="order-first text-4xl font-semibold tracking-tight text-red-700"><CountUp end={5}   /></dd>
        {/* </ScrollAnimation> */}
          <dt className="text-sm font-light leading-6 text-gray-600">In-Country Storage Locations</dt>
        </div>

        <div className="flex flex-col  p-8 lg:border-r-2 border-b-2 lg:border-b-0 border-red-700">
          {/* <ScrollAnimation animateIn="animate__bounceInUp"> */}
          <dd className="order-first text-4xl font-semibold tracking-tight text-red-700"><CountUp end={25}   /></dd>

          {/* </ScrollAnimation> */}
          <dt className="text-sm font-light leading-6 text-gray-600">Unique Service Providers</dt>
        </div>

        <div className="flex flex-col  p-8 sm:border-r-2 border-b-2 sm:border-b-0 border-red-700">
        {/* <ScrollAnimation animateIn="animate__bounceInUp"> */}

          <dd className="order-first text-4xl font-semibold tracking-tight text-red-700"><CountUp end={60}   /></dd>
        {/* </ScrollAnimation> */}
          <dt className="text-sm font-light leading-6 text-gray-600">Projects Managed Monthly</dt>
        </div>

        <div className="flex flex-col  p-8 border-red-700 border-b-2 sm:border-b-0">
        {/* <ScrollAnimation animateIn="animate__bounceInUp"> */}

          <dd className="order-first text-4xl font-semibold tracking-tight text-red-700"><CountUp end={500}   /></dd>
        {/* </ScrollAnimation> */}
          <dt className="text-sm font-light leading-6 text-gray-600">Defective Components Returned</dt>
        </div>

      </div>
  </>)
}



interface CU_props {
    end:number;
    duration?:number;
}
const CountUp:FC<CU_props> = ({end,duration=2000}) => {
  const ref = useRef<HTMLDivElement>(null);
  const count = useScrollTriggeredCountUp(ref, end,duration); // 0 to 100 count-up

  return <div ref={ref}>{count < 10  ? `0${count}` : count}+</div>;
};
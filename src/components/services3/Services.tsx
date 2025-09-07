import Link from "next/link";
import { FC } from "react";

import { serviceJson } from "./servicesjson";
import ScrollAnimation from 'react-animate-on-scroll'




const Services:FC = () =>{
    return(<>
    <section className="text-gray-600 px-5 md:px-10">
  <div className="container px-5 py-24  mx-2 md:mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
      <h1 className="text-md font-medium text-red-500">Authcor Technologies</h1>
    <h2 className="mt-2 text-3xl font-bold text-gray-800">Your Trusted Data Center Services</h2>
    <p className="mt-4 text-gray-600">
      AuthCor provides expert solutions for every aspect of your data center. From remote hands & eye support to complex deployments, we've got you covered.
    </p>

    <Link href={"/services"} className="py-2 mt-4 flex gap-8 text-black hover:before:bg-redborder-red-500 relative h-fit w-fit overflow-hidden border border-black bg-white px-3 rounded-xl text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full">
        
      <span className="relative z-1 grid gap-8 grid-flow-col items-center text-black hover:text-white">
        Explore all services
        <img className="h-4" src="assests/Arrow 12.png" />

      </span>
    </Link>

      </div>

        {serviceJson.slice(0,5).map((serv,i)=> <Card img={i} index={i} key={serv.title}  title={serv.title} text={serv.text} />)}

    </div>
  </div>
</section>
    </>)
}

interface CardProps{
    img:number,
    title:string,
    text:string,
    index:number
}

const Card:FC<CardProps>  = ({img,title,text,index})=>{

    return (<>

          <div className="p-4 md:w-1/3">
        <ScrollAnimation style={{height:"100%"}} delay={index*100} animateIn="animate__fadeInUp">
        <div className="h-full border-2 grid rounded-lg  overflow-hidden shadow-md transition-all hover:scale-105 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
          {/* <Image height={200} width={200}  className="lg:h-64 md:h-44 w-full object-cover object-center" src={`/assests/Services/${img+1}Service.jpg`} alt="blog"/> */}
          <img height={200} width={200}  className="lg:h-64 md:h-44 w-full object-cover object-center" src={`/assests/Services/${img+1}Service.jpg`} alt="blog"/>
          <div className="p-6">
            <div>
              
            <h2 className="title-font text-lg font-semibold text-gray-900">{title}</h2>
            <p className="leading-relaxed  text-sm mb-4"> {text} </p>
            </div>


          </div>
            <div className="flex items-center flex-wrap px-6 mb-6">


              <Link href={"services/s3"} className="text-indigo-500 text-red-700 font-medium inline-flex items-center md:mb-2 lg:mb-0">Learn more
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>

            </div>
        </div>
      </ScrollAnimation>
      </div>
    </>)
}

export default Services;
"use client";
import { FC, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ScrollAnimation from 'react-animate-on-scroll'

const PS = [
  {logo:"assests/partnership/swift.png",title:"Swift resource mobilization",text:"Rapid deployment of skilled teams to address your needs"},
  {logo:"assests/partnership/adaptable.png",title:"Expert and adaptable workforce",text:"Customized solutions delivered by our versatile experts."},
  {logo:"assests/partnership/tailored.png",title:"Tailored service solutions",text:"Personalized support aligned with your unique business objectives."},
  {logo:"assests/partnership/multination.png",title:"Multinational dedicated teams",text:"Global reach with local expertise for seamless operations."},
  {logo:"assests/partnership/24.png",title:"24/7 emergency support",text:"Uninterrupted service and peace of mind."},

]

const Partnerships:FC = () =>{

  return <>
  <div className="max-w-7xl mx-auto">
  <ScrollAnimation animateIn="animate__fadeInUp">
      <div className="container   py-12 relative ">

          <h1 className="text-4xl font-medium text-gray-700 text-center">
          Global Scale, Uncompromising Standards.
          </h1>
          <p className="text-center  mt-6 mb-4 text-lg font-light text-black">
          By partnering with Authcor, you gain access to unparalleled expertise in data center services. Our versatile and experienced workforce provides personalized solutions tailored to your unique business needs. With our global reach and 24/7 emergency support, we ensure that your operations run smoothly and efficiently. Empower your business with Authcor Technology and achieve unparalleled success in your industry.
          </p>
      </div>
  </ScrollAnimation>


</div>
<div className="px-5 py-12 mx-auto max-w-7xl"> 
<div className="">
<Carousel
  additionalTransfrom={10}
  arrows
  autoPlay={true}
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  
  
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40,
      slidesToSlide: 3
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
  transitionDuration={1000}
>
  
{PS.map((ftr,i)=>      <Card {...ftr} key={i}/>    )}
  
</Carousel>
</div>
 </div>

</>
}

export default Partnerships


interface cardprops{
  logo:string,
  title:string,
  text:string,
}

const Card:FC<cardprops> = ({logo,title,text})=>{
  return (<>  <div className="min-w-[300px] h-full transition-all hover:scale-105 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] mx-4 flex flex-col items-start py-8 px-8 bg-white rounded-lg shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
  <div className="w-16 h-16 mb-4">
    {/* <!-- Replace with actual SVG icon --> */}
    <img src={logo} alt="Swift resource mobilization" className=""/>
  </div>
  <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
  <p className="text-gray-600 mt-2">{text}</p>
</div>
  </>)
}
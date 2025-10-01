import { FC } from "react";
import ScrollAnimation from 'react-animate-on-scroll'

const Industries:FC = () =>{

    return(<><div className="container px-6 py-12 md:mx-auto max-w-7xl">
      <ScrollAnimation animateIn="animate__fadeInUp">

    <h1 className="text-4xl font-medium text-gray-700 text-center">
    Industries We Work For
    </h1>
      </ScrollAnimation>
    </div>

    <div className="grid container  py-6 px-6   md:mx-auto grid-cols-1 md:grid-cols-3 gap-8 p-4 mb-12  max-w-7xl">
    
      {IND.map((ind)=> <Card {...ind} key={ind.text} /> )}
    









  </div>


    </>)

}

interface cardsProps  {
  icon:string,
  text:string,
} 

const IND = [
  {icon:"telecom",text:"IT & Telecom"},
  {icon:"contentdelivery",text:"CDN"},
  {icon:"bigdata",text:"Big Data"},
  {icon:"cloudservice",text:"Cloud"},
  {icon:"media",text:"Media"},
  {icon:"comm",text:"Mobile"},
]

const Card:FC<cardsProps> = ({icon,text})=>{
  return (<>
      <div className="flex items-center p-4 transition-all hover:scale-105 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-white rounded-lg border-2 border-stone   border-stone shadow-md">
      <div className="w-16  h-16 rounded-full">
        {/* <!-- Replace with actual SVG icon --> */}
        <img src={`assests/IndWework/${icon}.png`} alt="IT & Telecom" className=""/>
      </div>
      <div className="ml-4">
        <p className="text-lg font-medium text-gray-800">{text}</p>
      </div>
    </div></>)
}

export default Industries;
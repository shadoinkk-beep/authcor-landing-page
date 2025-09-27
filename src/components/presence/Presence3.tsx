import { FC } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Marquee from "react-fast-marquee";



const AuthCorRegions = ["Singapore","Vietnam","Cambodia","Oman","Malaysia","Philippines","UAE","Kuwait","Indonesia","Hong Kong","Saudi Arabia","India","Thailand","China","Bahrain"]
const PartnerRegions = ["Australia","Sweden","Poland","France","Germany","Belgium","Russia","Netherlands","Brazil","Mexico","Chile","Colombia","Japan","South Africa","South Korea","Turkey"]
""
const Presence3:FC = ()=>{

    return (<div className="container mb-12 py-4 rounded-3xl  mx-auto  max-w-7xl px-2 xl:px-0" >
      <div className="bg-black container mb-12 py-4 px-8 md:mx-auto rounded-3xl">
    <div>
<p className="text-center font-semibold text-lg mb-2 text-red-500">AuthCor Regions</p>


    <Marquee key={"partner"}  autoFill gradientWidth={200} className="container" style={{overflow:"hidden"}} gradient gradientColor="black" direction="left">
        {AuthCorRegions.map((contr)=> <IcoHold key={contr} name={contr} /> )}
    </Marquee >
    </div>
        
     
    {/* <!-- Center Text --> */}
    <div className="text-center text-white grid content-center py-12">
    <ScrollAnimation animateIn="animate__fadeInUp">

      <h2 className="text-4xl font-medium ">We Are Present in</h2>
      <h1 className="text-4xl font-medium my-4">30+ Countries</h1>
      <h2 className="text-4xl font-medium">Across The Globe</h2>
    </ScrollAnimation>
      {/* <h2 className="text-2xl font-semibold">We are Present in <span className="text-4xl">30+ Countries</span> Across the Globe </h2> */}
    </div>

      <div className="bg-black text-white">
<Marquee className="container" key={"authcore"} autoFill gradientWidth={200} style={{overflow:"hidden"}} gradient gradientColor="black" direction="right">

  {PartnerRegions.map((contr)=> <IcoHold key={contr} name={contr} /> )}

    </Marquee >
    <p className="text-center font-semibold text-lg text-red-500">Partner Regions</p>


  </div>


    
    

</div>
    </div>
    )
}

export default Presence3;




const IcoHold:FC<{name?:string}> = ({name="brazil"})=>{
    return (<>
    <div className="p-2 grid justify-items-center">
      <div className="w-14 object-cover h-14 border-4 border-white rounded-full overflow-hidden">

<img src={`assests/flags/${name}.svg`} alt={name} className="w-14 object-cover h-14 mt-[-4px]" /> 
      </div> 
<>
  {/*?xml version="1.0" ?*/}
  {/* <svg className="w-14 object-cover h-14 border-4 border-white rounded-full"  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 473.68 473.68"  fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <circle style={{ fill: "#FFFFFF" }} cx="236.85" cy="236.85" r="236.83" /> <path style={{ fill: "#E4E4E4" }} d="M460.147,157.875H314.22c6.339,50.593,6.376,106.339,0.123,156.996h146.114 c8.53-24.438,13.219-50.683,13.219-78.027C473.68,209.141,468.882,182.575,460.147,157.875z" /> <path style={{ fill: "#258F44" }} d="M314.22,157.875h145.923c-0.022-0.075-0.045-0.138-0.075-0.206 C429.762,72.2,351.792,9.319,258.115,0.972C294.363,20.845,304.953,83.804,314.22,157.875z" /> <path style={{ fill: "#D32027" }} d="M258.115,472.701c93.849-8.362,171.928-71.46,202.122-157.157c0.079-0.228,0.146-0.452,0.228-0.673 H314.347C305.151,389.341,294.516,452.746,258.115,472.701z" /> <path style={{ fill: "#EFEFEF" }} d="M326.419,157.875H189.463v156.996h137.071C332.795,264.21,332.753,208.468,326.419,157.875z" /> <path style={{ fill: "#359846" }} d="M189.463,157.875h136.955c-9.274-74.07-32.056-137.03-68.308-156.902 C251.099,0.352,244.009,0,236.836,0C177.448,0,123.209,21.895,81.65,58.016l107.813,98.83L189.463,157.875L189.463,157.875z" /> <path style={{ fill: "#DB2727" }} d="M189.463,315.147l-108.755,99.69c41.682,36.614,96.295,58.839,156.128,58.839 c7.173,0,14.263-0.352,21.275-0.98c36.401-19.954,59.228-83.359,68.423-157.83H189.463V315.147z" /> <path style={{ fill: "#151515" }} d="M81.65,58.016c-30.538,26.536-54.239,60.746-68.042,99.653c-0.022,0.067-0.045,0.131-0.075,0.206 C4.798,182.575,0,209.141,0,236.844c0,27.348,4.697,53.589,13.219,78.027c0.079,0.221,0.153,0.445,0.228,0.673 c13.635,38.705,37.059,72.769,67.26,99.298l108.755-99.69v-0.277v-157v-1.028L81.65,58.016z" /> </g></svg> */}
</>


<span className="font-xs text-center text-white " >{name}</span>
</div>
    </>)
}
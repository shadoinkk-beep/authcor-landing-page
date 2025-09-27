import { FC } from "react";
import Marquee from "react-fast-marquee";
const comps_logs = [
  ["27_Tata.png","36_Vodafone-Logo.png","7_Equinixlogo.png","26_Airtel-logo.png","32_Zain_logo.png","5_china_mobile.jpeg","11_PDG_logo.png","19_aimsdatacentre_logo.jpeg"],
  ["35_Etisalat-Logo.png","14_ST_Telemedia_Logo.png","15_Starhublogo.png","18_View_quest_logo.png","17_Telstra-logo.jpg","4_Centersquare_logo.jpeg","31_NTT-Data-Logo.PNG","9_keppel_data_centres.jpg","22_TMGlobal_Logo.png"],
  ["24_viettelidc_logo.png","21_celcomdigi.webp","13_Singtel_logo.png","8_GlobalSwitch_logo.png","16_Telin.png","3_CapitaLandLogo.png","10_M1_Logo1.png","29_hkt.png","25_mekongnet.jpg",],
  ["33_DataMount-logo.png","34_stc_logo.jpeg","28_epldt-logo..png","6_DigitalRealty.png","12_racks_logo.webp","20_bridge_datacentres.png","23_DigitalEdge_Logo.png","1_1net.jpeg","2_bdx.jpeg"],
]



const CompaniesMarq:FC = ()=>{
    return(<>
    <section className="grid place-items-center py-20 px-8 md:px-14 my-3 pb-0">
      {/* <div className="flex w-full">
        <hr/>
        <span className="text-black ">Familiar with data centers</span>
        <hr/>
      </div> */}
      <div className="relative flex items-center w-full container mx-5 md:mx-auto">
    <div className="flex-grow border-2 border-t border-gray-300"></div>
    <span className="flex-shrink mx-4 text-black uppercase text-sm">Trusted Inside the World's Most Critical Data Center Ecosystems
</span>
    <div className="flex-grow border-t border-2 border-gray-300"></div>
  </div>
        <section className="text-gray-600 body-font">
  <div className="container py-4 mx-auto grid place-items-center max-w-7xl">


      
    <Marquee key={0} autoFill>

    
    {comps_logs[0].map((logo)=>    <div key={logo} className="p-4 w-24 md:w-44 md:min-w-[200px]">
    <img src={`assests/DataCenters/${logo}`} alt={logo} />
  </div>)
    }


    </Marquee >
    <Marquee key={1} autoFill>

    
    {comps_logs[1].map((logo)=>    <div key={logo} className="p-4 w-24 md:w-44 md:min-w-[200px]">
    <img src={`assests/DataCenters/${logo}`} alt={logo} />
  </div>)
    }


    </Marquee >
    <Marquee key={2} autoFill>

    
    {comps_logs[2].map((logo)=>    <div key={logo} className="p-4 w-24 md:w-44 md:min-w-[200px]">
    <img src={`assests/DataCenters/${logo}`} />
  </div>)
    }


    </Marquee >
    <Marquee key={3} autoFill>

    
    {comps_logs[3].map((logo)=>    <div key={logo} className="p-4 w-24 md:w-44 md:min-w-[200px]">
    <img src={`assests/DataCenters/${logo}`} />
  </div>)
    }


    </Marquee >


  </div>
</section>
    </section>
    </>)
}

export default CompaniesMarq;


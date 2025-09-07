import { FC } from "react";

export const SuccessModal:FC = ()=>{

    return(<><div className="rounded-lg relative max-w-sm">
    <div className="flex justify-end p-2">

    </div>
    <div className="p-6 pt-0 text-center grid justify-items-center">
    <svg viewBox="0 0 24 24" className="h-24 w-24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
  <g id="SVGRepo_iconCarrier">
    <path
      d="M12.0001 2.84955C17.0538 2.84955 21.1506 6.94636 21.1506 12C21.1506 17.0537 17.0538 21.1505 12.0001 21.1505C6.94642 21.1505 2.84961 17.0537 2.84961 12C2.84961 6.94636 6.94642 2.84955 12.0001 2.84955Z"
      stroke="#1C1C1C"
      strokeWidth="1.69904"
    />
    <path
      d="M10.1831 13.0449L10.6943 13.5561C10.9767 13.8384 11.4344 13.8384 11.7168 13.5561L14.2729 11"
      stroke="#000000"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </g>
</svg>

      <div className="text-xl grid justify-items-center font-normal text-gray-500 mt-5 mb-6">
        <img className="h-24 w-24" src="/assests/AuthCor_Logo_B.png" />
        <span>will connet with you very soon!</span>
        
      </div>


    </div>
  </div>
  
    </>)
    
}
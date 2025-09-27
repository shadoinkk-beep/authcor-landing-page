"use client";
import Link from "next/link";
import { FC, useState } from "react";
import Connect from "../contactmodal/Connect";
import ContactUs from "../contactmodal/ContactUs";
import Modal from "../modal/Modal";


const social_links = {
  "whatsapp" :"https://wa.me/+6593966854",
  "linkdin" :"https://www.linkedin.com/company/authcor/",
  "instagram" :"https://www.instagram.com/authcortechnologies/",
}

const Footer3:FC = () =>{

    const [quotedisplay, setquotedisplay] = useState(false);
    const [contactdisplay, setcontactdisplay] = useState(false);
    
    return (<>
    <section className="w-full bg-stone-900">
        <section className="w-full bg-stone-900 container text-white  py-10 md:mx-auto gap-y-4 grid justify-normal lg:grid-flow-col mx-auto  max-w-7xl px-4 sm:px-0" >
          <div className="grid">
          <header className="flex justify-between items-start">
              <div>

            {/* <img src="assests/AuthCor_Logo.png" style={{width:"10rem"}} /> */}
      <svg xmlns="http://www.w3.org/2000/svg" width="168" height="32" viewBox="0 0 168 32" fill="none">
          <g clipPath="url(#clip0_327_264)">
          <path d="M87.6974 23.9094C87.6934 21.6968 87.7478 19.6046 87.6713 17.518C87.5655 14.634 85.9612 13.2158 83.3247 13.5533C81.7733 13.7518 80.6219 14.8673 80.4039 16.6497C80.231 18.0627 80.247 19.5072 80.238 20.9381C80.2169 24.2884 80.2312 27.639 80.2312 31.0072C78.1676 31.0072 76.2059 31.0072 74.1914 31.0072C74.1914 20.528 74.1914 10.096 74.1914 -0.390625C76.1909 -0.390625 78.1503 -0.390625 80.2405 -0.390625C80.2405 3.2999 80.2405 6.99442 80.2405 10.6889C80.3604 10.7718 80.4803 10.8547 80.6002 10.9375C80.8245 10.5831 81.0085 10.187 81.2796 9.88096C82.967 7.97669 85.0538 7.20694 87.4603 7.48687C90.9132 7.88851 93.3837 10.1498 93.5617 13.9054C93.8302 19.5704 93.6317 25.2612 93.6317 30.998C91.7433 30.998 89.7871 30.998 87.6974 30.998C87.6974 28.6723 87.6974 26.3523 87.6974 23.9094Z" fill="white"/>
          <path d="M121.986 28.4922C115.438 34.0018 102.705 32.6229 99.1528 21.003C95.995 10.6743 102.865 0.350406 112.932 0.285117C116.779 0.260171 120.272 1.27241 123.224 4.05386C123.505 4.3192 123.783 4.58956 124.135 4.92676C122.789 6.59965 121.508 8.19324 120.233 9.77817C114.54 5.5029 110.263 5.37375 107.095 9.32266C104.093 13.0664 104.207 19.2147 107.346 22.8251C110.563 26.5248 115.143 26.2263 120.332 21.9901C121.624 23.3597 122.913 24.7271 124.319 26.2189C123.538 26.9829 122.793 27.7098 121.986 28.4922Z" fill="#ED1E26"/>
          <path d="M147.928 11.4782C150.995 15.4796 151.686 19.8655 149.702 24.4874C147.699 29.1531 144.087 31.3359 139.353 31.5508C133.807 31.8025 128.669 27.7142 127.678 21.6136C126.625 15.131 130.842 8.65146 136.867 7.66341C141.108 6.96802 144.835 8.00551 147.928 11.4782ZM140.622 25.7005C143.134 24.9676 144.626 22.824 144.728 19.8005C144.83 16.7528 143.136 14.0975 140.608 13.3442C138.069 12.5874 135.453 13.6841 134.3 16.1324C133.173 18.5258 133.185 20.9822 134.594 23.2417C135.98 25.465 138.006 26.2383 140.622 25.7005Z" fill="#ED1E26"/>
          <path d="M52.1558 18.4978C52.1558 22.7138 52.1558 26.8067 52.1558 30.977C50.1132 30.977 48.1276 30.977 46.0276 30.977C46.0276 30.0234 46.0276 29.0681 46.0276 27.8279C44.5754 29.7049 43.0846 30.9797 41.0422 31.3822C36.6047 32.2569 32.8848 29.3818 32.6112 24.5064C32.3819 20.422 32.5019 16.3146 32.473 12.2173C32.4633 10.8291 32.4715 9.44067 32.4715 7.97754C34.4951 7.97754 36.4475 7.97754 38.5022 7.97754C38.5203 8.2841 38.5584 8.63193 38.5588 8.97981C38.5631 12.7506 38.555 16.5215 38.5677 20.2922C38.5699 20.9448 38.6117 21.6042 38.7071 22.248C39.0023 24.2401 40.1864 25.3624 42.0242 25.4433C44.03 25.5317 45.3933 24.5133 45.8095 22.5347C45.9589 21.8248 46.0158 21.0788 46.0192 20.3487C46.0385 16.2541 46.0285 12.1594 46.0285 7.98315C48.0553 7.98315 50.0415 7.98315 52.1558 7.98315C52.1558 11.4369 52.1558 14.9059 52.1558 18.4978Z" fill="white"/>
          <path d="M69.1691 13.5374C67.6296 13.5386 66.1975 13.5386 64.6804 13.5386C64.6804 17.0515 64.6506 20.4779 64.6979 23.903C64.7129 24.987 65.3336 25.6953 66.3796 25.6251C67.4141 25.5557 68.4382 25.3073 69.5878 25.1174C69.5878 26.5617 69.616 28.1377 69.5599 29.7103C69.5506 29.9703 69.2177 30.317 68.958 30.4508C66.63 31.6509 64.2008 31.804 61.7718 30.9456C59.7373 30.2266 58.5708 27.9898 58.5492 24.9977C58.5221 21.2341 58.5427 17.4701 58.5427 13.6009C57.7343 13.6009 56.9615 13.6009 56.0996 13.6009C56.0996 11.685 56.0996 9.86981 56.0996 7.95901C56.8292 7.95901 57.6069 7.95901 58.5166 7.95901C58.5166 5.9355 58.5166 3.99857 58.5166 2.02637C60.6063 2.02637 62.5639 2.02637 64.6231 2.02637C64.6231 3.95983 64.6231 5.86512 64.6231 7.86977C66.3341 7.86977 67.9469 7.86977 69.6838 7.86977C69.6838 9.67332 69.6942 11.3788 69.6661 13.0835C69.6636 13.2369 69.4123 13.3854 69.1691 13.5374Z" fill="white"/>
          <path d="M163.543 8.92285C164.862 7.7132 166.332 7.36549 168 7.46747C168 9.75186 168 11.9863 168 14.2165C167.918 14.2559 167.855 14.3098 167.789 14.3139C163.528 14.5838 161.41 16.9132 161.249 21.5684C161.195 23.1242 161.229 24.6836 161.226 26.2414C161.223 27.7928 161.225 29.3442 161.225 30.9743C159.199 30.9743 157.243 30.9743 155.201 30.9743C155.201 23.3653 155.201 15.7241 155.201 7.99177C157.154 7.99177 159.135 7.99177 161.186 7.99177C161.186 9.31345 161.186 10.614 161.186 12.0394C162.006 10.945 162.743 9.96202 163.543 8.92285Z" fill="#ED1E26"/>
          <path d="M7.37459 29.4374C6.97376 31.1762 6.03788 31.7303 4.47038 31.5443C3.05409 31.3764 1.60726 31.5089 0 31.5089C0.517923 30.3572 0.946671 29.3218 1.43885 28.3229C4.45475 22.2018 8.23193 16.7871 13.8008 13.0929C18.547 9.94448 23.6965 8.66745 29.2454 9.40782C29.6409 9.46058 30.0249 9.61285 30.7047 9.79792C24.2429 9.86684 19.3737 12.9001 15.1682 17.4579C11.9537 20.9418 9.48604 24.9999 7.37459 29.4374Z" fill="#ED1E26"/>
          <path d="M21.8586 27.9059C21.4219 26.8105 21.254 25.3954 20.5425 24.9095C19.7754 24.3857 18.4995 24.7114 17.4452 24.7028C15.5219 24.6872 13.5983 24.6984 11.3291 24.6984C12.8558 22.687 14.1598 20.8977 15.5551 19.1958C15.8091 18.8859 16.4311 18.8887 16.8924 18.828C17.3374 18.7694 17.7942 18.8153 18.2273 18.8153C18.2627 18.6582 18.3196 18.5513 18.2917 18.5077C17.409 17.1281 18.0899 16.3252 19.1587 15.6097C20.2467 14.8814 21.3016 14.0953 22.4726 13.2622C24.8872 19.3923 27.2483 25.3868 29.6599 31.5092C27.5909 31.5092 25.6668 31.5354 23.7448 31.4788C23.4793 31.471 23.117 31.1102 22.984 30.8156C22.5709 29.9007 22.2467 28.939 21.8586 27.9059Z" fill="white"/>
          <path d="M6.40226 15.2674C8.17651 10.7498 9.93508 6.32705 11.6554 1.88696C11.895 1.26863 12.166 1.01176 12.811 1.03964C14.2106 1.10013 15.615 1.02769 17.0149 1.08298C17.3117 1.09471 17.7532 1.34476 17.8646 1.61278C18.788 3.8352 19.6495 6.08763 20.575 8.44666C14.0306 10.2133 8.98822 14.3166 4.66406 19.661C5.23419 18.2262 5.80432 16.7914 6.40226 15.2674Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0_327_264">
          <rect width="168" height="32" fill="white"/>
          </clipPath>
          </defs>
      </svg>
            <span className="text-white">Your Global Data Center Operations, Solved.</span>
              </div>




            </header>
            <main className="text-center py-2 sm:pb-0  grid grid-flow-row justify-start md:justify-start  items-center gap-1 text-white">
              <div className="text-white text-left">
                <h2 className="text-4xl font-bold text-white">Get Started Now!</h2>
                <p className="">It takes less than a minute of your time.</p>
              </div>
              <button onClick={()=>{setquotedisplay(true)}} className="relative self-center justify-self-center py-3 flex w-full items-center justify-center overflow-hidden font-semibold border-2 border-red-600 rounded-md  text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-red-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-full">
              <span className="relative">Get a quote</span>
            </button>
            </main>

          </div>
          <div className="flex flex-wrap gap-2 gap-y-4 lg:grid justify-between grid-flow-col">
          <div className="text-sm w-[45%] lg:w-full">
            <h2 className="text-xl font-bold mb-4">Company</h2>
            <ul className="grid gap-4">
                <a href={"/about"} target="_blank" className="block" > About Us</a>
                <a href={"/insights"} target="_blank" className="block" >  Insights & Resources</a>
                {/* <a href={"/services"} target="_blank" className="block" >  Services</a> */}
                {/* <a href={"/careers"} target="_blank" className="block" >  Careers</a> */}
                <a href={"/contact/quote"} target="_blank" className="block" >  Contact</a>
                <a href={"/contact/partnership"} target="_blank" className="block" >  Global Coverage</a>
                </ul>
        </div>
          <div className="text-sm w-[45%] lg:w-full">
            <h2 className="text-xl  font-bold mb-4">Services</h2>
            <ul className="md:flex gap-8" >
                <ul className="grid gap-4">
                <a href={"/services/s3"} target="_blank" className="block" >  Smart Hands & Remote Hands</a>
                <a href={"/services/s3"} target="_blank" className="block" >  Data Center Deployments</a>
                <a href={"/services/s3"} target="_blank" className="block" >  Structured Cabling</a>
                <a href={"/services/s6"} target="_blank" className="block" >  Managed IT Services</a>
                </ul>
            </ul>
        </div>

          <div className="text-sm w-[45%] lg:w-full">
            <h2 className="text-xl font-bold mb-4">Other</h2>
            <ul className="grid gap-4">
                <Link href={"/careers"} target="_blank" className="block" > Team </Link>
                <Link href={"/about"} target="_blank" className="block" >  Location</Link>
                <Link href={"/services"} target="_blank" className="block" >  Clients</Link>
                <Link href={"#"} target="_blank" className="block" >  Privacy & terms</Link>
                </ul>
        </div>
        <div className="text-sm w-[45%] lg:w-full">
            <h2 className="text-xl font-bold mb-4">Contact us</h2>
            <div className="grid gap-4">

            <p>Phone : +65 9396 6854</p>
            <p>Email : info@authcor.com</p>
            <p>Address : W21 Woodlands Close,</p>
            <p>#08-44, Primz Bizhub,</p>
            <p>Singapore 737854</p>
            <div className="flex space-x-4 text-white mt-1">
            <a href={social_links.linkdin} target="_blank" >
            <svg className="w-5 h-5"
  fill="#ffffff"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 512 512"
  xmlSpace="preserve"
  stroke="#ffffff"
>
  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
  <g id="SVGRepo_iconCarrier">
    {" "}
    <g id="7935ec95c421cee6d86eb22ecd125aef">
      <path
        style={{ display: "inline", fillRule: "evenodd", clipRule: "evenodd" }}
        d="M116.504,500.219V170.654H6.975v329.564H116.504 L116.504,500.219z M61.751,125.674c38.183,0,61.968-25.328,61.968-56.953c-0.722-32.328-23.785-56.941-61.252-56.941 C24.994,11.781,0.5,36.394,0.5,68.722c0,31.625,23.772,56.953,60.53,56.953H61.751L61.751,125.674z M177.124,500.219 c0,0,1.437-298.643,0-329.564H286.67v47.794h-0.727c14.404-22.49,40.354-55.533,99.44-55.533 c72.085,0,126.116,47.103,126.116,148.333v188.971H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531 c-30.254,0-48.284,20.38-56.202,40.08c-2.897,7.012-3.602,16.861-3.602,26.711v184.047H177.124L177.124,500.219z"
      >
        
      </path>
    </g>
  </g>
</svg>

            </a>

            <a href={social_links.whatsapp} target="_blank" > 
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z" fill="#ffffff"></path> </g></svg>
            </a>

            {/* <a href="">
            <svg className="w-5 h-5"
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  width={50}
  height={50}
  viewBox="0,0,256,256"
>
  <g
    fill="#ffffff"
    fillRule="nonzero"
    stroke="none"
    strokeWidth={1}
    strokeLinecap="butt"
    strokeLinejoin="miter"
    strokeMiterlimit={10}
    strokeDasharray=""
    strokeDashoffset={0}
    fontFamily="none"
    fontWeight="none"
    fontSize="none"
    textAnchor="none"
    style={{ mixBlendMode: "normal" }}
  >
    <g transform="scale(5.12,5.12)">
      <path d="M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z" />
    </g>
  </g>
</svg>

            </a> */}
            {/* <a href="#" className="">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
            </a> */}

            <a href={social_links.instagram} target="_blank" className="">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
            </a>
            {/* <a href="#" className="">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
<g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><g transform="scale(5.12,5.12)"><path d="M19,6c-9.25391,0 -17,6.35938 -17,14.5c0,4.39453 2.29297,8.17969 5.83594,10.82422l-2.65625,7.98047l8.29297,-5.13672c1.71484,0.53906 3.60938,0.83203 5.52734,0.83203c0.74609,0 1.47266,-0.05469 2.19531,-0.13672c2.18359,4.24219 7.13281,7.13672 12.80469,7.13672c1.72266,0 3.31641,-0.32422 4.79688,-0.76562l6.84766,3.83203l-1.91016,-6.55078c2.57813,-2.14062 4.26563,-5.12109 4.26563,-8.51562c0,-6.21094 -5.40234,-11.16406 -12.25,-11.89453c-1.35156,-6.98047 -8.42578,-12.10547 -16.75,-12.10547zM19,8c7.30859,0 13.32813,4.35156 14.70313,10.01172c-7.51953,0.13672 -13.70312,5.34375 -13.70312,11.98828c0,1.01953 0.16016,2.00391 0.4375,2.94141c-0.47266,0.03906 -0.95312,0.05859 -1.4375,0.05859c-1.89844,0 -3.80078,-0.28906 -5.36719,-0.84375l-0.44922,-0.15625l-4.36328,2.69922l1.36719,-4.10547l-0.625,-0.42187c-3.48047,-2.35156 -5.5625,-5.72656 -5.5625,-9.67187c0,-6.85937 6.65625,-12.5 15,-12.5zM13,14c-1.10156,0 -2,0.89844 -2,2c0,1.10156 0.89844,2 2,2c1.10156,0 2,-0.89844 2,-2c0,-1.10156 -0.89844,-2 -2,-2zM25,14c-1.10156,0 -2,0.89844 -2,2c0,1.10156 0.89844,2 2,2c1.10156,0 2,-0.89844 2,-2c0,-1.10156 -0.89844,-2 -2,-2zM34,20c6.74609,0 12,4.53516 12,10c0,2.95703 -1.50781,5.55078 -3.99609,7.39453l-0.55859,0.41797l0.91016,3.12109l-3.25,-1.82422l-0.42187,0.14063c-1.39844,0.46875 -2.99609,0.75 -4.68359,0.75c-6.74609,0 -12,-4.53516 -12,-10c0,-5.46484 5.25391,-10 12,-10zM29.5,26c-0.80078,0 -1.5,0.69922 -1.5,1.5c0,0.80078 0.69922,1.5 1.5,1.5c0.80078,0 1.5,-0.69922 1.5,-1.5c0,-0.80078 -0.69922,-1.5 -1.5,-1.5zM38.5,26c-0.80078,0 -1.5,0.69922 -1.5,1.5c0,0.80078 0.69922,1.5 1.5,1.5c0.80078,0 1.5,-0.69922 1.5,-1.5c0,-0.80078 -0.69922,-1.5 -1.5,-1.5z"></path></g></g>
</svg>
            </a> */}
        </div>
            </div>


        </div>
        </div>

    </section>
    <footer className="text-center w-full py-4 flex border-t border-gray-700  text-white mx-auto  max-w-7xl px-4 sm:px-0 justify-self-center">
        <p>© {new Date().getFullYear()} AuthCor Technologies. All Rights Reserved.</p>
    </footer>
    </section>
    
    </>
    )
}

export default Footer3;
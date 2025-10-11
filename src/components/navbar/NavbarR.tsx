"use client";
import { FC, useEffect, useState } from "react";
import Link from 'next/link';
import Connect from "../contactmodal/Connect";
import Modal from "../modal/Modal";
import { usePathname } from "next/navigation";
import ContactUs from "../contactmodal/ContactUs";

const Navbar:FC = () => {



    const [quotedisplay, setquotedisplay] = useState(false)
    const [contactUsdisplay, setcontactUsdisplay] = useState(false)
    const [colorChange, setColorchange] = useState(false);
    const pathname = usePathname()
    const [isMobNavOpen,setisMobNavOpen] = useState(false);
    
    const changeNavbarColor = () => {
      if(window){
      if (window.scrollY >= 80) {
          setColorchange(true);
      } else {
          setColorchange(false);
      }}
  };



  // useEffect(() => {
  //   console.log(pathname)
  // }, [pathname])
  

  
  //  window && window.addEventListener("scroll", changeNavbarColor);

    useEffect(() => {
      window.addEventListener("scroll", changeNavbarColor)
    }, [])
    

    return <> 
    <header  className={`mx-auto max-w-7xl px-4 border border-black shadow-md z-50 text-black body-font fixed top-4 left-4 sm:left-6  right-4 sm:right-6  rounded-xl ${pathname.split("/")[0] ==  "/" ? "dark:text-gray-400" : "bg-white" } ${colorChange
    // ? "bg-gradient-to-r from-black to-indigo-900 text-white"
    ? "bg-white"
    : ""}`}>
    {/* <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex md:justify-between md:items-center"> */}
    <div className="container py-4 mx-auto md:flex md:justify-between items-center">
      
      <div className="flex items-center justify-between">
      <Link href={"/"} className="flex title-font font-medium items-center my-2 md:m-0 text-black">
      <svg xmlns="http://www.w3.org/2000/svg" width="168" height="32" viewBox="0 0 168 32" fill="none">
          <g clipPath="url(#clip0_327_264)">
          <path d="M87.6974 23.9094C87.6934 21.6968 87.7478 19.6046 87.6713 17.518C87.5655 14.634 85.9612 13.2158 83.3247 13.5533C81.7733 13.7518 80.6219 14.8673 80.4039 16.6497C80.231 18.0627 80.247 19.5072 80.238 20.9381C80.2169 24.2884 80.2312 27.639 80.2312 31.0072C78.1676 31.0072 76.2059 31.0072 74.1914 31.0072C74.1914 20.528 74.1914 10.096 74.1914 -0.390625C76.1909 -0.390625 78.1503 -0.390625 80.2405 -0.390625C80.2405 3.2999 80.2405 6.99442 80.2405 10.6889C80.3604 10.7718 80.4803 10.8547 80.6002 10.9375C80.8245 10.5831 81.0085 10.187 81.2796 9.88096C82.967 7.97669 85.0538 7.20694 87.4603 7.48687C90.9132 7.88851 93.3837 10.1498 93.5617 13.9054C93.8302 19.5704 93.6317 25.2612 93.6317 30.998C91.7433 30.998 89.7871 30.998 87.6974 30.998C87.6974 28.6723 87.6974 26.3523 87.6974 23.9094Z" fill="black"/>
          <path d="M121.986 28.4922C115.438 34.0018 102.705 32.6229 99.1528 21.003C95.995 10.6743 102.865 0.350406 112.932 0.285117C116.779 0.260171 120.272 1.27241 123.224 4.05386C123.505 4.3192 123.783 4.58956 124.135 4.92676C122.789 6.59965 121.508 8.19324 120.233 9.77817C114.54 5.5029 110.263 5.37375 107.095 9.32266C104.093 13.0664 104.207 19.2147 107.346 22.8251C110.563 26.5248 115.143 26.2263 120.332 21.9901C121.624 23.3597 122.913 24.7271 124.319 26.2189C123.538 26.9829 122.793 27.7098 121.986 28.4922Z" fill="#ED1E26"/>
          <path d="M147.928 11.4782C150.995 15.4796 151.686 19.8655 149.702 24.4874C147.699 29.1531 144.087 31.3359 139.353 31.5508C133.807 31.8025 128.669 27.7142 127.678 21.6136C126.625 15.131 130.842 8.65146 136.867 7.66341C141.108 6.96802 144.835 8.00551 147.928 11.4782ZM140.622 25.7005C143.134 24.9676 144.626 22.824 144.728 19.8005C144.83 16.7528 143.136 14.0975 140.608 13.3442C138.069 12.5874 135.453 13.6841 134.3 16.1324C133.173 18.5258 133.185 20.9822 134.594 23.2417C135.98 25.465 138.006 26.2383 140.622 25.7005Z" fill="#ED1E26"/>
          <path d="M52.1558 18.4978C52.1558 22.7138 52.1558 26.8067 52.1558 30.977C50.1132 30.977 48.1276 30.977 46.0276 30.977C46.0276 30.0234 46.0276 29.0681 46.0276 27.8279C44.5754 29.7049 43.0846 30.9797 41.0422 31.3822C36.6047 32.2569 32.8848 29.3818 32.6112 24.5064C32.3819 20.422 32.5019 16.3146 32.473 12.2173C32.4633 10.8291 32.4715 9.44067 32.4715 7.97754C34.4951 7.97754 36.4475 7.97754 38.5022 7.97754C38.5203 8.2841 38.5584 8.63193 38.5588 8.97981C38.5631 12.7506 38.555 16.5215 38.5677 20.2922C38.5699 20.9448 38.6117 21.6042 38.7071 22.248C39.0023 24.2401 40.1864 25.3624 42.0242 25.4433C44.03 25.5317 45.3933 24.5133 45.8095 22.5347C45.9589 21.8248 46.0158 21.0788 46.0192 20.3487C46.0385 16.2541 46.0285 12.1594 46.0285 7.98315C48.0553 7.98315 50.0415 7.98315 52.1558 7.98315C52.1558 11.4369 52.1558 14.9059 52.1558 18.4978Z" fill="black"/>
          <path fill="black" d="M69.1691 13.5374C67.6296 13.5386 66.1975 13.5386 64.6804 13.5386C64.6804 17.0515 64.6506 20.4779 64.6979 23.903C64.7129 24.987 65.3336 25.6953 66.3796 25.6251C67.4141 25.5557 68.4382 25.3073 69.5878 25.1174C69.5878 26.5617 69.616 28.1377 69.5599 29.7103C69.5506 29.9703 69.2177 30.317 68.958 30.4508C66.63 31.6509 64.2008 31.804 61.7718 30.9456C59.7373 30.2266 58.5708 27.9898 58.5492 24.9977C58.5221 21.2341 58.5427 17.4701 58.5427 13.6009C57.7343 13.6009 56.9615 13.6009 56.0996 13.6009C56.0996 11.685 56.0996 9.86981 56.0996 7.95901C56.8292 7.95901 57.6069 7.95901 58.5166 7.95901C58.5166 5.9355 58.5166 3.99857 58.5166 2.02637C60.6063 2.02637 62.5639 2.02637 64.6231 2.02637C64.6231 3.95983 64.6231 5.86512 64.6231 7.86977C66.3341 7.86977 67.9469 7.86977 69.6838 7.86977C69.6838 9.67332 69.6942 11.3788 69.6661 13.0835C69.6636 13.2369 69.4123 13.3854 69.1691 13.5374Z" fill="black"/>
          <path d="M163.543 8.92285C164.862 7.7132 166.332 7.36549 168 7.46747C168 9.75186 168 11.9863 168 14.2165C167.918 14.2559 167.855 14.3098 167.789 14.3139C163.528 14.5838 161.41 16.9132 161.249 21.5684C161.195 23.1242 161.229 24.6836 161.226 26.2414C161.223 27.7928 161.225 29.3442 161.225 30.9743C159.199 30.9743 157.243 30.9743 155.201 30.9743C155.201 23.3653 155.201 15.7241 155.201 7.99177C157.154 7.99177 159.135 7.99177 161.186 7.99177C161.186 9.31345 161.186 10.614 161.186 12.0394C162.006 10.945 162.743 9.96202 163.543 8.92285Z" fill="#ED1E26"/>
          <path d="M7.37459 29.4374C6.97376 31.1762 6.03788 31.7303 4.47038 31.5443C3.05409 31.3764 1.60726 31.5089 0 31.5089C0.517923 30.3572 0.946671 29.3218 1.43885 28.3229C4.45475 22.2018 8.23193 16.7871 13.8008 13.0929C18.547 9.94448 23.6965 8.66745 29.2454 9.40782C29.6409 9.46058 30.0249 9.61285 30.7047 9.79792C24.2429 9.86684 19.3737 12.9001 15.1682 17.4579C11.9537 20.9418 9.48604 24.9999 7.37459 29.4374Z" fill="#ED1E26"/>
          <path d="M21.8586 27.9059C21.4219 26.8105 21.254 25.3954 20.5425 24.9095C19.7754 24.3857 18.4995 24.7114 17.4452 24.7028C15.5219 24.6872 13.5983 24.6984 11.3291 24.6984C12.8558 22.687 14.1598 20.8977 15.5551 19.1958C15.8091 18.8859 16.4311 18.8887 16.8924 18.828C17.3374 18.7694 17.7942 18.8153 18.2273 18.8153C18.2627 18.6582 18.3196 18.5513 18.2917 18.5077C17.409 17.1281 18.0899 16.3252 19.1587 15.6097C20.2467 14.8814 21.3016 14.0953 22.4726 13.2622C24.8872 19.3923 27.2483 25.3868 29.6599 31.5092C27.5909 31.5092 25.6668 31.5354 23.7448 31.4788C23.4793 31.471 23.117 31.1102 22.984 30.8156C22.5709 29.9007 22.2467 28.939 21.8586 27.9059Z" fill="black"/>
          <path d="M6.40226 15.2674C8.17651 10.7498 9.93508 6.32705 11.6554 1.88696C11.895 1.26863 12.166 1.01176 12.811 1.03964C14.2106 1.10013 15.615 1.02769 17.0149 1.08298C17.3117 1.09471 17.7532 1.34476 17.8646 1.61278C18.788 3.8352 19.6495 6.08763 20.575 8.44666C14.0306 10.2133 8.98822 14.3166 4.66406 19.661C5.23419 18.2262 5.80432 16.7914 6.40226 15.2674Z" fill="black"/>
          </g>
          <defs>
          <clipPath id="clip0_327_264">
          <rect width="168" height="32" fill="black"/>
          </clipPath>
          </defs>
      </svg>
        {/* <Image alt="authcor" height={20} width={100} src="/assests/AuthCor_Logo.png" style={{width:"10rem",minWidth:"100px"}} /> */}
      </Link>
            {/* Mobile Nav icon */}
            <div className="flex md:hidden text-white">
                <button onClick={()=>{setisMobNavOpen(!isMobNavOpen)}}  type="button" className="focus:outline-none " aria-label="toggle menu">
                    
            
              {isMobNavOpen ? 
                    <svg  xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>  : <svg  xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                    </svg>
                    }     
                </button>
            </div>
      </div>
      {/* Mobile links */}
      <div  className={`${isMobNavOpen ? 'translate-x-0 opacity-100 bg-white rounded-lg' : 'opacity-0 -translate-x-full '} absolute inset-x-0 z-20 w-full grid px-6 py-4 transition-all duration-300 ease-in-out bg-black/[0.9] md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}>
            <div className="flex flex-col md:flex-row md:mx-6 align-items text-black">
                {/* <Link className={`mr-5 my-1 hover:text-red-300 ${pathname.split("/")[1] == "" ? "active_nav" : ""}  content-center transition-colors duration-300 transform md:mx-4 md:my-0`} href="/">Home</Link> */}
                <Link onClick={()=>{setisMobNavOpen(false)}} className={`mr-5 my-1 hover:text-red-300 ${pathname.split("/")[1] == "services" ? "active_nav" : ""} transition-colors duration-300 content-center  transform md:mx-4 md:my-0`} href="/services">Services</Link>
                <Link onClick={()=>{setisMobNavOpen(false)}} className={`mr-5 my-1 hover:text-red-300 ${pathname.split("/")[1] == "about" ? "active_nav" : ""} transition-colors duration-300 content-center  transform md:mx-4 md:my-0`} href="/about">About</Link>
                <Link onClick={()=>{setisMobNavOpen(false)}} className={`mr-5 my-1 hover:text-red-300 ${pathname.split("/")[1] == "insights" ? "active_nav" : ""} transition-colors duration-300 content-center  transform md:mx-4 md:my-0`} href="/insights">Blogs</Link>
                <Link onClick={()=>{setisMobNavOpen(false)}} className={`mr-5 my-1 hover:text-red-300 ${pathname.split("/")[1] == "careers" ? "active_nav" : ""} transition-colors duration-300 content-center  transform md:mx-4 md:my-0`} href="/careers">Careers</Link>
                <Link onClick={()=>{setisMobNavOpen(false)}} className={`mr-5 my-1 hover:text-red-300 ${pathname.split("/")[1] == "global_coverage" ? "active_nav" : ""} transition-colors duration-300 content-center  transform md:mx-4 md:my-0`} href="/global_coverage">Global Coverage</Link>
                {/* <p onClick={()=>{setcontactUsdisplay(true)}} className="mr-5 my-1 hover:text-red-300 transition-colors duration-300 content-center  transform md:mx-4 md:my-0 pointer">Contact</p> */}
                {/* <Link className={`mr-5 my-1 hover:text-red-300 ${pathname.split("/")[0] == "/contact" ? "active_nav" : ""} transition-colors duration-300 content-center  transform md:mx-4 md:my-0`} href="contact">Contact</Link> */}
                {/* <button onClick={()=>{setquotedisplay(true)}}  className="inline-flex items-center lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-red-500 rounded-2xl border-0 py-2 px-8 mx-8 font-medium focus:outline-none hover:bg-indigo-600 rounded ">
                  Get a quote
                </button> */}
            </div>
                <div className="grid sm:hidden gap-4 mt-6 " >

      <Link onClick={()=>{setisMobNavOpen(false)}} href={"/contact/quote"} className=" text-center px-6 py-2 bg-black text-white border border-white  rounded-lg  shadow hover:bg-transparent hover:text-black hover:border-black transition">
      <span className="relative z-10">Get a quote</span>
    </Link>
      <Link onClick={()=>{setisMobNavOpen(false)}} href={"/contact/general"}className=" text-center px-6 py-2 border border-black text-black  rounded-lg   hover:text-white hover:bg-black transition">
      <span className="relative z-10">Contact Us</span>
    </Link>
                    </div>
      </div>

                    <div className="hidden md:flex gap-4 " >

      <Link href={"/contact/quote"} className="px-6 py-2 bg-black text-white border border-white  rounded-lg  shadow hover:bg-transparent hover:text-black hover:border-black transition">
      <span className="relative z-10">Get a quote</span>
    </Link>
      <Link href={"/contact/general"}className="px-6 py-2 border border-black text-black  rounded-lg   hover:text-white hover:bg-black transition">
      <span className="relative z-10">Contact Us</span>
    </Link>
                    </div>


      

        



      


      
    </div>
  </header>
  <Modal open={quotedisplay} onClose={()=>{setquotedisplay(false)}} >

  <Connect  />
  </Modal>

  <Modal open={contactUsdisplay} onClose={()=>{setcontactUsdisplay(false)}} >

  <ContactUs  />
  </Modal>
  </>

}

export default Navbar;

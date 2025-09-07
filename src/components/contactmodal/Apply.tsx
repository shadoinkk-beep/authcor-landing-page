"use client";
import { ChangeEventHandler, FC, FormEventHandler, useEffect, useState } from "react";
import emailjs from '@emailjs/browser'
import Select from 'react-select'
import { SuccessModal } from "./SuccesModal";




const Apply:FC = ( ) =>{
    const [inputs, setInputs] = useState({});
    const [succesModal, setsuccesModal] = useState(false)
    const [submitButtonText, setsubmitButtonText] = useState("Submit")

    const [isRendered, setisRendered] = useState(false)

    // useEffect(() => {
    //   console.log(inputs)
    // }, [inputs])


    

    
    const handleSubmit:FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        setsubmitButtonText("Submiting....")
        // setsuccesModal(true)
        // console.log(inputs)
        sendEmail(inputs)
        
      }


      function countryOnChange(val:any){
        setInputs(values => ({...values, Position: val.value}))
      }

  const handleChange:ChangeEventHandler<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    
  }


  const options = [
    { value: 'Technical Project Manager', label: 'Technical Project Manager' },
    { value: 'Field Service Engineer', label: 'Field Service Engineer' },
    { value: 'Associative Field Service Engineer', label: 'Associative Field Service Engineer' },
  ]
  

    const sendEmail = (data:any) => {
    
        emailjs
          .send('service_zl8kxy5', 'template_6si08gr', data, {
            publicKey: 'T1KXfuW6EoAG6XEsJ',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              setsuccesModal(true)
            },
            (error) => {
              console.log('FAILED...', error);
            },
          );
      };

    
      useEffect(() => {
        setisRendered(true)
      }, [])

    return<>
    {succesModal ? <SuccessModal/> : 
     <section className="bg-white">
    <div className="container flex items-center justify-center px-4 mx-auto">
        <form className="w-full md:min-w-[400px] md:w-[35vw] max-w-[600px]" onSubmit={handleSubmit}>
            <div className="flex justify-center mx-auto font-bold text-black">
                APPLY NOW
            </div>


            <div className="relative flex items-center mt-8">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </span>

                <input type="text" name="fullName" required onChange={handleChange} className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Full Name"/>
            </div>



            <div className="relative flex items-center mt-4">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </span>

                <input type="email" name="Email" required onChange={handleChange} className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address"/>
            </div>



            <div className="relative flex items-center mt-4">
                <span className="absolute">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                        stroke="currentColor" className="w-6 h-6 text-gray-300 mx-3">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>  
                </span>

                <input type="number" name="phoneNumber" required onChange={handleChange} className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Phone Number"/>
            </div>

            <div className="relative flex items-center mt-4">
  <label htmlFor="countries" className="block text-sm text-gray-500 dark:text-gray-300">Apply For</label>
  {
        isRendered ? 
        <Select name="yourCountry" id="yourCountry" onChange={countryOnChange} required className="w-full" options={options} />
        :<></>
      }
            </div>

            

        <br/>
            <div>
    <label htmlFor="CVLINK" className="block text-sm text-gray-500 dark:text-gray-300">Link to CV/Resume</label>

    <input type={"url"} placeholder=""  name="CVLINK" required onChange={handleChange} className="block  mt-2 w-full  placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"></input>
</div>

            <div className="mt-4">
                <button className="w-full px-6 py-2 border-red-500 border-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-white hover:text-black focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    {submitButtonText}
                </button>


            </div>
        </form>
    </div>
</section>}
</>
}


export default Apply;
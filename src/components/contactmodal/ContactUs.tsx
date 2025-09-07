"use client";
import { ChangeEventHandler, FC, FormEventHandler, useEffect, useState } from "react";
import emailjs from '@emailjs/browser'
import Select from 'react-select'
import { SuccessModal } from "./SuccesModal";


const ContactUs:FC = ( ) =>{
    
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

        sendEmail(inputs)
        
      }


      function countryOnChange(val:any){
        setInputs(values => ({...values, yourCountry: val.value}))
      }

  const handleChange:ChangeEventHandler<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    
  }


  const options = [
    { value: 'Singapore', label: 'Singapore' },
    { value: 'Malaysia', label: 'Malaysia' },
    { value: 'Indonesia', label: 'Indonesia' },
    { value: 'Thailand', label: 'Thailand' },
    { value: 'Vietnam', label: 'Vietnam' },
    { value: 'Philippines', label: 'Philippines' },
    { value: 'Hong', label: 'Hong' },
    { value: 'Kong', label: 'Kong' },
    { value: 'China', label: 'China' },
    { value: 'Cambodia', label: 'Cambodia' },
    { value: 'UAE', label: 'UAE' },
    { value: 'Saudi Arabia', label: 'Saudi Arabia' },
    { value: 'Bahrain', label: 'Bahrain' },
    { value: 'Oman', label: 'Oman' },
    { value: 'Kuwait', label: 'Kuwait' },
    { value: 'India', label: 'India' },
    { value: 'Australia', label: 'Australia' },
    { value: 'Germany', label: 'Germany' },
    { value: 'Netherlands', label: 'Netherlands' },
    { value: 'South', label: 'South' },
    { value: 'Africa', label: 'Africa' },
    { value: 'Belgium', label: 'Belgium' },
    { value: 'Sweden', label: 'Sweden' },
    { value: 'South', label: 'South' },
    { value: 'Korea', label: 'Korea' },
    { value: 'Brazil', label: 'Brazil' },
    { value: 'Mexico', label: 'Mexico' },
    { value: 'Chile', label: 'Chile' },
    { value: 'Colombia', label: 'Colombia' },
    { value: 'France', label: 'France' },
    { value: 'Turkey', label: 'Turkey' },
    { value: 'Poland', label: 'Poland' },
    { value: 'Russia', label: 'Russia' },
    { value: 'Japan', label: 'Japan' },
  ]
  

    const sendEmail = (data:any) => {
    
        emailjs
          .send('service_zl8kxy5', 'template_on6kffq', data, {
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
      

    return <>
    {succesModal ? <SuccessModal/> : 
        <section className="bg-white">
        <div className="container flex items-center justify-center px-4 mx-auto">
            <form className="w-full md:min-w-[400px] md:w-[35vw] max-w-[600px]" onSubmit={handleSubmit}>
                <div className="flex justify-center mx-auto font-bold text-black">
                    CONTACT US
                </div>
    
    
                <div className="relative flex items-center mt-8">
                    <span className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </span>
    
                    <input type="text" onChange={handleChange} required name="fullName" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Full Name"/>
                </div>
    
    
    
                <div className="relative flex items-center mt-4">
                    <span className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </span>
    
                    <input required type="email" onChange={handleChange} name="Email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address"/>
                </div>
    
                <div className="relative flex items-center mt-4">
                    <span className="absolute">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg> */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>   
                    </span>
    
                    <input onChange={handleChange}  required type="text" name="companyName" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Company Name"/>
                </div>
    
                <div className="relative flex items-center mt-4">
                    <span className="absolute">
    
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                            stroke="currentColor" className="w-6 h-6 text-gray-300 mx-3">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>  
                    </span>
    
                    <input onChange={handleChange} type="number" required id="phoneNumber" name="phoneNumber" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Phone Number"/>
                </div>
    
                <div className="relative flex items-center mt-4">
      <label htmlFor="yourCountry" className="block text-sm text-gray-500 dark:text-gray-300">Your Country</label>
      {
        isRendered ? 
        <Select name="yourCountry" id="yourCountry" onChange={countryOnChange} required className="w-full" options={options} />
        :<></>
      }
      {/* <select onChange={handleChange} id="yourCountry" name="yourCountry" required  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option  >Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select> */}
                </div>
    
                
    
            <br/>
                <div>
        <label htmlFor="TellUsMore"  className="block text-sm text-gray-500 dark:text-gray-300">Tell us more</label>
    
        <textarea required onChange={handleChange} id="TellUsMore" name="TellUsMore" placeholder="Tell us more..." className="block  mt-2 w-full  placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"></textarea>
    </div>
    
                <div className="mt-4">
                {/* onClick={sendEmail} */}
                    <button type="submit"    className="w-full px-6 py-2 border-red-500 border-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-white hover:text-black focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        {submitButtonText}
                    </button>
    
    
                </div>
            </form>
        </div>
    </section>
     }

    

</>
}


export default ContactUs;
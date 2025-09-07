import { FC } from "react";

const ServiceSect:FC = () =>{

    return(<div className="mx-6 md:mx-20">
<h1 className="my-8 sm:text-3xl text-2xl font-medium title-font mb-2 text-red-700">
Your Trusted Data Center

    </h1>

    <h4 className="sm:text-7xl text-2xl font-medium title-font mb-2 text-gray-900">
        Services
    </h4>

    <h2 className="text-black/[0.7] lg:w-2/3 text-xl leading-relaxed text-base py-4">
        AuthCor provides expert solutions for every aspect of your
        data center. From remote hands & eye support to complex
        deployments, we've got you covered.
    </h2>

    <div className="grid grid-cols-1 grid-rows-5 gap-4 lg:grid-cols-2 lg:grid-rows-3 ">
    <div className="p min-h-64 grid content-end p-4 shadow-[inset_0px_0px_6px_16px_#00000024] bg-blend-multiply"   >
    {/* style={{backgroundImage:`url(assests/Services/8Service.jpg)`}} */}
      <h2 className="sm:text-3xl text-2xl font-medium font-semibold title-font text-white-900 mb-4">Network Migrations</h2>
      <p className="leading-relaxed text-base">Our Network Migrations service guarantees a smooth and efficient migration process, minimizing downtime and ensuring a stable transition to your new network environment.</p>
      <p className="text-red-600 font-medium"> Learn More <span className="text-xl font-bold"> ↗ </span>  </p>
    </div>

    <div className="p min-h-64 row-span-2 grid content-end p-4 shadow-[inset_0px_0px_6px_16px_#00000024] bg-blend-multiply" style={{backgroundImage:`url("assests/Services/8Service.jpg")`}} >
      <h2 className="sm:text-3xl text-2xl font-medium font-semibold title-font text-white-900 mb-4">Network Migrations</h2>
      <p className="leading-relaxed text-base">Our Network Migrations service guarantees a smooth and efficient migration process, minimizing downtime and ensuring a stable transition to your new network environment.</p>
      <p className="text-red-600 font-medium"> Learn More <span className="text-xl font-bold"> ↗ </span>  </p>
    </div>

    <div className="p min-h-64 grid content-end p-4 shadow-[inset_0px_0px_6px_16px_#00000024] bg-blend-multiply" style={{backgroundImage:`url("assests/Services/8Service.jpg")`}} >
      <h2 className="sm:text-3xl text-2xl font-medium font-semibold title-font text-white-900 mb-4">Network Migrations</h2>
      <p className="leading-relaxed text-base">Our Network Migrations service guarantees a smooth and efficient migration process, minimizing downtime and ensuring a stable transition to your new network environment.</p>
      <p className="text-red-600 font-medium"> Learn More <span className="text-xl font-bold"> ↗ </span>  </p>
    </div>

    <div className="p min-h-64 grid content-end p-4 shadow-[inset_0px_0px_6px_16px_#00000024] bg-blend-multiply" style={{backgroundImage:`url("assests/Services/8Service.jpg")`}} >
      <h2 className="sm:text-3xl text-2xl font-medium font-semibold title-font text-white-900 mb-4">Network Migrations</h2>
      <p className="leading-relaxed text-base">Our Network Migrations service guarantees a smooth and efficient migration process, minimizing downtime and ensuring a stable transition to your new network environment.</p>
      <p className="text-red-600 font-medium"> Learn More <span className="text-xl font-bold"> ↗ </span>  </p>
    </div>

    <div className="p min-h-64 grid content-end p-4 shadow-[inset_0px_0px_6px_16px_#00000024] bg-blend-multiply" style={{backgroundImage:`url("assests/Services/8Service.jpg")`}} >
      <h2 className="sm:text-3xl text-2xl font-medium font-semibold title-font text-white-900 mb-4">Network Migrations</h2>
      <p className="leading-relaxed text-base">Our Network Migrations service guarantees a smooth and efficient migration process, minimizing downtime and ensuring a stable transition to your new network environment.</p>
      <p className="text-red-600 font-medium"> Learn More <span className="text-xl font-bold"> ↗ </span>  </p>
    </div>
</div>

    </div>)

}

export default ServiceSect;
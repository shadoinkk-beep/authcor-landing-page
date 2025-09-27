import { FC } from "react";

const Industries:FC = () =>{

    return(<><div className="p-6 max-w-7xl">

    <h2 className="text-4xl font-medium text-gray-700 text-center mt-6 ">
    Industries We Work For
    </h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 max-w-7xl">
  {/* <!-- Button 1 --> */}
  <div className="flex justify-between items-center rounded-2xl bg-gray-100 p-6 shadow-[5px_5px_0px_0px_rgba(131,24,67)]">
    <div>
      <span className="bg-red-600 text-white font-bold px-2 py-1 rounded">IT &</span>
      <span className="bg-red-600 text-white font-bold px-2 py-1 rounded">Telecom</span>
    </div>
    <div className="flex items-center space-x-2 text-gray-800">
      <span className="text-2xl">↗</span>
      <span>Explore Now</span>
    </div>
  </div>

  {/* <!-- Button 2 --> */}
  <div className="flex justify-between items-center rounded-2xl bg-red-600 p-8 shadow-[5px_5px_0px_0px_rgba(131,24,67)]">
    <div>
      <span className="bg-white text-black font-bold px-2 py-1 rounded">Content Delivery</span>
      <span className="bg-white text-black font-bold px-2 py-1 rounded">Network</span>
    </div>
    <div className="flex items-center space-x-2 text-white">
      <span className="text-2xl">↗</span>
      <span>Explore Now</span>
    </div>
  </div>

  {/* <!-- Button 3 --> */}
  <div className="flex justify-between items-center rounded-2xl bg-gray-900 p-8 shadow-[5px_5px_0px_0px_rgba(131,24,67)]">
    <div>
      <span className="bg-white text-black font-bold px-2 py-1 rounded">Cloud Based </span>
      <span className="bg-white text-black font-bold px-2 py-1 rounded">Services</span>
    </div>
    <div className="flex items-center space-x-2 text-white">
      <span className="text-2xl">↗</span>
      <span>Explore Now</span>
    </div>
  </div>

  {/* <!-- Button 4 --> */}
  <div className="flex justify-between items-center rounded-2xl bg-gray-100 p-8 shadow-[5px_5px_0px_0px_rgba(131,24,67)]">
    <div>
      <span className="bg-red-600 text-white font-bold px-2 py-1 rounded">Big</span>
      <span className="bg-red-600 text-white font-bold px-2 py-1 rounded">Data</span>
    </div>
    <div className="flex items-center space-x-2 text-gray-800">
      <span className="text-2xl">↗</span>
      <span>Explore Now</span>
    </div>
  </div>

  {/* <!-- Button 5 --> */}
  <div className="flex justify-between items-center rounded-2xl bg-red-600 p-8 shadow-[5px_5px_0px_0px_rgba(131,24,67)]">
    <div>
      <span className="bg-white text-black font-bold px-2 py-1 rounded">Media</span>
      <span className="bg-white text-black font-bold px-2 py-1 rounded"> & Creation</span>
    </div>
    <div className="flex items-center space-x-2 text-white">
      <span className="text-2xl">↗</span>
      <span>Explore Now</span>
    </div>
  </div>

  {/* <!-- Button 6 --> */}
  <div className="flex justify-between items-center rounded-2xl bg-gray-900 p-8 shadow-[5px_5px_0px_0px_rgba(131,24,67)]">
    <div>
      <span className="bg-red-600 text-white font-bold px-2 py-1 rounded">Mobile and</span>
      <span className="bg-red-600 text-white font-bold px-2 py-1 rounded">Communication</span>
    </div>
    <div className="flex items-center space-x-2 text-white">
      <span className="text-2xl">↗</span>
      <span>Explore Now</span>
    </div>
  </div>
</div>

    </>)

}

export default Industries;
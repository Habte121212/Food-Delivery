import React from 'react'
import Image from 'next/image'
import CountDown from './CountDown'

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh] ">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">
          Delicious Burger & French Fry
        </h1>
        <p className="text-white text-lg">
          Progressively simplify effective e-toliers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <CountDown />
        <button className="mt-4 bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition-all duration-300">
          Order Now!
        </button>
      </div>

      {/* IMAGE CONTAINER */}
      <div className="flex-1 w-full relative md:h-full">
        <Image
          src="/OfferProduct.png"
          alt="Special Offer Product"
          fill
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default Offer

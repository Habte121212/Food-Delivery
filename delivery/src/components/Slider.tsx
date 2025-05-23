'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const data = [
  {
    id: 1,
    title: 'always fresh always crispy & always hot',
    image: '/slide1.png',
  },
  {
    id: 2,
    title: 'we deliver your order wherever you are in NY',
    image: '/slide2.png',
  },
  {
    id: 3,
    title: 'the best pizza to share with your family',
    image: '/slide3.jpg',
  },
]

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev ===data.length -1 ? 0 : prev + 1))
  //   }, 2000) // change slide every 3 seconds

  //   return () => clearInterval(interval)
  // }, [])

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:p-10 md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col justify-center items-center gap-8 text-red-500 font-bold lg:h-full lg:w-1/2">
        <h1 className="text-3xl md:text-5xl text-center uppercase p-4">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8 text-lg md:text-2xl rounded hover:bg-red-600 transition">
          Order now
        </button>
      </div>

      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative lg:h-full lg:w-1/2">
        <Image
          src={data[currentSlide].image}
          alt="Slide Image"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  )
}

export default Slider

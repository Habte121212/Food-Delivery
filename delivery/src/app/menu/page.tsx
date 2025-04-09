import { menu } from '@/data'
import Link from 'next/link'
import React from 'react'

const MenuPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-9rem)] flex flex-col md:flex-row flex-wrap items-center justify-center gap-6">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={`${category.id}-${category.slug}`}
          className="w-full md:w-[48%] h-64 md:h-full lg:h-1/2 bg-cover bg-center rounded-xl shadow-md hover:shadow-xl transition duration-300"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          {/* Text container */}
          <div
            className={`h-full flex flex-col justify-center items-start p-6 rounded-xl`}
          >
            {/* Dynamically set text color using category.color */}
            <div className={`text-${category.color} w-1/2`}>
              <h1 className="uppercase font-bold text-3xl mb-2">
                {category.title}
              </h1>
              <p className="text-sm md:text-base mb-4 leading-relaxed break-words">
                {category.desc}
              </p>
              {/* Show Explore button only on medium and up */}
              <button className="hidden md:inline-block bg-white text-red-500 py-2 px-4 rounded shadow hover:opacity-90">
                Explore
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default MenuPage

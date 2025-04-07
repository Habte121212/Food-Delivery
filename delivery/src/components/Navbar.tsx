import React from 'react'
import Menu from './Menu'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='h-12 flex text-red-500 items-center p-4 justify-between  border-b-2 border-b-red-500 uppercase'>
      {/* logo */}
      <div className= ' text-xl'>
        <Link href="/">Massimo</Link>
      </div>
      {/* mobile menu */}
      <div>
        <Menu />
      </div>
    </div>
  )
}

export default Navbar

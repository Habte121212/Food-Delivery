import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon'
import Image from 'next/image'

const Navbar = () => {
  const user = false
  return (
    <div className="h-12 flex text-red-500 items-center p-4 justify-between  border-b-2 border-b-red-500 uppercase md:24 lg:px-20 xl:px-40">
                 {/* lift link */}
      <div className="hidden md:flex gap-4">
        <Link href="/">HomePage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* logo */}
      <div className=" text-xl font-bold flex-1 text-center">
        <Link href="/">Massimo</Link>
      </div>
      {/* mobile menu */}
      <div className="md:hidden">
        <Menu />
      </div>
             {/* right link */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className='md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
          <Image src="/phone.png" alt="" width={20} height={20}/>
          <span>+251 945 87 07 00 </span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ):(
        <Link href="/order">Oeders</Link>)}
         <CartIcon/>
      </div>
    </div>
  )
}

export default Navbar

import Image from 'next/image'
import React from 'react'

const CartPage = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      {/* PRODUCT CONTAINER */}
      <div className="flex-1 p-4 flex flex-col overflow-auto lg:px-20 xl:px-40 bg-white">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="flex items-center justify-between mb-4">
            <Image src="/temporary/p1.png" alt="" width={100} height={100} />
            <div>
              <h1 className="uppercase text-xl font-bold">sicilian</h1>
              <span>Large</span>
            </div>
            <h2 className="font-bold">$79.90</h2>
            <span className="cursor-pointer">x</span>
          </div>
        ))}
      </div>

      {/* PAYMENT CONTAINER */}
      <div className="flex-1 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span>Subtotal (3 items)</span>
          <span>$91.70</span>
        </div>
        <div className="flex justify-between">
          <span>Service Cost</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between font-bold">
          <span>TOTAL (INCL. VAT)</span>
          <span>$91.70</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          CHECKOUT
        </button>
      </div>
    </div>
  )
}

export default CartPage

'use client'
import React from 'react'

import Orderform from '../forms/Orderform'
import { useCart } from '../context/Context'

const SalesCart = () => {
const { cartItems, fetchCart } = useCart()
  return (
    <div className='w-2/5 border-l-2 border-black/10 p-4 flex flex-col items-center gap-6'>
      <h1 className='text-xl font-semibold'>Order details</h1>
      <Orderform cartItems={cartItems} fetchCart={fetchCart} />
    </div>
  )
}

export default SalesCart

'use client'
import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { CiShoppingCart } from "react-icons/ci";

const UserAddtoCart = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const [formData, setFormData] = useState({
    title: product.title,
    productId: product._id,
    quantity: quantity
  })

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
    else {
      setQuantity(1)
    }
  }
  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  return (
    <div className='w-full flex flex-col items-center justify-center gap-2'>
      <div className='w-full flex flex-row items-center justify-between'>
        <div className='w-full'>
          <p>Price: <span className='text-[8px] italic'>BDT</span> <span className='text-xl font-semibold'>{product.price}</span></p>
        </div>
        <div className='w-full flex flex-row items-center justify-between'>
          <button className='text-xl font-semibold hover:bg-black/10 p-2 rounded-full cursor-pointer' onClick={decreaseQuantity}><IoIosArrowBack /></button>
          <p>{quantity}</p>
          <button className='text-xl font-semibold hover:bg-black/10 p-2 rounded-full cursor-pointer' onClick={increaseQuantity}><IoIosArrowForward /></button>
        </div>

      </div>
      <button className='w-full flex flex-row items-center justify-center gap-2 bg-black/50 hover:bg-black/70 text-white rounded-lg cursor-pointer'>Cart <CiShoppingCart className='text-xl'/></button>
    </div>
  )
}

export default UserAddtoCart

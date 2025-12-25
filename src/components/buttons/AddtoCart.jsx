'use client'
import React from 'react'
import { CiShoppingCart } from "react-icons/ci";

const AddtoCart = () => {
  return (
    <button className='w-full flex flex-row items-center justify-center gap-2 hover:bg-black/60 bg-black/50 text-white rounded-lg cursor-pointer'>Cart <CiShoppingCart className='text-xl'/></button>
  )
}

export default AddtoCart

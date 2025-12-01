'use client'
import React from 'react'

const AddToCart = (props) => {
  const {quantity}= props

  const addToCart=()=>{
    alert(quantity)
  }
  return (
    <button onClick={addToCart} className='px-2 p-2 bg-emerald-500 text-white rounded-lg hover:opacity-80 text-xs cursor-pointer'>Add to cart</button>
  )
}

export default AddToCart

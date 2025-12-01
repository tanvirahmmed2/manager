'use client'
import axios from 'axios'
import React from 'react'

const AddToCart = (props) => {
  const {quantity, productId}= props

  const addToCart=async()=>{
    const data= {quantity, productId}
    try {
      const response= await axios.post('/api/user/addtocart', data, {withCredentials: true})
      alert(response.data.message)
    } catch (error) {
      console.log(error)
      alert(error?.response?.data?.message)
      
    }
  }
  return (
    <button onClick={addToCart} className='px-2 p-2 bg-emerald-500 text-white rounded-lg hover:opacity-80 text-xs cursor-pointer w-full'>Add to cart</button>
  )
}

export default AddToCart

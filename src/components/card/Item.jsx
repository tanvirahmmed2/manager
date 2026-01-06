'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Item = ({item}) => {
  return (
    <motion.div initial={{opacity:0, scale:0.8}} whileInView={{opacity:1, scale:1}} transition={{duration:0.5}} className='w-full shadow-sm flex flex-col items-center justify-between h-full gap-1 bg-white/10 p-1 rounded-lg'>
      <Image src={item?.image} alt={item?.title} width={1000} height={1000} className='w-full shadow-sm h-50 object-cover overflow-hidden rounded-lg hover:scale-[1.01] hover:cursor-grab transform ease-in-out duration-500'/>
      <h1 className='w-full text-center'>{item?.title}</h1>
      {
        item?.discount !==0 && item?.discount !==null? <div>
          <p className='line-through text-sm'>৳{item?.price}</p>
          <p className='font-semibold text-red-400'>৳{item?.price-item?.discount}</p>
        </div>:<p className='font-semibold text-red-400'>৳{item?.price}</p>
      }
    </motion.div>
  )
}

export default Item

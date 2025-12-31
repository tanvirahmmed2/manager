import Link from 'next/link'
import React from 'react'

const Intro = () => {
  return (
    <div className='w-full h-200 p-4 flex flex-col items-center justify-center gap-2'>
        <h1 className='text-8xl font-serif text-center'>Grand Kitchen</h1>
        <p className='text-4xl'>Experience Authentic Meals</p>
        <Link href={'/menu'} className='p-2 px-6 bg-black/20 text-white  rounded-lg text-xl font-semibold'>Menu</Link>
      
    </div>
  )
}

export default Intro

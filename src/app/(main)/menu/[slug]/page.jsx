import UserAddtoCart from '@/components/forms/UserAddtoCart'
import { BASE_URL } from '@/lib/database/secret'
import Image from 'next/image'
import React from 'react'

const SingleProduct = async ({ params }) => {
  const { slug } = await params

  const res = await fetch(`${BASE_URL}/api/product/${slug}`, { method: "GET", cache: 'no-store' })
  const data = await res.json()
  const product = data.payload
  if(!product) return <p>No data found</p>
  return (
    <div className='w-full min-h-screen flex items-center justify-center p-4'>
     <div className='w-full md:w-3/4 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4 shadow-sm rounded-lg overflow-hidden p-1'>
       <div className='flex-1'>
        <div className='p-2 border border-black/10 rounded-lg overflow-hidden shadow-sm'>
          <Image src={product.image} alt={product.title} width={1000} height={1000} />
        </div>
      </div>
      <div className='flex-1 flex flex-col gap-4'>
        <h1 className='text-2xl font-semibold'>{product.title}</h1>
        <p>{product.description}</p>
        <UserAddtoCart product={product}/>
      </div>
     </div>
    </div>
  )
}

export default SingleProduct

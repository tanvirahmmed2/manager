'use client'
import axios from 'axios'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Product = () => {
  const { slug } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/products/${slug}`, {
          withCredentials: true
        })
        setData(response.data.payload)
      } catch (error) {
        console.log(error)
      }
    }

    if (slug) fetchData()
  }, [slug])

  return (
    <div className='w-full min-h-screen flex flex-col items-center px-2 py-6 gap-4'>

      <h1>Product Overview</h1>

      {data ? (
        <div className='flex flex-col items-center gap-4 w-1/2'>
          <h1 className='text-2xl font-semibold text-center'>{data.title}</h1>
          <Image src={data.image} alt={data.title} width={1000} height={1000} className='w-full h-[400px]  border-2 border-black/10 object-cover'/>

        </div>
      ) : (
        <p>Data not found</p>
      )}
    </div>
  )
}

export default Product

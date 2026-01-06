'use client'
import DeleteProduct from '@/components/buttons/DeleteProduct'
import MakeFeatured from '@/components/buttons/MakeFeatured'
import UpdateProduct from '@/components/buttons/UpdateProduct'
import AddProduct from '@/components/forms/AddProduct'
import { BASE_URL } from '@/lib/database/secret'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Products = () => {
  const [searchData, setSearchData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      if (!searchTerm) {
        setSearchData([])
        return
      }
      try {
        const response = await axios.get(`/api/product/search?q=${searchTerm}`, { withCredentials: true })
        setSearchData(response.data.payload)
      } catch (error) {
        console.log(error)
        setSearchData([])
      }
    }
    fetchData()
  }, [searchTerm])

  return (
    <div className='w-full p-4 flex flex-col items-center gap-6'>
      <div className="w-full flex flex-col items-center justify-center gap-4">

        <div className="w-full flex flex-row items-center justify-between gap-4 border-b-2 p-4">
          <p>Find Product</p>
          <input type="text" className="w-auto border px-3 p-1 rounded-lg outline-none" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} placeholder="search" />
        </div>

        {
          !searchData || searchData.length < 1 ? <p>Please search product</p> : <div className="w-full flex flex-col gap-2 items-center justify-center">
            {
              searchData?.map((product) => (
                <div key={product._id} className={`w-full flex flex-row px-2 items-center justify-between ${product.isAvailable ? 'bg-transparent' : 'bg-red-100'}`}>
                  <Link className='flex-4' href={`/products/${product?.slug}`}>{product?.title}</Link>
                  <p className='flex-1'>{product.price}</p>
                  {product.isAvailable ? <p className='flex-1'>{product?.quantity}</p> : <p className='flex-1'>Unavailable</p>}

                  <div className=' flex-1 flex flex-row gap-4 items-center justify-center'>
                    <MakeFeatured id={product._id} status={product.isFeatured} />
                    <UpdateProduct slug={product.slug} />
                    <DeleteProduct id={product._id} />
                  </div>

                </div>
              ))
            }
          </div>
        }
      </div>
    </div>
  )
}

export default Products

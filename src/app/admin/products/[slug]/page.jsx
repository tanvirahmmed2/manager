'use client'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = () => {
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

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setData({ ...data, image: files[0] });
    } else {
      setData({ ...data, [name]: value });
    }
  }

  const handleUpdateProduct=async(e)=>{
    e.preventDefault();

        try {
            
            

            const response = await axios.patch('/api/products',data, {withCredentials: true});

            alert(response.data.message);
            setData(response.data.payload)

        } catch (error) {
            console.log(error);
            alert(error?.response?.data?.error)
        }
  }

  if (data === null) {
    return <div className='w-full min-h-[90vh] flex items-center justify-center'> <p>No data found</p></div>
  }

  return (
    <div className='w-full flex flex-col p-4 py-6 items-center'>
      <h1>Update Product Info</h1>
       <form onSubmit={handleUpdateProduct} className='w-full lg:w-1/2 flex flex-col items-center justify-center gap-4'>
            <div className='w-full flex flex-col gap-2'>
                <label htmlFor="title">Title</label>
                <input type="text" id='title' name='title' required onChange={handleChange} value={data.title} className='px-2 p-1 border-2 rounded-lg outline-none border-black/15' />
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label htmlFor="category">Category</label>
                <select name="category" id="category" required value={data.category} onChange={handleChange} className='px-2 p-1 border-2 rounded-lg outline-none border-black/15' >
                    <option value="">--select an option--</option>
                    <option value="rice&grains">Rice & Grains</option>
                    <option value="frozenfood">Frozen Food</option>
                    <option value="oil&ghee">Oil & Ghee</option>
                    <option value="masala">Masala</option>
                    <option value="snacks">Snacks</option>
                    <option value="healthcare">Health Care</option>
                    <option value="cleaning&household">Cleaning and Household</option>
                </select>
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label htmlFor="unit">Unit</label>
                <input type="text" name="unit" id="unit" required value={data.unit} onChange={handleChange} placeholder='write the weight or other measures respect to price' className='px-2 p-1 border-2 rounded-lg outline-none border-black/15' />
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label htmlFor="description">Description</label>
                <textarea type="text" id='description' name='description' required value={data.description} onChange={handleChange} className='px-2 p-1 border-2 rounded-lg outline-none border-black/15' />
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label htmlFor="oldPrice">Price</label>
                <input type="number" id='oldPrice' name='oldPrice' required value={data.oldPrice} onChange={handleChange} className='px-2 p-1 border-2 rounded-lg outline-none border-black/15' />
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label htmlFor="discount">Discount</label>
                <input type="number" id='discount' name='discount' min={0} required value={data.discount} onChange={handleChange} className='px-2 p-1 border-2 rounded-lg outline-none border-black/15' />
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label htmlFor="quantity">Quantity</label>
                <input type="number" id='quantity' name='quantity' min={1} required value={data.quantity} onChange={handleChange} className='px-2 p-1 border-2 rounded-lg outline-none border-black/15' />
            </div>
            <button type='submit' className='p-1 bg-black text-white rounded-3xl w-full cursor-pointer'>Update</button>
        </form>
    </div>
  )
}

export default Page

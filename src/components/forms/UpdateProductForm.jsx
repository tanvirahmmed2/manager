'use client'
import React, { useState } from 'react'
import { MdOutlineEventAvailable } from "react-icons/md";
import { CgUnavailable } from "react-icons/cg";
import axios from 'axios';

const UpdateProductForm = ({ product }) => {
    const [formData, setFormData] = useState({
        title: product.title,
        description: product.description,
        price: product.price,
        discount: product.discount || '',
        slug: product.slug,
        id: product._id
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const updateData = async (e) => {
        e.preventDefault()
        try {

        } catch (error) {
            console.log(error)
            alert(error?.response?.data?.error)
        }
    }

    const changeStatus=async () => {
        try {
            const response= await axios.post('/api/product/status', {id:formData.id}, {withCredentials:true})
            alert(response.data.message)
            
        } catch (error) {
            console.log(error)
            alert(error?.response?.data?.message)
            
        }
        
    }
    return (
        <div className='w-full flex flex-col items-center gap-4'>
            <form onSubmit={updateData} className='w-full flex flex-col items-center gap-2'>
                <div className='w-full flex flex-col'>
                    <label htmlFor="">Title</label>
                    <input type="text" name='title' id='title' required value={formData.title} onChange={handleChange} className='w-full p-1 px-3 rounded-lg border-2 border-black/10 outline-none' />
                </div>
                <div className='w-full flex flex-col'>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" value={formData.description} required onChange={handleChange} className='w-full p-1 px-3 rounded-lg border-2 border-black/10 outline-none' />
                </div>
                <div className='w-full flex flex-col'>
                    <label htmlFor="price">Price</label>
                    <input type="number" min={0} required name='price' id='price' value={formData.price} onChange={handleChange} className='w-full p-1 px-3 rounded-lg border-2 border-black/10 outline-none' />
                </div>
                <div className='w-full flex flex-col'>
                    <label htmlFor="discount">Discount</label>
                    <input type="number" name='discount' id='discount' value={formData.discount} onChange={handleChange}  className='w-full p-1 px-3 rounded-lg border-2 border-black/10 outline-none'/>
                </div >
                <button type='submit' className='bg-black/50 hover:bg-black/70 cursor-pointer rounded-lg w-full text-center p-1 text-white'>Submit</button>
            </form>
            <div className='w-full flex flex-row gap-6 items-center justify-center'>
                <div className=' flex flex-row items-center gap-4'>
                    <p>Status</p>
                    <p>{product.isAvailable ? <span className='text-white p-1 px-3 rounded-lg bg-green-500'>Available</span> : <span className='text-white p-1 px-3 rounded-lg bg-red-500'>Unavailable</span>}</p>
                </div>
                <button onClick={changeStatus} className='text-xl cursor-pointer'>{product.isAvailable ?<CgUnavailable/>:  <MdOutlineEventAvailable/>  }</button>
            </div>
        </div>
    )
}

export default UpdateProductForm

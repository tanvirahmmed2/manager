'use client'
import React from 'react'
import axios from 'axios'

const AddProduct = () => {
    return (
        <form className='w-1/2 flex flex-col items-center justify-center'>
            <div className='w-full flex flex-col gap-2'>
                <label htmlFor="title">Title</label>
                <input type="text" id='title' name='title' className='px-2 p-1 border-2 rounded-lg outline-none border-black/15' />
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label htmlFor="title">Category</label>
                <input type="text" id='title' name='title' className='px-2 p-1 border-2 rounded-lg outline-none border-black/15' />
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label htmlFor="description">Description</label>
                <input type="text" id='description' name='description' className='px-2 p-1 border-2 rounded-lg outline-none border-black/15' />
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label htmlFor="price">Price</label>
                <input type="number" id='price' name='price' className='px-2 p-1 border-2 rounded-lg outline-none border-black/15' />
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label htmlFor="wholeSalePrice">WholeSale Price</label>
                <input type="number" id='wholeSalePrice' name='wholeSalePrice' className='px-2 p-1 border-2 rounded-lg outline-none border-black/15' />
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label htmlFor="quantity">Quantity</label>
                <input type="number" id='quantitye' name='quantity' min={1} className='px-2 p-1 border-2 rounded-lg outline-none border-black/15' />
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label htmlFor="image">Image</label>
                <input type="file" id='image' name='image' accept='image/*' className='px-2 p-1 border-2 rounded-lg outline-none border-black/15' />
            </div>
        </form>
    )
}

export default AddProduct

'use client'
import React, { useEffect, useState } from 'react'

const Orderform = () => {
    const [data, setData] = useState({
        name: '',
        phone: '',
        delivery: 'dinein',
        table: '',
        items: '',
        subTotal: '',
        discount: '',
        tax: '',
        totlePrice: '',
        payment: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setData((prev) => ({ ...prev, [name]: value }))
    }

    const handleMethodChange = (method) => {
        setData((prev) => ({ ...prev, delivery: method }))
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit} className='w-full flex flex-col items-center justify-between gap-6 text-sm'>
            <div className='w-full flex flex-col items-center justify-center gap-2'>
                <div className="flex flex-row items-center justify-between w-full">
                    <p onClick={() => handleMethodChange('dinein')} className={`cursor-pointer px-4 py-1 rounded-full border ${data.delivery === 'dinein' ? 'bg-black text-white' : 'border-gray-300'}`} > Dine In </p>
                    <p onClick={() => handleMethodChange('takeout')} className={`cursor-pointer px-4 py-1 rounded-full border ${data.delivery === 'takeout' ? 'bg-black text-white' : 'border-gray-300'}`}
                    > Take Out </p>
                </div>
                <div className='w-full flex flex-row items-center justify-between'>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' name='name' value={data.name} onChange={handleChange} className='px-3 border-2 border-black/10 rounded-lg outline-none' />
                </div>
                <div className='w-full flex flex-row items-center justify-between'>
                    <label htmlFor="phone">Phone</label>
                    <input type="number" id='phone' name='phone' value={data.phone} onChange={handleChange} min={1} className='px-3 border-2 border-black/10 rounded-lg outline-none' />
                </div>
                
                {
                    data.delivery === 'dinein' &&
                    <div className='w-full flex flex-row items-center justify-between'>
                        <label htmlFor="table">Table</label>
                        <input type="number" id='table' name='table' value={data.table} min={1} onChange={handleChange} className='px-3 border-2 border-black/10 rounded-lg outline-none' />
                    </div>
                }
            </div>



            <div className='w-full flex flex-col gap-6 items-center justify-center'>
                <div className='w-full flex flex-col gap-2 border-b-2 border-black/10 items-center justify-center'>
                    <div className='w-full flex flex-row items-center justify-between'>
                        <p>Sub Total</p>
                        <p>123</p>
                    </div>
                    <div className='w-full flex flex-row items-center justify-between'>
                        <p>Discount</p>
                        <p>123</p>
                    </div>
                    <div className='w-full flex flex-row items-center justify-between'>
                        <p>Tax</p>
                        <p>123</p>
                    </div>

                </div>
                <div className='w-full flex flex-row items-center justify-between'>
                    <p>Total</p>
                    <p>123</p>
                </div>
            </div>

            <button className='bg-black text-white p-1 px-4 rounded-2xl' type='submit'>Place order</button>

        </form>
    )
}

export default Orderform

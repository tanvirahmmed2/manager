'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Search = () => {

    const [searchData, setSearchData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            if (!searchTerm) {
                setSearchData([])
                return
            }
            try {
                const response = await axios.get(`/api/order/search?q=${searchTerm}`, { withCredentials: true })
                setSearchData(response.data.payload)
            } catch (error) {
                console.log(error)
                setSearchData([])
            }
        }
        fetchData()
    }, [searchTerm])
    return (
        <div className='w-full flex flex-col p-4 items-center gap-4'>

            <div className="w-full flex flex-row items-center justify-between gap-4 border-b-2 p-4">
                <p>Find Order</p>
                <input type="text" className="w-auto border px-3 p-1 rounded-lg outline-none" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} placeholder="search" />
            </div>

            {
                !searchData || searchData.length < 1 ? <p>Please search product</p> : <div className="w-full flex flex-col gap-2 items-center justify-center">
                    {
                        searchData?.map((item) => (
                            <Link
                                href={`/sales/history/${item._id}`}
                                key={item._id}
                                className='w-full p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors flex flex-col gap-3'
                            >
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <p className='font-bold text-gray-900'>{item.name}</p>
                                        <p className='text-xs text-gray-500'>{item.phone}</p>
                                    </div>
                                    <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded ${item.status === 'confirmed' ? 'bg-amber-100 text-amber-700' :
                                        item.status === 'cancelled' ? 'bg-red-100 text-red-700' :
                                            'bg-green-100 text-green-700'
                                        }`}>
                                        {item.status}
                                    </span>
                                </div>

                                <div className='grid grid-cols-2 text-xs text-gray-600 border-t border-gray-100 pt-3'>
                                    <div className='flex flex-col gap-1'>
                                        <p>Subtotal: <span className='text-black'>৳{item.subTotal}</span></p>
                                        <p>Discount: <span className='text-red-500'>-৳{item.discount}</span></p>
                                    </div>
                                    <div className='flex flex-col gap-1 text-right'>
                                        <p>Tax: <span className='text-black'>৳{item.tax}</span></p>
                                        <p>Pay: <span className='font-medium text-black uppercase'>{item.paymentMethod}</span></p>
                                    </div>
                                </div>

                                <div className='flex justify-between items-center bg-gray-50 p-2 rounded-lg'>
                                    <span className='text-[10px] font-bold text-gray-400 uppercase tracking-tight'>Grand Total</span>
                                    <span className='text-lg font-black text-black'>৳{item.totalPrice}</span>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            }


        </div>
    )
}

export default Search

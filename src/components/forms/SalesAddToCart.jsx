'use client'
import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import { toast } from 'react-toastify'
import { useCart } from '../context/Context'
import Item from '../card/Item'

const SalesAddToCart = ({ product }) => {

    const { fetchCart } = useCart()
    const data = { title: product.title, productId: product._id, quantity: 1 }

    const addItemToCart = async () => {
        try {
            const response = await axios.post('/api/user/cart', data, { withCredentials: true })
            toast.success(response.data.message)
            fetchCart()
        } catch (error) {
            toast.error(error?.response?.data?.message || 'Failed to add to cart')
        }
    }

    return (
        <div onClick={addItemToCart} className='w-full cursor-pointer text-xs'>
            <Item item={product}/>
        </div>
    )
}

export default SalesAddToCart

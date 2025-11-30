'use client'
import ProductCard from '@/components/cards/ProductCard'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const CategorySlug = () => {
    const { slug } = useParams()
    const [products, setProducts] = useState(null)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`/api/products/category/${slug}`, { withCredentials: true })
                setProducts(response.data.payload || [])
            } catch (error) {
                console.log(error)
                setProducts([])
            }
        }
        if (slug) fetchProduct()
    }, [slug])

    const slugMap = {
        'masala': 'Masala',
        'rice-grains': 'Rice & Grains',
        'frozenfood': 'Frozen Food',
        'oil-ghee': 'Oil & Ghee',
        'snacks': 'Snacks',
        'healthcare': 'Health Care',
        'cleaning-household': 'Cleaning & Household'
    }

    return (
        <div className='w-full min-h-screen flex flex-col items-center gap-4 p-2 py-6'>
            <h1 className='text-2xl text-center'>{slugMap[slug]}</h1>
            
            {
                products === null || products.length === 0 ? (
                    <p>No Product Found</p>
                ) : (
                    <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 p-2'>
                        {products.map(product => (
                            <ProductCard key={product.slug} {...product} />
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default CategorySlug

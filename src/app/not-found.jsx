'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const NotFound = () => {
    const router= useRouter()
    return (
        <button onClick={()=> router.back()} className='w-full min-h-screen flex flex-col items-center justify-center cursor-pointer'>
            <h1 className='text-7xl font-semibold'>404</h1>
            <p className='text-lg'>Page not found</p>
        </button>
    )
}

export default NotFound

import AddProduct from '@/components/cards/AddProduct'
import React from 'react'

const Products = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center gap-6'>
      <h1 className='text-2xl font-semibold text-center'>Welcome to product page</h1>
      <div className='w-full flex flex-col items-center justify-center gap-4'>
        <h1 className='text-xl font-semibold text-center'>Add Product</h1>
        <AddProduct/>
      </div>
    </div>
  )
}

export default Products

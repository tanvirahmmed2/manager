import Link from 'next/link'
import React from 'react'

const AdminNav = () => {
  return (
    <nav className='w-full h-10 bg-green-500 fixed text-white flex flex-row items-center justify-around'>
        <Link className='w-full flex h-10 items-center justify-center hover:border-b-2 border-black hover:opacity-80' href='/admin/products'>Products</Link>
        <Link className='w-full flex h-10 items-center justify-center hover:border-b-2 border-black hover:opacity-80' href='/admin/orders'>Orders</Link>
        <Link className='w-full flex h-10 items-center justify-center hover:border-b-2 border-black hover:opacity-80' href='/admin/messages'>Messages</Link>
        <Link className='w-full flex h-10 items-center justify-center hover:border-b-2 border-black hover:opacity-80' href='/admin/users'>Users</Link>
    </nav>
  )
}

export default AdminNav

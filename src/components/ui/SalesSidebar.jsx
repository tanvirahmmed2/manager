'use client'
import Link from 'next/link'
import React from 'react'

import { AiOutlineUnorderedList } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import { PiFinnTheHumanLight } from "react-icons/pi";
import { FaHistory } from "react-icons/fa";
import Logout from '../buttons/Logout';
import { RiGlobalLine } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { usePathname } from 'next/navigation';

const SalesSidebar = () => {
  
  const pathname = usePathname()
  const isActive = (path) => pathname === path

  return (
    <div className='w-40 bg-rose-400 text-white min-h-[calc(100vh-64px)] flex flex-col justify-between border-r-2 border-black/10'>
      <div className='w-auto flex flex-col'>
        <Link href={'/sales'} className={`w-full flex flex-row items-center gap-3 cursor-pointer  px-4 p-1 ${isActive('/sales') ? ' text-black bg-white': ''}`}><IoHomeOutline/> Home</Link>
        <Link href={'/sales/orders'} className={`w-full flex flex-row items-center gap-3 cursor-pointer  px-4 p-1 ${isActive('/sales/orders') ? ' text-black bg-white': ''}`}><AiOutlineUnorderedList/> Orders</Link>
        <Link href={'/sales/history'} className={`w-full flex flex-row items-center gap-3 cursor-pointer  px-4 p-1 ${isActive('/sales/history') ? ' text-black bg-white': ''}`}><FaHistory/> History</Link>
        <Link href={'/sales/search'} className={`w-full flex flex-row items-center gap-3 cursor-pointer  px-4 p-1 ${isActive('/sales/search') ? ' text-black bg-white': ''}`}><IoMdSearch/> Order</Link>
      </div>

      <div className='w-auto flex flex-col'>
        <Link href={'/'} className={`w-full flex flex-row items-center gap-3 cursor-pointer  px-4 p-1 ${isActive('/') ? ' text-black bg-white': ''}`}><RiGlobalLine/>Website</Link>
        <Link href={'/profile'} className={`w-full flex flex-row items-center gap-3 cursor-pointer  px-4 p-1 ${isActive('/profile') ? ' text-black bg-white': ''}`}><PiFinnTheHumanLight/> Profile</Link>
        <Logout/>

      </div>
    </div>
  )
}

export default SalesSidebar

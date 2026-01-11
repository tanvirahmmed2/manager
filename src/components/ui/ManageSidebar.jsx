'use client'
import Link from 'next/link'
import React from 'react'

import { AiOutlineUnorderedList } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import { PiFinnTheHumanLight } from "react-icons/pi";
import { FaHistory } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { FaRegMessage } from "react-icons/fa6";
import { MdOutlineLocalOffer } from "react-icons/md";
import { RiGlobalLine } from "react-icons/ri";
import { CiBoxList } from "react-icons/ci";
import Logout from '../buttons/Logout';import { IoMdSearch } from "react-icons/io";
import { usePathname } from 'next/navigation';

const ManageSidebar = () => {
  
  const pathname = usePathname()
  const isActive = (path) => pathname === path

  return (
    <div className='w-40 text-sm min-h-[calc(100vh-64px)] flex flex-col justify-between border-r-2 bg-rose-400 text-white border-black/10'>
      <div className='w-full flex flex-col '>
        <Link href={'/manage'} className={`w-full flex flex-row items-center gap-3 cursor-pointer  px-4 p-1 ${isActive('/manage') ? ' text-black bg-white': ''}`}><IoHomeOutline/> Home</Link>
        <Link href={'/manage/orders'} className={`w-full flex flex-row items-center gap-3 cursor-pointer  px-4 p-1 ${isActive('/manage/orders') ? ' text-black bg-white': ''}`}><AiOutlineUnorderedList/> Orders</Link>
        <Link href={'/manage/search'} className={`w-full flex flex-row items-center gap-3 cursor-pointer  px-4 p-1 ${isActive('/manage/search') ? ' text-black bg-white': ''}`}><IoMdSearch/> Order</Link>
        <Link href={'/manage/history'} className={`w-full flex flex-row items-center gap-3 cursor-pointer  px-4 p-1 ${isActive('/manage/history') ? ' text-black bg-white': ''}`}><FaHistory/> History</Link>
        <Link href={'/manage/newproduct'} className={`w-full flex flex-row items-center gap-3 cursor-pointer  px-4 p-1 ${isActive('/manage/newproduct') ? ' text-black bg-white': ''}`}><FaRegEdit/>New Product</Link>
        <Link href={'/manage/products'} className={`wfull  flex flex-row items-center gap-3 cursor-pointer px-4 p-1  ${isActive('/manage/products') ? ' text-black bg-white': ''}`}><CiBoxList/> Products</Link>
        <Link href={'/manage/people'} className={`w-full flex flex-row items-center gap-3 cursor-pointer  px-4 p-1 ${isActive('/manage/people') ? ' text-black bg-white': ''}`}><MdManageAccounts/> People</Link>
        <Link href={'/manage/analytics'} className={`w-full flex flex-row items-center gap-3 cursor-pointer  px-4 p-1 ${isActive('/manage/analytics') ? ' text-black bg-white': ''}`}><SiGoogleanalytics/> Analytics</Link>
        <Link href={'/manage/support'} className={`wfull  flex flex-row items-center gap-3 cursor-pointer px-4 p-1  ${isActive('/manage/support') ? ' text-black bg-white': ''}`}><FaRegMessage/> Support</Link>
      </div>

      <div className='w-auto flex flex-col'>
        <Link href={'/'} className={`w-full flex flex-row items-center gap-3 cursor-pointer  px-4 p-1 ${isActive('/') ? ' text-black bg-white': ''}`}><RiGlobalLine/>Website</Link>
        <Link href={'/manage/settings'} className={`w-full flex flex-row items-center gap-3 cursor-pointer  px-4 p-1 ${isActive('/manage/settings') ? ' text-black bg-white': ''}`}><IoSettingsOutline/>Setting</Link>
        <Link href={'/profile'} className={`w-full  flex flex-row items-center gap-3 cursor-pointer px-4 p-1  ${isActive('/profile') ? ' text-black bg-white': ''}`}><PiFinnTheHumanLight/> Profile</Link>
        <Logout/>

      </div>
    </div>
  )
}

export default ManageSidebar

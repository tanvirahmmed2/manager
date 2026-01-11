'use client'
import Link from 'next/link'
import React, { useEffect, useState, useRef } from 'react'
import Sidebar from './Sidebar'

import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Logout from '../buttons/Logout'
import axios from 'axios'
import { useCart } from '../context/Context'
import { usePathname } from 'next/navigation';

const Navbar = () => {
  
  const pathname = usePathname()
  const isActive = (path) => pathname === path
  const { siteData } = useCart()
  const [isSidebar, setIsSidebar] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [role, setRole] = useState('')
  const [searchData, setSearchData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  
  const searchRef = useRef(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/user/islogin', { withCredentials: true })
        const data = response.data.payload.role
        setIsLogin(true)
        setRole(data)
      } catch (error) {
        console.log(error)
        setIsLogin(false)
        setRole('')
      }
    }
    fetchUser()
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchData([])
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      if (!searchTerm) {
        setSearchData([])
        return
      }
      try {
        const response = await axios.get(`/api/product/search?q=${searchTerm}`, { withCredentials: true })
        setSearchData(response.data.payload)
      } catch (error) {
        console.log(error)
        setSearchData([])
      }
    }
    fetchData()
  }, [searchTerm])

  return (
    <div className='w-full fixed top-0 z-50'>
      <div className='w-full flex flex-row items-center justify-between md:justify-around h-14 px-4 bg-red-400 text-white'>
        <Link href={'/'} className='text-lg md:text-2xl font-bold  '>{siteData?.title || 'Business'}</Link>

        <div className='w-auto flex flex-row items-center justify-center gap-2'>
          <div ref={searchRef} className='w-auto relative flex items-center justify-center'>
            <input 
              type="text" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              placeholder='search'
              className='bg-white w-40 md:w-80 text-black outline-none p-1 px-3 rounded-sm' 
            />

            {searchData.length > 0 && (
              <div className='w-full top-14 absolute flex flex-col gap-1 '>
                {searchData.map((item) => (
                  <Link 
                    href={`/products/${item?.slug}`} 
                    className='px-2 border text-xs md:text-base border-black/10 bg-white text-black' 
                    key={item._id} 
                    onClick={() => {
                      setSearchTerm('')
                      setSearchData([])
                    }}
                  >
                    {item.title.slice(0, 25)}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className='w-auto h-full hidden md:flex flex-row items-center justify-center gap-2'>
            <Link href={'/'} className={`${isActive('/') ? 'h-14 text-black px-6 bg-white flex items-center justify-center w-auto': ''}`}>Home</Link>
            <Link href={'/products'} className={`${isActive('/products') ? 'h-14 text-black px-6 bg-white flex items-center justify-center w-auto': ''}`}>Products</Link>
            {role === 'manager' && <Link href={'/manage'} className={`${isActive('/manage') ? 'h-14 text-black px-6 bg-white flex items-center justify-center w-auto': ''}`}>Manage</Link>}
            {role === 'sales' && <Link href={'/sales'} className={`${isActive('/sales') ? 'h-14 text-black px-6 bg-white flex items-center justify-center w-auto': ''}`}>Sales</Link>}
            {isLogin ? (
              <div className='w-auto h-full flex flex-row items-center justify-center gap-2'>
                <Link href={'/cart'} className={`${isActive('/cart') ? 'h-14 text-black px-6 bg-white flex items-center justify-center w-auto': ''}`}>Cart</Link>
                <Logout />
                <Link href={'/profile'} className={`${isActive('/profile') ? 'h-14 text-black px-6 bg-white flex items-center justify-center w-auto': ''}`}>Profile</Link>
              </div>
            ) : (
              <Link href={'/login'} className={`${isActive('/login') ? 'h-14 text-black px-6 bg-white flex items-center justify-center w-auto': ''}`}>Login</Link>
            )}
          </div>
          <button onClick={() => setIsSidebar(!isSidebar)} className='text-xl block md:hidden'>
            {isSidebar ? <RxCross2 /> : <FaBars />}
          </button>
        </div>
      </div>
      <Sidebar {...{ isSidebar, setIsSidebar, isLogin, role }} />
    </div>
  )
}

export default Navbar
'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Profile from '../buttons/Profile'
import Sidebar from './Sidebar'

import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Logout from '../buttons/Logout'
import axios from 'axios'
import { useCart } from '../context/Context'

const Navbar = () => {
  const { siteData } = useCart()
  const [isSidebar, setIsSidebar] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [role, setRole] = useState('')

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

  return (
    <div className='w-full fixed top-0 z-50'>
      <div className='w-full flex flex-row items-center justify-around h-14 px-4 bg-red-400 text-white'>
        <Link href={'/'} className='text-2xl font-semibold '>{siteData?.title || 'Business'}</Link>
        <div>

        </div>
        <div className='w-auto h-full hidden md:flex flex-row items-center justify-center gap-2'>
          <Link href={'/'}>Home</Link>
          <div className='w-auto h-full hidden md:flex flex-row items-center justify-center gap-2 relative group'>
            <Link className='' href={'/products'}>Products</Link>
            {
              siteData && <div className='group-hover:flex flex-col  justify-center gap-2 p-2 absolute top-14 text-black rounded-lg hidden bg-red-50 '>
                {
                  siteData.categories?.map((cat) => (
                    <Link href={`/products/${cat}`} key={cat} className='text-mono hover:scale-105 transform duration-500 ease-in-out'>{cat}</Link>
                  ))
                }
              </div>
            }

          </div>
          {role === 'manager' && <Link href={'/manage'}>Manage</Link>}
          {role === 'sales' && <Link href={'/sales'}>Sales</Link>}
          {
            isLogin ? <div className='w-auto h-full flex flex-row items-center justify-center gap-2'>
              <Link href={'/cart'}>Cart</Link>
              <Logout />
              <Profile />
            </div> : <Link href={'/login'}>Login</Link>
          }
        </div>
        <button onClick={() => setIsSidebar(!isSidebar)} className='text-xl block md:hidden'>
          {
            isSidebar ? <RxCross2 /> :
              <FaBars />
          }
        </button>
      </div>
      <Sidebar {...{ isSidebar, setIsSidebar, isLogin, role }} />

    </div>
  )
}

export default Navbar

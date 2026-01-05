'use client'
import Link from 'next/link'
import React from 'react'
import { useCart } from '../context/Context'
import { IoShareSocialOutline } from "react-icons/io5";

const Footer = () => {
  const { siteData } = useCart()
  return (
    <div className='w-full p-4 bg-red-50 border-t-2 border-black/10 flex flex-col items-center justify-center gap-4'>
      <div className='w-full flex flex-row items-center justify-center gap-4'>
        <Link href={'/support'}>Support</Link>

      </div>
      {
        siteData && <div className='w-full text-center flex flex-row items-center justify-center gap-4 '>
          <p>Hotline {siteData?.hotline}</p>
          <Link href={`${siteData?.socialLink}`} className='w-auto flex flex-row gap-2 items-center justify-center font-semibold'>Social<IoShareSocialOutline/></Link>

        </div>
      }

      <p>Developed by <Link href={'https://tanvirahmmed.vercel.app/'} className='font-semibold'>Tanvir Ahmmed</Link></p>

    </div>
  )
}

export default Footer


import React from 'react'
import Profile from '../buttons/Profile'
import Notification from '../buttons/Notification'
import Link from 'next/link'

const SalesNavbar = () => {
  return (
    <div className='w-full border-b-2 h-14 border-black/10 flex flex-row items-center justify-between px-4'>
        <Link href={'/sales'} className='text-xl font-bold'>Sales</Link>
        <div className='flex flex-row items-center justify-center gap-4 h-14'>
            <Link href={'/profile'}>Profile</Link>
        </div>
    </div>
  )
}

export default SalesNavbar

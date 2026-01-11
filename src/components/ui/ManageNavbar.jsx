
import React from 'react'
import Link from 'next/link'

const ManageNavbar = () => {
  return (
    <div className='w-full border-b-2 h-14 bg-rose-400 text-white border-black/10 flex flex-row items-center justify-between px-4'>
        <Link href={'/manage'} className='text-xl font-bold'>Management</Link>
        <div className='flex flex-row items-center justify-center gap-4 h-14'>
            <Link href={'/profile'} >Profile</Link>
        </div>
    </div>
  )
}

export default ManageNavbar

import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full border-b-2 h-14 border-black/10 flex flex-row items-center justify-between px-4'>
        <h1>Restaurant</h1>
        <input type="text" placeholder='search item' className='border-2 outline-none border-black/10 px-3 p-1 rounded-xl'/>
        <div className='flex flex-row items-center justify-center gap-4 h-14'>
            <h1>Name</h1>
            <p>Profile</p>
            <p>Notification</p>
        </div>
    </div>
  )
}

export default Navbar

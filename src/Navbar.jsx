import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full fixed top-0 '>
        <nav className='w-full h-14 bg-black text-white flex flex-row items-center justify-between px-4'>
            <Link href="/" className='text-2xl font-semibold font-sans'>Manager</Link>
            <div>

            </div>

        </nav>
    </header>
  )
}

export default Navbar

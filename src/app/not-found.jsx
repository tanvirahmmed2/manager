import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-2xl font-bold'>Not Found</h1>
      <Link href="/" className='opacity-55'>Go to home</Link>
    </div>
  )
}

export default NotFound

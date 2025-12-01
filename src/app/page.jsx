import Featured from '@/components/pages/Featured'
import React from 'react'

const page = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center gap-2'>
      <div className='w-full min-h-[700px] flex-col flex items-center justify-center gap-5'>
        <h1>Welcome to</h1>
        <h1>Monihari</h1>
      </div>
      <Featured/>
    </div>
  )
}

export default page

import AdminNav from '@/components/UI/AdminNav'
import React from 'react'

export const metadata = {
  title: 'Admin',
  description: 'Admin Panel'
}

const AdminLayout = ({ children }) => {
  return (
    <div className='w-full relative'>
      <AdminNav />
      <div className='w-full py-16  p-2 min-h-screen'>
        {children}
      </div>
    </div>
  )
}

export default AdminLayout

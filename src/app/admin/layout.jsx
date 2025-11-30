import AdminNav from '@/components/UI/AdminNav'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'
import jwt from 'jsonwebtoken'

export const metadata = {
  title: 'Admin',
  description: 'Admin Panel'
}

const AdminLayout = async({ children }) => {
  const token = ( await cookies()).get('user_token')?.value

  if(!token){
    redirect('/login')
  }

  const user= jwt.verify(token, process.env.JWT_SECRET)

  if(user.role !== "admin"){
    console.log("only admin can enter")
    redirect('/')
  }

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

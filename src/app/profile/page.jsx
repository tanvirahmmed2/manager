import React from 'react'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

const Profile = async() => {
    const token= (await cookies()).get('user_token')?.value
    if(!token){
        alert('Please login')
        window.location.replace('/login')
    }
    const data= jwt.verify(token, process.env.JWT_SECRET)
    
  return (
    <div>
      <h1>Name: {data.email}</h1>
    </div>
  )
}

export default Profile

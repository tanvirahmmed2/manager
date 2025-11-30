'use client'
import axios from 'axios'
import React from 'react'

const Logout = () => {

    const handleLogout= async () => {
        try {
            const response = await axios.get("/api/user/logout", {withCredentials: true})
            alert(response.data.message)
            window.location.replace('/login')
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <button className='cursor-pointer' onClick={handleLogout}>Logout</button>
  )
}

export default Logout

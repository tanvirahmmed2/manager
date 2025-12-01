
import React from 'react'

const Profile = async () => {

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/profile`, {
      method: 'GET',
      cache: 'no-store',
      credentials: 'include'
    })

    const data = await res.json()

    const user = data.payload
    console.log(user)
  } catch (error) {
    console.log(error)
  }




  return (
    <div>
      <h1>Profile</h1>
    </div>
  )
}

export default Profile

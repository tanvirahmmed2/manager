'use client'

import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

const Saved = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/profile', { withCredentials: true })
        const user = response.data.payload

        setData(user.cart)

      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  
  return (
    <div className="w-full min-h-screen flex items-center gap-4 flex-col p-2">
      {
        data !== null ? <div className='w-full md:w-3/4 flex flex-col items-center min-h-screen'>

          {
            data.map((product) => (
              <div key={product.productId}>
                <p>{product.title}</p>
              </div>
            ))
          }
        </div> : <div className='w-full md:w-3/4 flex flex-col items-center justify-center min-h-screen text-center'>
          <p>No cart  data found</p>
          <Link href='/products' className="text-2xl">Visit latest products</Link>
        </div>
      }
    </div>
  )
}

export default Saved

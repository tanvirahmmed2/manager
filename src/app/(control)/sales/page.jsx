'use client'

import SalesAddToCart from "@/components/forms/SalesAddToCart"
import SalesCart from "@/components/page/SalesCart"
import axios from "axios"
import { useEffect, useState, } from "react"



const PosPage = () => {


  const [searchData, setSearchData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      if (!searchTerm) {
        setSearchData([])
        return
      }
      try {
        const response = await axios.get(`/api/product/search?q=${searchTerm}`, { withCredentials: true })
        setSearchData(response.data.payload)
      } catch (error) {
        console.log(error)
        setSearchData([])
      }
    }
    fetchData()
  }, [searchTerm])



  return (
    <div className="w-full p-4 flex flex-row ">
      <div className="w-full flex flex-col items-center gap-4">

        <div className="w-full flex flex-row items-center justify-between gap-4 border-b-2 p-4">
          <p>Find item</p>
          <input type="text" className="w-auto border px-3 p-1 rounded-lg outline-none" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} placeholder="search" />
        </div>

        {
          !searchData || searchData.length < 1 ? <p>Please search product</p> : <div className="w-full flex flex-col gap-2 items-center justify-center">
            {
              searchData?.map((item) => (
                <SalesAddToCart key={item._id} product={item} />
              ))
            }
          </div>
        }
      </div>

      <SalesCart />
    </div>
  )
}

export default PosPage
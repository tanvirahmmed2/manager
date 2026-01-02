// context/CartContext.jsx
'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [siteData, setSiteData] = useState([])

  const fetchCart = async () => {
    try {
      const res = await axios.get('/api/user/cart', { withCredentials: true })
      const plainCart = res.data.payload.map(item => ({
        _id: item._id.toString(),
        productId: item.productId.toString(),
        title: item.title,
        quantity: item.quantity,
        price: item.price
      }))
      setCartItems(plainCart)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const fetchWebsiteData = async () => {
      try {
        const response = await axios.get('/api/website', { withCredentials: true })
        setSiteData(response.data.payload)
      } catch (error) {
        console.log(error)
        setSiteData([])

      }

    }
    fetchWebsiteData()

  }, [])


  useEffect(() => { fetchCart() }, [])

  return (
    <CartContext.Provider value={{ cartItems, fetchCart, siteData }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)

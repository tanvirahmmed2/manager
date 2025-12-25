'use client'
import Link from 'next/link';
import React from 'react'

import { FaEdit } from "react-icons/fa";

const UpdateProduct = ({slug}) => {
    
  return (
    <Link href={`/manage/products/${slug}`}><FaEdit/></Link>
  )
}

export default UpdateProduct

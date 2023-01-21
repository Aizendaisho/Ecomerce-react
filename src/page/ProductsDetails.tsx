import React from 'react'
import { useParams, Link } from 'react-router-dom'
import useProducts from '../Request'

export default function ProductsDetails() {
  const {id} = useParams()
  const {products} = useProducts()
  const idNumber = Number(id)
  const productDetail = products.find(p => p.id === idNumber)

  
  return (
    <div className=' m-5'>
    <Link className=' bg-gray-900 text-white px-4 py-2 ' to="/products">Atras</Link>
    <div className=' py-4'>
      {productDetail?.title}
      {productDetail?.id}

    </div>
    </div>
  )
}

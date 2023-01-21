import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineShoppingCart} from "react-icons/ai"

export default function Navbar() {
  return (
    <nav className=' bg-gray-900 text-white h-14 flex items-center justify-end gap-3 p-4 text-lg'>
        <Link to="/" >Home</Link>
        <Link to="/products" >Products</Link>
        <Link to="/contact" >Contact</Link>
        <Link className=' text-3xl' to="/cart" ><AiOutlineShoppingCart /></Link>

    </nav>
  )
}

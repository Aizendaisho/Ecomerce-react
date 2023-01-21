import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../page/Home'
import ProductsDetails from '../page/ProductsDetails'
import Products from '../page/Products'
import Cart from '../page/Cart'
import Contact from '../page/Contact'
import Navbar from '../components/Navbar'

export default function AppRoutes() {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductsDetails />} />
            <Route path="*" element={<h1 className=' text-5xl'>No se encontro la pagina</h1>} />
        </Routes>
    </Router>
  )
}
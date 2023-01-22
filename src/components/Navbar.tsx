import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineShoppingCart} from "react-icons/ai"
import { useShopContext } from "../context/ShopContext";
import ShoppingCart from "./ShoppingCart";


export default function Navbar() {
  const { cartQuantity, openCart } = useShopContext();
  return (
    <nav className=" h-18 bg-gray-900 text-white flex items-center justify-between sticky top-0">
      <ul className="  flex items-center justify-start gap-3 p-4 text-lg">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
      </ul>
      <button
        onClick={() => openCart()}
        className=" relative border-2 p-3 rounded-full m-4 "
      >
        <AiOutlineShoppingCart className=" text-4xl" />

        {cartQuantity > 0 ? (
          <div className="number rounded-full text-base flex justify-center px-2 items-center absolute bg-red-600 text-white bottom-0 right-0">
            {cartQuantity}
          </div>
        ) : null}
      </button>
    </nav>
  );
}

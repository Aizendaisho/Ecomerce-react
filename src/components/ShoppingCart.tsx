import React, { SyntheticEvent, useState } from "react";
import { useShopContext } from "../context/ShopContext";
import CartItem from "./CartItem";
import useProducts from "../Request";
import { formato } from "../format";

export default function ShoppingCart({ isOpen }: { isOpen: boolean }) {
  const { closeCart, cartItems } = useShopContext();
  const { products } = useProducts();

  const hijo = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={() => closeCart()}
      className={` absolute top-0 right-0 w-full h-full bg-gray-900 text-white opacity-90 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div
        onClick={(e) => hijo(e)}
        className={`absolute top-0 right-0 w-2/4 h-full bg-white text-black `}
      >
        <button
          onClick={() => closeCart()}
          className=" text-3xl px-4 py-2 bg-gray-600 top-2 right-2 absolute text-white"
        >
          x
        </button>

        <div className=" mt-14 m-3 grid gap-2">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="total text-2xl font-bold text-right">
          total:{" "}
          {formato(
            cartItems.reduce((total, cartItem) => {
              const item = products?.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)
          )}
        </div>
      </div>
    </div>
  );
}

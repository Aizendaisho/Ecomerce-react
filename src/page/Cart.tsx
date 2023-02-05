import React from 'react'
import { useShopContext } from "../context/ShopContext";
import CartItem from "../components/CartItem";
import { formato } from "../format";
import useProducts from "../Request";

export default function Cart() {
  const { cartItems } = useShopContext();
  const { products } = useProducts();
  const total = cartItems.reduce((total, cartItem) => {
    const item = products?.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);
  return (
    <div className="  flex flex-col min-h-screen container mx-auto">
      <div className=" grid gap-4 md:grid-cols-2 mt-4 lg:grid-cols-3">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <span className=" m-auto text-3xl bg-slate-500 text-white text-start p-3 rounded-md my-4">
        {!total ? (
          <span className=""> El carrito esta vacio</span>
        ) : (
          <span className=""> Total: {formato(total)}</span>
        )}
      </span>
    </div>
  );
}

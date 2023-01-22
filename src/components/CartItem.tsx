import React from "react";
import { ProductsEntity } from "../types";
import { useShopContext } from "../context/ShopContext";
import useProducts from "../Request";

type CartItemProps = {
  id: number;
  quantity: number;
};

export default function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShopContext();
  const { products } = useProducts();
  const item = products.find((i) => i.id === id);
  if (item == null) return null;
  let dollarFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(item.price);
  let total = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(item.price * quantity);

  return (
    <div className="flex items-center justify-between">
      <div className=" flex gap-4 justify-start items-center">
        <img className=" h-32 w-32 " src={item.thumbnail} alt={item.title} />
        <div>
          <p className=" text-xl">
            {item.title}{" "}
            {quantity > 1 && (
              <span className=" text-base text-gray-800">{quantity}x</span>
            )}
          </p>
          <p>{dollarFormat}</p>
        </div>
      </div>
      <div className=" flex gap-2 items-center justify-center ">
        <p className="text-xl">{total}</p>
        <button
          onClick={() => removeFromCart(item.id)}
          className=" border-2 border-red-500 text-red-500 px-5 py-2 rounded"
        >
          x
        </button>
      </div>
    </div>
  );
}

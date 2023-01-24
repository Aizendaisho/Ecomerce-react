import React from "react";
import { ProductsEntity } from "../types";
import { useShopContext } from "../context/ShopContext";
import useProducts from "../Request";
import { formato } from "../format";

type CartItemProps = {
  id: number;
  quantity: number;
};

export default function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShopContext();
  const { products } = useProducts();
  const item = products?.find((i) => i.id === id);
  if (item == null) return null;

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
          <p>{formato(item.price)}</p>
        </div>
      </div>
      <div className=" flex gap-2 items-center justify-center ">
        <p className="text-xl">{formato(item.price * quantity)}</p>
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

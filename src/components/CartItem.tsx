import React from "react";
import { ProductsEntity } from "../types";
import { useShopContext } from "../context/ShopContext";
import useProducts from "../Request";
import { formato } from "../format";
import { Link } from "react-router-dom";

type CartItemProps = {
  id: number;
  quantity: number;
};

export default function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useShopContext();
  const { products } = useProducts();
  const item = products?.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div className="flex items-center justify-between max-w-md shadow-lg">
      <div className=" flex gap-4 justify-start items-center ">
        <img
          className=" h-32 w-32 rounded-md shadow-xl"
          src={item.thumbnail}
          alt={item.title}
        />
        <div>
          <p className=" text-2xl">
            {item.title.split(" ").slice(0, 2).join(" ")}{" "}
          </p>
          <p>
            {formato(item.price)}{" "}
            {quantity > 1 && (
              <span className=" text-xl text-gray-800">x{quantity}</span>
            )}
          </p>
        </div>
      </div>
      <div className=" flex gap-2 items-center justify-center ">
        <p className="text-xl">{formato(item.price * quantity)}</p>
        <button
          onClick={() => removeFromCart(item.id)}
          className=" btn btn-outline btn-secondary m-2"
        >
          X
        </button>
      </div>
    </div>
  );
}



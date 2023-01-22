import React, { useContext } from "react";
import { ProductsEntity } from "../types";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useShopContext } from "../context/ShopContext";

export default function ProductsComponent({
  products,
}: {
  products: ProductsEntity;
}) {
  let dollarFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(products.price);
  const titleFormat = products.title.split(" ").slice(0, 3).join(" ");

  const {
    decreaseCartQuantity,
    getItemQuantity,
    increaseCartQuantity,
    removeFromCart,
  } = useShopContext();

  const quantity = getItemQuantity(products.id);

  return (
    <div className=" m-2 flex flex-col gap-3 items-start justify-start">
      <h1 className=" text-xl font-mono font-bold">{titleFormat}</h1>
      <img
        src={products.thumbnail}
        alt={products.title}
        className=" w-52 h-52 object-cover"
      />
      <p className=" text-green-700 text-lg">Precio: {dollarFormat}</p>

      {quantity === 0 ? (
        <button
          onClick={() => increaseCartQuantity(products.id)}
          className=" bg-blue-600 text-white px-6 py-2 rounded flex justify-center items-center"
        >
          Add To Cart <AiOutlineShoppingCart className=" ml-5 text-xl" />
        </button>
      ) : (
        <div className="contenedor grid gap-2">
          <div className=" flex items-baseline justify-center gap-2">
            <button
              onClick={() => decreaseCartQuantity(products.id)}
              className=" bg-blue-600 text-white text-xl py-1 px-3 rounded"
            >
              -
            </button>
            <p>{quantity} objeto en el carro</p>
            <button
              onClick={() => increaseCartQuantity(products.id)}
              className=" bg-blue-600 text-white text-xl py-1 px-3 rounded"
            >
              +
            </button>
          </div>
          <button
            onClick={() => removeFromCart(products.id)}
            className=" w-full bg-red-700 text-white rounded py-1"
          >
            Remove
          </button>
        </div>
      )}

      <Link to={`/product/${products.id}`}>Detalles</Link>
    </div>
  );
}

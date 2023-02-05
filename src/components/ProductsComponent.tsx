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
    <div className="bg-gray-100 card m-2 flex flex-col gap-3 items-stretch justify-center shadow-xl">
      <div className="titulo h-10 m-2">
        <h1 className=" text-xl font-mono font-bold">{titleFormat}</h1>
      </div>
      <img
        src={products.thumbnail}
        alt={products.title}
        className=" w-52 h-52 object-cover rounded-xl self-center"
      />
      <p className="  text-green-700 text-lg">Precio: {dollarFormat}</p>

      <div className="botone h-24 grid place-content-center ">
        {quantity === 0 ? (
          <button
            onClick={() => increaseCartQuantity(products.id)}
            className=" self-center btn bg-blue-600 text-white px-6 py-2 rounded flex justify-center items-center border-none"
          >
            Add To Cart <AiOutlineShoppingCart className=" ml-5 text-xl" />
          </button>
        ) : (
          <div className="contenedor grid gap-2">
            <div className="  flex items-baseline justify-center gap-2">
              <button
                onClick={() => decreaseCartQuantity(products.id)}
                className=" btn  bg-blue-600 text-white text-xl border-none  rounded"
              >
                -
              </button>
              <p>{quantity} item in cart</p>
              <button
                onClick={() => increaseCartQuantity(products.id)}
                className=" btn bg-blue-600 text-white text-xl rounded border-none"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeFromCart(products.id)}
              className=" self-center btn  bg-red-700 text-white border-none"
            >
              Remove
            </button>
          </div>
        )}
      </div>

      <Link to={`/product/${products.id}`} className=" m-2 link-accent">
        Detalles
      </Link>
    </div>
  );
}

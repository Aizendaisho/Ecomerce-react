import React from "react";
import { ProductsEntity } from "../types";
import { Link } from "react-router-dom";

export default function ProductsComponent({
  products,
}: {
  products: ProductsEntity;
}) {

  let dollarFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(products.price);
  const titleFormat = products.title.split(' ').slice(0,3).join(' ');
  return (
    <div className=" m-2 flex flex-col gap-3 ">
      <h1 className=" text-xl font-mono font-bold">{titleFormat}</h1>
      <img src={products.thumbnail} alt={products.title} className=" w-40 h-40"  />
      <p className=" text-green-700 text-lg">Precio: {dollarFormat}</p>
      <Link to={`/product/${products.id}`}>Detalles</Link>
    </div>
  );
}

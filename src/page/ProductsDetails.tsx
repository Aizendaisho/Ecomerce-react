import React from "react";
import { useParams, Link } from "react-router-dom";
import useProducts from "../Request";

export default function ProductsDetails() {
  const { id } = useParams();
  const { products } = useProducts();
  const idNumber = Number(id);
  const productDetail = products.find((p) => p.id === idNumber);

  return (
    <>
      <div className="container max-auto grid place-content-center h-screen">
        <div className=" m-5">
          <Link to="/products">
            <button className="btn btn-outline">Atras</button>
          </Link>
          <div className=" py-4">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={productDetail?.thumbnail}
                  alt={productDetail?.title}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {productDetail?.title}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{productDetail?.description}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">
                    {productDetail?.category}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

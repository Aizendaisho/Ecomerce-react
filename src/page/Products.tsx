import { useState } from "react";
import useProducts from "../Request";
import ProductsComponent from "../components/ProductsComponent";
import ReactPaginate from "react-paginate";
import { ProductsEntity } from "../types";

export default function Products() {
  const { products, isLoading } = useProducts();
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 10;
  const pageVisited = pageNumber * productPerPage;
  const [seach, setSeach] = useState("");

  if (isLoading) {
    return <h1> Cargando...</h1>;
  }

  const displayProduct = products
    ?.slice(pageVisited, pageVisited + productPerPage)
    .filter((p) => {
      return seach.toLowerCase() === ""
        ? p
        : p.title.toLowerCase().includes(seach.toLowerCase());
    })
    .map((product) => (
      <ProductsComponent key={product.id} products={product} />
    ));
  const pageCount = Math.ceil(products?.length / productPerPage);
  const changePage = (data: any) => {
    let selected = data.selected;
    setPageNumber(selected);
    window.scrollTo(0, 0);
  };

  return (
    <div className=" h-scree mx-auto container grid place-content-center content-center w-screen">
      <h1 className=" text-5xl text-center m-5 font-bold">Productos</h1>
      <input
        value={seach}
        onChange={(e) => setSeach(e.target.value)}
        placeholder="Que buscas?"
        className="input input-bordered  max-w-xs place-self-center min-w-fit w-36"
        type="text"
      />

      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 m-5 min-h-screen place-content-center content-center mx-auto container gap-6	">
        {displayProduct.length !== 0 ? (
          displayProduct
        ) : (
          <h1 className="text-3xl text-black place place-self-center col-span-4 justify-self-center">
            No se encuentra ese producto
          </h1>
        )}
      </div>

      {displayProduct.length !== 0 ? (
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName=" btn-group flex gap-2 align-items-center justify-center m-5"
          activeClassName={"btn-active text-white px-1 active"}
        />
      ) : null}
    </div>
  );
}

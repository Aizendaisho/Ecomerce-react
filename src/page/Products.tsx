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

  if (isLoading) {
    return <h1> Cargando...</h1>;
  }

  const displayProduct = products
    ?.slice(pageVisited, pageVisited + productPerPage)
    .map((product) => (
      <ProductsComponent key={product.id} products={product} />
    ));
    const pageCount = Math.ceil(products?.length / productPerPage);
    const changePage = (data: any) => {
      let selected = data.selected;
      setPageNumber(selected);
    }

  return (
    <div className=" h-scree">
      <h1 className=" text-5xl text-center m-5 font-bold">Productos</h1>
      <div className=" grid grid-cols-5 m-5 min-h-screen">{displayProduct}</div>
      <ReactPaginate 
      previousLabel={"Prev"}
      nextLabel={"Next"} 
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName=" flex gap-2 align-items-center justify-center m-5"
      activeClassName={" bg-blue-400 text-white px-1"}
      />
    </div>
  );
}

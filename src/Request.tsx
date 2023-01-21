import { useQuery } from "@tanstack/react-query";
import { ProductsEntity } from "./types";  

const useProducts = () => {

    const {data, isLoading, isFetched} = useQuery(["products"],
    ()=> fetch("https://dummyjson.com/products")
    .then(res => {
      const data = res.json()
      
      return data
    
    }),    {
      initialData: [],
    } )
    const products: ProductsEntity[] = data.products

    return {products, isLoading, isFetched}
}

export default useProducts
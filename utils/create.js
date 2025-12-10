import { product } from "../data/product";

export function createProduct(title,price,description,category){
    return{
        id:product.length+1,
        title:title,
        price:price,
        description:description,
        category:category
    }
}
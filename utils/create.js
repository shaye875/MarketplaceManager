import { products } from "../data/product.js";

export function createProduct(title,price,description,category){
    return{
        id:products.length+1,
        title:title,
        price:price,
        description:description,
        category:category
    }
}
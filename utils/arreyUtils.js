import { products } from "../data/product.js";
import readLineSync from "readline-sync"

export function addProduct(product) {
    try {
        products.push(product)
        return true
    } catch {
        return false
    }

}

export function removeProduct() {
    const id = readLineSync.question("which id you wont del: ")
    for (let p of products) {
        if (Number(p.id) === Number(id))
        products.splice(products.indexOf(p),1)
        return true
    }
    return false
}
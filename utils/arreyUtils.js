import { products } from "../data/product.js";
import readLineSync from "readline-sync"
import { sortList } from "./sortArrey.js";

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

export function editPrice(){
    const id = readLineSync.question("whice id you want edit: ")
    const price = readLineSync.question("which price: ")
    const found = products.find((p)=>Number(p.id) === Number(id))
    found.price = price
}

export function showByPriceOrder(){
    let productSort = []
    let pricres = products.map((p)=>{
        return p.price
    })    
    sortList(pricres)
 for (let i = 0;i<pricres.length;i++){
    for (let j = 0;j<pricres.length;j++){     
        if (Number(pricres[i]) === Number(products[j].price)){
            productSort.push(products[j])
            j = pricres.length
        }
    }
}
    console.table(productSort)
}



import { createProduct } from "./utils/create.js";
import { addProduct, removeProduct, editPrice, showByPriceOrder, showProductDetails, showByCategory } from "./utils/arreyUtils.js";
import readLineSync from "readline-sync"
function main() {
    let run = true
    while (run) {
        console.log("1. Add a new product for sale");
        console.log("2 Edit the price of an existing product");
        console.log(".3 Show all products (sorted from expensive to cheap)");
        console.log(".4 Show full product details (by ID)");
        console.log(".5 Delete product (sold/not relevant)");
        console.log(".6 Filter by category");
        console.log("0. exit");
        const choise = Number(readLineSync.question())
        switch (choise) {
            case 1:
                const title = readLineSync.question("enter title")
                const price = Number(readLineSync.question("enter price"))
                const description = readLineSync.question("enter  description")
                const category = readLineSync.question("enter category")
                let p = createProduct(title, price, description, category)
                let bool = addProduct(p)
                if (bool === true) {
                    console.log("adding godd!!");
                }
                break
            case 2:
                editPrice()
                break
            case 3:
                showByPriceOrder()
                break
            case 4:
                showProductDetails()
                break
            case 5:
                console.log(removeProduct());
                break
            case 6:
                showByCategory()
                break
            case 0:
                run = false
                break
        }
    }
}
main()
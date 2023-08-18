import { productStatus } from "./product.interface.js";
export class Product {
    constructor({ id, name, image, price, discount, status }) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.price = price;
        this.discount = discount;
        this.status = status;
    }
}
const arrivedProduct = [
    {
        id: 5,
        name: "T-Shirt Summer Vibes 2",
        image: "assets/img/product-1.png",
        price: 13.99,
        discount: 30,
        status: productStatus.available,
    },
    {
        id: 6,
        name: "Loose Knit 3/4 Sleeve 2",
        image: "assets/img/product-2.png",
        price: 11.99,
        discount: null,
        status: productStatus.outOfStock,
    },
    {
        id: 7,
        name: "Basic Slim Fit T-Shirt 2",
        image: "assets/img/product-3.png",
        price: 9.9,
        discount: null,
        status: productStatus.available,
    },
    {
        id: 8,
        name: "Loose Textured T-Shirt 2",
        image: "assets/img/product-4.png",
        price: 11.99,
        discount: null,
        status: productStatus.available,
    },
];
const productsData = [
    {
        id: 1,
        name: "T-Shirt Summer Vibes",
        image: "assets/img/product-1.png",
        price: 119.99,
        discount: 30,
        status: productStatus.outOfStock,
    },
    {
        id: 2,
        name: "Loose Knit 3/4 Sleeve",
        image: "assets/img/product-2.png",
        price: 119.99,
        discount: null,
        status: productStatus.available,
    },
    {
        id: 3,
        name: "Basic Slim Fit T-Shirt",
        image: "assets/img/product-3.png",
        price: 99.9,
        discount: null,
        status: productStatus.available,
    },
    {
        id: 4,
        name: "Loose Textured T-Shirt",
        image: "assets/img/product-4.png",
        price: 11.99,
        discount: null,
        status: productStatus.outOfStock,
    },
];
export const arrivedProductsArr = arrivedProduct.map((product) => new Product(product));
export const productsDataArr = productsData.map((product) => new Product(product));
//# sourceMappingURL=product.entity.js.map
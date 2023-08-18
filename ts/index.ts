import { updateCartQty } from "./components/product/cart.function.js";
import {
  arrivedProductsArr as arrivedProduct,
  productsDataArr as productsData,
} from "./components/product/product.entity.js";
import { displayProducts } from "./components/product/renderProduct.js";
//get container

updateCartQty()
displayProducts(productsData, "category-product");
displayProducts(arrivedProduct, "new-arrived-product");

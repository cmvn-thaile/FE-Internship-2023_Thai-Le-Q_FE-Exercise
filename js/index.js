import {
  arrivedProductsArr as arrivedProduct,
  productsDataArr as productsData,
} from "./productEntity.js";

import { createProductList, displayProducts } from "./renderProducts.js";
//get container


displayProducts(productsData, "category-product");
displayProducts(arrivedProduct, "new-arrived-product");

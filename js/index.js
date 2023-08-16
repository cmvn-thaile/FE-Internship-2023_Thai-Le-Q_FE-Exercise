import {
  arrivedProductsArr as arrivedProduct,
  productsDataArr as productsData,
} from "./productEntity.js";

import { createProductList } from "./renderProducts.js";
//get container




createProductList(productsData, "product-container");
createProductList(arrivedProduct, "new-arrived-container");

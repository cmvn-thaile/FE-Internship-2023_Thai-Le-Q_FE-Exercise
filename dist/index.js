var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchProductData } from "./api/apiCall.js";
import { endpoint } from "./api/apiUrls.js";
import { updateCartQty } from "./components/product/cart.function.js";
import { displayProducts } from "./components/product/renderProduct.js";
const renderIndex = () => __awaiter(void 0, void 0, void 0, function* () {
    const productsData = yield fetchProductData(endpoint.categoryProducts);
    const arrivedProduct = yield fetchProductData(endpoint.arrivedProducts);
    updateCartQty();
    displayProducts(productsData, "category-product");
    displayProducts(arrivedProduct, "new-arrived-product");
});
renderIndex();
//# sourceMappingURL=index.js.map
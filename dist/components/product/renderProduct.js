import { addToCart } from "./cart.function.js";
export const createProductList = (productContainer, data, id) => {
    const productList = document.createElement("ul");
    productList.className = "product-list row pt-12 sm-p-reset";
    productContainer.appendChild(productList);
    if (data.length > 0) {
        data.forEach((product) => {
            productList.innerHTML += `<li class="product-item col col-3 col-sm-6">
              <a class="product-link" >
                ${product.discount
                ? `<span class="badge badge-danger product-discount absolute">
                  -${product.discount}%
                </span>`
                : ""} 
                <div id="product-${product.id}" class="relative product-image-wrapper">
                <img
                  class="product-img"
                  src="${product.image}"
                  alt="${product.name}"
                />
                <button dis id=${product.id} class="btn ${id} btn-add-to-cart ${product.status === "outOfStock" ? "cart-btn-disabled" : ""} absolute"> Add to cart </button>
                </div>
                <h4 class="product-name">${product.name}s</h4>
                <div class="product-price-group d-flex justify-space-between">
                  ${product.discount
                ? `<p class="product-price text-danger">${product.price -
                    parseFloat(((product.price * product.discount) / 100).toFixed(2))}</p>`
                : ""}
                  <p class="product-price text-gray-2">${product.price}</p>
                </div>
              </a>
            </li>`;
        });
    }
    return productList;
};
export const displayProducts = (data, id) => {
    console.log(data);
    const productContainer = document.getElementById(id);
    if (productContainer) {
        createProductList(productContainer, data, id);
    }
    else {
        console.error(`Element with ID '${id}' not found in the DOM.`);
    }
    const addToCartBtns = document.querySelectorAll(`.${id}.btn-add-to-cart`);
    addToCartBtns.forEach((btn) => {
        const product = data.find((item) => item.id === parseInt(btn.id));
        if (product !== undefined) {
            if (btn.classList.contains("cart-btn-disabled")) {
                btn.innerText = "Out of stock";
                btn.addEventListener("click", () => {
                    alert("This product is currently out of stock.");
                });
            }
            else {
                btn.addEventListener("click", () => {
                    addToCart(product);
                    console.log(product);
                });
            }
        }
    });
};
//# sourceMappingURL=renderProduct.js.map
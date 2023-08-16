//discount badger element
// const productDiscount = (
//   discount,
//   productLink,
//   productPriceGroup,
//   productPrice,
//   product
// ) => {
//   badged
//   const productDiscount = document.createElement("span");
//   productDiscount.className = "badge badge-danger product-discount absolute";
//   productDiscount.textContent = `${discount}%`;

//   discounted price
//   const productPriceDiscounted = document.createElement("span");
//   productPriceDiscounted.className = "product-price text-danger";
//   productPriceDiscounted.textContent =
//     product.price - ((product.price * product.discount) / 100).toFixed(2);

//   adjust original price class
//   productPrice.className = "product-price text-gray-2";

//   productPriceGroup.appendChild(productPriceDiscounted);
//   productLink.appendChild(productDiscount);
// };
import { addToCart } from "./addCart.js";
export const createProductList = (data, id) => {
  const productContainer = document.getElementById(id);
  const productList = document.createElement("ul");
  productList.className = "product-list row pt-12 sm-p-reset";

  if (data.length > 0) {
    data.forEach((product) => {
      productList.innerHTML += `<li class="product-item col col-3 col-sm-6">
              <a class="product-link" href="">
                <span class="badge badge-danger product-discount absolute"
                  >-30%</span
                >
                <div id="product-${product.id}"  class="relative product-image-wrapper">
                <img
                  class="product-img"
                  src="${product.image}"
                  alt="${product.name}"
                />
                <button onclick="${addToCart(product.id)}" class="btn btn-add-to-cart absolute">Add to cart</button>
                </div>
                <h4 class="product-name">${product.name}s</h4>
                <div class="product-price-group d-flex justify-space-between">
                  ${
                    product.discount
                      ? `<p class="product-price text-danger">${
                          product.price -
                          ((product.price * product.discount) / 100).toFixed(2)
                        }</p>`
                      : ""
                  }
                  <p class="product-price text-gray-2">${product.price}</p>
                </div>
              </a>
            </li>`;

    });
  }

  productContainer.appendChild(productList);
};

// //create product list
// export const createProductList = (data, id) => {
//   const productContainer = document.getElementById(id);
//   const productList = document.createElement("ul");
//   productList.className = "product-list row pt-12 sm-p-reset";

//   if (data.length > 0) {
//     //add event listeners to show and hide button

//     data.forEach((product) => {
//       //create product item
//       const productItem = document.createElement("li");
//       productItem.className = "product-item col col-3 col-sm-6";

//       //create product link
//       const productLink = document.createElement("a");
//       productLink.className = "product-link";

//       const productImageWrapper = document.createElement("div");
//       productImageWrapper.className = "relative product-image-wrapper";

//       //create product image
//       const productImage = document.createElement("img");
//       productImage.className = "product-img";
//       productImage.src = product.image;
//       productImage.alt = product.name;

//       //add event listeners to show and hide button

//       //create product name
//       const productName = document.createElement("h4");
//       productName.className = "product-name";
//       productName.textContent = product.name;

//       //create product price group
//       const productPriceGroup = document.createElement("div");
//       productPriceGroup.className =
//         "product-price-group d-flex justify-space-between";

//       //create product price
//       const productPrice = document.createElement("span");
//       productPrice.textContent = product.price;
//       productPrice.className = "product-price";

//       //check if product has discount
//       if (product.discount > 0) {
//         productDiscount(
//           product.discount,
//           productLink,
//           productPriceGroup,
//           productPrice,
//           product
//         );
//         console.log("hello");
//       }
//       //add list
//       productList.appendChild(productItem);
//       productItem.appendChild(productLink);
//       productImageWrapper.appendChild(productImage);
//       productLink.appendChild(productImageWrapper);
//       productLink.appendChild(productName);
//       productLink.appendChild(productPriceGroup);
//       productPriceGroup.appendChild(productPrice);

//       //add btn add to cart
//       addToCart(product, productImageWrapper);
//       productContainer.appendChild(productList);
//     });
//   }
// };

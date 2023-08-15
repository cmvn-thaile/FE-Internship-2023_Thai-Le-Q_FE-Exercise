import productsData from "./products-data.js";

//get container
var productContainer = document.getElementById("product-container");
var cartIconGroup = document.getElementsByClassName("link-cart")[0];
var cartItems = JSON.parse(localStorage.getItem("cartItems"));
var cartQuantity = document.createElement("span");
cartQuantity.className = "cart-quantity";

//discount badger element
function productDiscount(
  discount,
  productLink,
  productPriceGroup,
  productPrice,
  product
) {
  //badged
  var productDiscount = document.createElement("span");
  productDiscount.className = "badge badge-danger product-discount absolute";
  productDiscount.textContent = discount + "%";

  //discounted price
  var productPriceDiscounted = document.createElement("span");
  productPriceDiscounted.className = "product-price text-danger";
  productPriceDiscounted.textContent =
    product.price - ((product.price * product.discount) / 100).toFixed(2);

  //adjust original price class
  productPrice.className = "product-price text-gray-2";

  productPriceGroup.appendChild(productPriceDiscounted);
  productLink.appendChild(productDiscount);
}

//create btn add to cart

//create product list
var productList = document.createElement("ul");
productList.className = "product-list row pt-12 sm-p-reset";

if (productsData.length > 0) {
  //add event listeners to show and hide button

  productsData.forEach((product) => {
    //create product item
    var productItem = document.createElement("li");
    productItem.className = "product-item col col-3 col-sm-6";

    //create product link
    var productLink = document.createElement("a");
    productLink.className = "product-link";

    var productImageWrapper = document.createElement("div");
    productImageWrapper.className = "relative product-image-wrapper";

    //create product image
    var productImage = document.createElement("img");
    productImage.className = "product-img";
    productImage.src = product.image;
    productImage.alt = product.name;

    //add event listeners to show and hide button

    //create product name
    var productName = document.createElement("h4");
    productName.className = "product-name";
    productName.textContent = product.name;

    //create product price group
    var productPriceGroup = document.createElement("div");
    productPriceGroup.className =
      "product-price-group d-flex justify-space-between";

    //create product price
    var productPrice = document.createElement("span");
    productPrice.textContent = product.price;
    productPrice.className = "product-price";

    //check if product has discount
    if (product.discount > 0) {
      productDiscount(
        product.discount,
        productLink,
        productPriceGroup,
        productPrice,
        product
      );
    }

    productList.appendChild(productItem);
    productItem.appendChild(productLink);
    productImageWrapper.appendChild(productImage);
    productLink.appendChild(productImageWrapper);
    productLink.appendChild(productName);
    productLink.appendChild(productPriceGroup);

    productPriceGroup.appendChild(productPrice);

    var btnAddToCart = document.createElement("button");
    btnAddToCart.className = "btn btn-primary btn-add-to-cart absolute";
    btnAddToCart.textContent = "Add to cart";
    btnAddToCart.addEventListener("click", function (e) {
      var cartItems = JSON.parse(localStorage.getItem("cartItems"));

      var productToCart = {
        id: product?.id,
        name: product?.name,
        price: product?.price,
        quantity: 1,
      };

      if (cartItems !== null) {
        var productExists = cartItems.find(
          (item) => item.id === productToCart.id
        );

        if (!productExists) {
          cartItems.push(productToCart);
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
          return;
        } else {
          var cartItemToUpdate = cartItems.find(function (item) {
            return item.id === productToCart.id;
          });

          cartItemToUpdate.quantity += 1;

          localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }
      } else {
        localStorage.setItem("cartItems", JSON.stringify([productToCart]));
      }

      getQuantity();
    });

    // change cart icon count product in cart
    //get cart i4



    cartQuantity.textContent = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.quantity;
    }, 0);

    cartIconGroup.appendChild(cartQuantity);
    productImageWrapper.appendChild(btnAddToCart);

  });

  
}

function getQuantity(){
  var cartItems = JSON.parse(localStorage.getItem("cartItems"));
  cartQuantity.textContent = cartItems.reduce(function (accumulator, item) {
    return accumulator + item.quantity;
  }, 0);

}

productContainer.appendChild(productList);

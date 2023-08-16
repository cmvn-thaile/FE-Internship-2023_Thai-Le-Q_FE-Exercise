var arrivedProduct = [
  {
    id: 5,
    name: "T-Shirt Summer Vibes 2",
    image: "assets/img/product-1.png",
    price: 13.99,
    discount: 30,
  },
  {
    id: 6,
    name: "Loose Knit 3/4 Sleeve 2",
    image: "assets/img/product-2.png",
    price: 11.99,
    discount: null,
  },
  {
    id: 7,
    name: "Basic Slim Fit T-Shirt 2",
    image: "assets/img/product-3.png",
    price: 9.9,
    discount: null,
  },
  {
    id: 8,
    name: "Loose Textured T-Shirt 2",
    image: "assets/img/product-4.png",
    price: 11.99,
    discount: null,
  },
];


var productsData = [
  {
    id: 1,
    name: "T-Shirt Summer Vibes",
    image: "assets/img/product-1.png",
    price: 119.99,
    discount: 30,
  },
  {
    id: 2,
    name: "Loose Knit 3/4 Sleeve",
    image: "assets/img/product-2.png",
    price: 119.99,
    discount: null,
  },
  {
    id: 3,
    name: "Basic Slim Fit T-Shirt",
    image: "assets/img/product-3.png",
    price: 99.9,
    discount: null,
  },
  {
    id: 4,
    name: "Loose Textured T-Shirt",
    image: "assets/img/product-4.png",
    price: 11.99,
    discount: null,
  },
];

//get container

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

//create product list
function createProductList(data, id) {
  // var parentElement = document.getElementsByClassName("parent-element").children;

  var productContainer = document.getElementById(id);

  var cartItems = JSON.parse(localStorage.getItem("cartItems"));
  var cartQuantity = document.createElement("span");
  cartQuantity.className = "cart-quantity";

  var productList = document.createElement("ul");
  productList.className = "product-list row pt-12 sm-p-reset";

  if (data.length > 0) {
    //add event listeners to show and hide button

    data.forEach((product) => {
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
        console.log('hello')
      }
      //add list
      productList.appendChild(productItem);
      productItem.appendChild(productLink);
      productImageWrapper.appendChild(productImage);
      productLink.appendChild(productImageWrapper);
      productLink.appendChild(productName);
      productLink.appendChild(productPriceGroup);
      productPriceGroup.appendChild(productPrice);

      //add btn add to cart
      addToCart(product,productImageWrapper);
      productContainer.appendChild(productList);
    });
  }

  function addToCart(product,productImageWrapper) {
    var btnAddToCart = document.createElement("button");
    btnAddToCart.className = "btn btn-primary btn-add-to-cart absolute";
    btnAddToCart.textContent = "Add to cart";
    btnAddToCart.addEventListener("click", function (e) {
      //get cart items
      var cartItems = JSON.parse(localStorage.getItem("cartItems"));

      //current product
      var productToCart = {
        id: product?.id,
        name: product?.name,
        price: product?.price,
        quantity: 1,
      };

      if (cartItems !== null) {
        //find if product exist in cart
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
    var cartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItems) {
      getQuantity() 
      // cartQuantity.textContent = cartItems.reduce(function (accumulator, item) {
      //   return accumulator + item.quantity;
      // }, 0);
      // cartIconGroup.appendChild(cartQuantity);
    }
    productImageWrapper.appendChild(btnAddToCart);
    // change cart icon count product in cart
    //get cart i4
  }
  function getQuantity() {
    var cartIconGroup = document.getElementsByClassName("link-cart")[0];
    var cartItems = JSON.parse(localStorage.getItem("cartItems"));
    cartQuantity.textContent = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.quantity;
    }, 0);
    cartIconGroup.appendChild(cartQuantity);
  }
}


  createProductList(productsData, "product-container");
  createProductList(arrivedProduct, "new-arrived-container");
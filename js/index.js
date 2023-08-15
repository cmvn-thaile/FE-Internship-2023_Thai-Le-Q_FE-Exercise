import productsData from "./products-data.js";

//get container
var productContainer = document.getElementById("product-container");

//discount badger element
function productDiscount(
  discount,
  productLink,
  productPriceGroup,
  productPrice
) {
  //badged
  var productDiscount = document.createElement("span");
  productDiscount.className = "badge badge-danger product-discount absolute";
  productDiscount.textContent = discount + "%";

  //discounted price
  var productPriceDiscounted = document.createElement("span");
  productPriceDiscounted.className = "product-price text-danger";
  productPriceDiscounted.textContent =
    productsData[i].price -
    ((productsData[i].price * productsData[i].discount) / 100).toFixed(2);

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
  for (var i = 0; i < productsData.length; i++) {
    //get product
    var product = productsData[i];

    //create product item
    var productItem = document.createElement("li");
    productItem.className = "product-item col col-3 col-sm-6";

    //create product link
    var productLink = document.createElement("a");
    productLink.className = "product-link";

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
        productPrice
      );
    }

    productList.appendChild(productItem);
    productItem.appendChild(productLink);
    productLink.appendChild(productImage);
    productLink.appendChild(productName);
    productLink.appendChild(productPriceGroup);
    productPriceGroup.appendChild(productPrice);
  }
}

productContainer.appendChild(productList);

import products from "./products.js";

for (let product of products) console.log(product.discount);

const createCard = (title, images, description, category, discount, parent) => {
  const cardNode = document.createElement("div");

  cardNode.className = "card";

  const titleNode = document.createElement("h1");
  titleNode.textContent = title;

  const imgNode = document.createElement("img");
  imgNode.setAttribute("src", images);
  imgNode.setAttribute("alt", category);
  const parNode = document.createElement("p");
  parNode.textContent = description;

  cardNode.append(titleNode, imgNode, parNode);
  parent.appendChild(cardNode);
};

const productDiscountNode = document.querySelector(".products_discount");
const headerProductDiscount = document.createElement("h1");
headerProductDiscount.textContent = "Products on Offer";
productDiscountNode.appendChild(headerProductDiscount);

const newProductNode = document.querySelector(".new_products");
const headerNewProduct = document.createElement("h1");
headerNewProduct.textContent = "New Collection";
newProductNode.appendChild(headerNewProduct);

products
  .filter(
    (product) => product.category === "smartphones" && product.discount === true
  )
  .map((product) => {
    createCard(
      product.title,
      product.thumbnail,
      product.description,
      product.category,
      product.discount,
      productDiscountNode
    );
  });

products
  .filter(
    (product) =>
      product.category === "smartphones" && product.discount === false
  )
  .map((product) => {
    createCard(
      product.title,
      product.thumbnail,
      product.description,
      product.category,
      product.discount,
      newProductNode
    );
  });

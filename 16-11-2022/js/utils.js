import { GET, POST, DELETE, getId } from "./api.js";

const c = (el) => document.createElement(el);
const q = (el) => document.querySelector(el);

// API
/**
 * Create an unique hash code
 * @returns string
 */
function idIncrements(url) {
  let id = getId(url) + 1;
  console.log("incremento id: " + id);
  return id;
}
let i = 1;
const createCard = (url, parent, name, type, id) => {
  i++;
  const wrapperEl = c("li");
  const cardEl = c("div");
  const img = document.createElement("img");
  img.classList.add("card__all__img");
  img.setAttribute("src", `https://picsum.photos/130/130/?${i}`);
  const idEl = c("p");
  const nameEl = c("p");
  const typeEl = c("p");
  wrapperEl.classList.add("card__all");

  idEl.textContent = id;
  nameEl.textContent = name;
  typeEl.textContent = type;

  wrapperEl.addEventListener("click", () => {
    DELETE(url, id).then(() => location.reload());
  });

  cardEl.append(img, nameEl, typeEl, idEl);
  wrapperEl.append(cardEl);
  parent.append(wrapperEl);
};

export { c, q, idIncrements, createCard };

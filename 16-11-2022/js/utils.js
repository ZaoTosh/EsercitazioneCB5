import { DELETE, GET, getId } from "./api.js";

const c = (el) => document.createElement(el);
const q = (el) => document.querySelector(el);
const cardD = document.querySelector(".card__all");
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

const createCard = (url, parent, name, type, id) => {
  const wrapperEl = c("li");
  const cardEl = c("div");
  const nameEl = c("p");
  const typeEl = c("p");
  const btn = c("button");

  wrapperEl.className = "list__card";

  nameEl.textContent = name;
  typeEl.textContent = type;

  cardD.addEventListener("click", () => {
    DELETE(url, id).then(() => location.reload());
  });

  cardEl.append(nameEl, typeEl, btn);
  wrapperEl.append(cardEl);
  parent.appendChild(wrapperEl);
};

export { c, q, idIncrements, createCard };

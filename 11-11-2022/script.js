const divCard = document.querySelector(".card");
const divButton = document.querySelector(".buttonPoke");
const cardNode = document.createElement("div");
const nameNode = document.createElement("h2");
const imgNode = document.createElement("img");
const typeNode = document.createElement("p");
const numNode = document.createElement("h3");

const insertNum = (n) => {
  if (n > 9 && n < 100) return `#0${n}`;
  if (n <= 9) return `#00${n}`;
  return `#${n}`;
};

const ctrlNextShow = (next) => {
  if (next >= 10) buttonNext.disabled = true;
  if (next === 1) buttonPrevius.disabled = true;
  else buttonPrevius.disabled = false;
};

const ctrlPreviusShow = (next) => {
  if (next <= 2) buttonPrevius.disabled = true;
  buttonNext.disabled = false;
};

const promiseFunction = (arrRespPoke) => {
  //Promessa ricezione pacchetto
  arrRespPoke.then((jsonPokemon) =>
    createCard(
      jsonPokemon.sprites.other.dream_world.front_default,
      jsonPokemon.id,
      jsonPokemon.name,
      jsonPokemon.types[0].type.name
    )
  );
};

const fetchFunction = async (URL) => {
  // invio della richiesta al server
  const prom = await fetch(URL).then((resp) => resp.json());
  console.log(prom);
  return prom;
};

//-------card--------
const createCard = (image, num, namePoke, typePoke) => {
  cardNode.className = "cardAll";
  cardNode.classList.add(typePoke);

  //Nome
  nameNode.textContent = namePoke[0].toUpperCase() + namePoke.slice(1);
  //Immagine
  imgNode.setAttribute("src", image);
  imgNode.setAttribute("alt", typePoke);
  //Tipo
  typeNode.textContent = "Type: " + typePoke;
  //Numero
  numNode.textContent = insertNum(num);

  cardNode.append(imgNode, numNode, nameNode, typeNode);
  divCard.append(cardNode);
};
// bottoni
const buttonNext = document.createElement("button");
buttonNext.textContent = ">";
const buttonPrevius = document.createElement("button");
buttonPrevius.textContent = "<";
divButton.append(buttonPrevius);
divButton.append(buttonNext);

let actualCard = 0;
const fetchNextCardPoke = () => {
  actualCard++;
  const URL = `https://pokeapi.co/api/v2/pokemon/${actualCard}`;
  const arrRespPoke = fetchFunction(URL);
  promiseFunction(arrRespPoke);
  ctrlNextShow(actualCard);
};
const fetchPreviusCardPoke = () => {
  ctrlPreviusShow(actualCard);
  actualCard--;
  const URL = `https://pokeapi.co/api/v2/pokemon/${actualCard}`;
  const arrRespPoke = fetchFunction(URL);
  promiseFunction(arrRespPoke);
};
window.onload = fetchNextCardPoke;
buttonNext.addEventListener("click", fetchNextCardPoke);
buttonPrevius.addEventListener("click", fetchPreviusCardPoke);

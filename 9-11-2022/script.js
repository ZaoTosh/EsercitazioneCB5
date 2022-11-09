const divCard = document.querySelector(".card");

const insertNum = (n) => {
  if (n > 9 && n < 100) return `#0${n}`;
  if (n <= 9) return `#00${n}`;
  return `#${n}`;
};
//-------card--------
const createCard = (image, num, namePoke, typePoke) => {
  const cardNode = document.createElement("div");
  cardNode.className = "cardAll";
  cardNode.classList.add(typePoke);
  //Nome
  const nameNode = document.createElement("h2");
  nameNode.textContent = namePoke[0].toUpperCase() + namePoke.slice(1);
  //Immagine
  const imgNode = document.createElement("img");
  imgNode.setAttribute("src", image);
  imgNode.setAttribute("alt", typePoke);
  //Tipo
  const typeNode = document.createElement("p");
  typeNode.textContent = "Type: " + typePoke;
  //Numero
  const numNode = document.createElement("h3");
  numNode.textContent = insertNum(num);

  cardNode.append(imgNode, numNode, nameNode, typeNode);
  divCard.append(cardNode);
};
// Array di richieste
const arrRequest = [];
for (let i = 1; i <= 150; i++) {
  arrRequest.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
}
// invio della richiesta al server
let arrRespPoke = arrRequest.map((res) =>
  fetch(res).then((resp) => resp.json())
);
//Promessa ricezione pacchetto
Promise.all(arrRespPoke).then((res) =>
  res.map((jsonPokemon) =>
    createCard(
      jsonPokemon.sprites.other.dream_world.front_default,
      jsonPokemon.id,
      jsonPokemon.name,
      jsonPokemon.types[0].type.name
    )
  )
);

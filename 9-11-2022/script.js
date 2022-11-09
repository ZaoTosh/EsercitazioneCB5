const divCard = document.querySelector(".card");
const divButton = document.querySelector(".buttonPoke");
const divButton2 = document.querySelector(".buttonPoke2");
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
// bottone
const buttonOther = document.createElement("button");
buttonOther.textContent = "Show more";
const buttonOther2 = document.createElement("button");
buttonOther2.textContent = "Other";
buttonOther.addEventListener("click", PromisePoke2);
buttonOther2.addEventListener("click", PromisePoke3);
divButton.append(buttonOther);

// Array di richieste
let i = 1;
const arrRequest = [];
const arrRequest2 = [];
const arrRequest3 = [];
for (let i = 1; i <= 50; i++) {
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
async function PromisePoke2() {
  // const PromisePoke22 = async () => {
  //Promessa ricezione pacchetto

  for (let i = 51; i <= 100; i++)
    arrRequest2.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
  let arrRespPoke2 = arrRequest2.map((res) =>
    fetch(res).then((resp) => resp.json())
  );

  Promise.all(arrRespPoke2).then((res) =>
    res.map((jsonPokemon) =>
      createCard(
        jsonPokemon.sprites.other.dream_world.front_default,
        jsonPokemon.id,
        jsonPokemon.name,
        jsonPokemon.types[0].type.name
      )
    )
  );
  buttonOther.disabled = true;
  divButton2.append(buttonOther2);
}

function PromisePoke3() {
  for (let i = 101; i <= 150; i++)
    arrRequest3.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
  let arrRespPoke3 = arrRequest3.map((res) =>
    fetch(res).then((resp) => resp.json())
  );
  //Promessa ricezione pacchetto
  Promise.all(arrRespPoke3).then((res) =>
    res.map((jsonPokemon) =>
      createCard(
        jsonPokemon.sprites.other.dream_world.front_default,
        jsonPokemon.id,
        jsonPokemon.name,
        jsonPokemon.types[0].type.name
      )
    )
  );
  buttonOther2.disabled = true;
}

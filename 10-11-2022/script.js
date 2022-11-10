const divCard = document.querySelector(".card");
const buttonOther = document.createElement("button");
buttonOther.textContent = "Show more";
// const divNode = document.createElement("div");
// divNode.className = "divCard";

const idDivNode = document.createElement("div");
idDivNode.className = "idDiv";

const adviceDivNode = document.createElement("div");
adviceDivNode.className = "adviceDiv";
//-------card--------
const createCard = (id, advice) => {
  const idNode = document.createElement("h2");
  idNode.textContent = `ADVICE # ${id}`;
  idNode.classList.add("id");

  const adviceNode = document.createElement("p");
  adviceNode.textContent = '"' + advice + '"';
  adviceNode.classList.add("advice");

  idDivNode.append(idNode);
  adviceDivNode.append(adviceNode);
  //divNode.appendChild(idDivNode, adviceDivNode, buttonOther);
  divCard.append(idDivNode, adviceDivNode, buttonOther);
};
// bottone

const urlAdvice = "https://api.adviceslip.com/advice";

/**
 * Get data from the end point
 *
 * @param {string} url
 */
const getAdvice = (URL) => {
  fetch(URL, { cache: "no-cache" })
    .then((res) => res.json())
    .then((res) => {
      console.log(res.slip.id + " " + res.slip.advice);
      createCard(res.slip.id, res.slip.advice);
    });
};

buttonOther.addEventListener("click", () => {
  getAdvice(urlAdvice);
});
getAdvice(urlAdvice);

// {
//   "slip": {
//     "id": 203,
//     "advice": "The best sex is fun."
//   }
// }

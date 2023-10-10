const grid = document.querySelector(".grid");

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

let firstCard = "";
let secondCard = "";

const checkEndGame = () => {
    const disableCards = document.querySelectorAll(".disableCard");
    const AllCards = document.querySelectorAll(".card");

    if (disableCards.length === AllCards.length) {
        alert("Felicidades, eres el Ganador!");
    }
};

const checkCards = () => {
  const firstCharacter = firstCard.getAttribute("data-character");
  const secondCharacter = secondCard.getAttribute("data-character");

  if (firstCharacter === secondCharacter) {
    firstCard.firstChild.classList.add("disableCard");
    secondCard.firstChild.classList.add("disableCard");

    firstCard = "";
    secondCard = "";

    checkEndGame();

  } else {
    setTimeout(() => {
      firstCard.classList.remove("revealCard");
      secondCard.classList.remove("revealCard");

      firstCard = "";
      secondCard = "";
    }, 500);
  }
};

const revealCard = ({ target }) => {
  if (target.parentNode.className.includes("revealCard")) {
    return;
  }

  if (firstCard === "") {
    target.parentNode.classList.add("revealCard");
    firstCard = target.parentNode;
  } else if (secondCard === "") {
    target.parentNode.classList.add("revealCard");
    secondCard = target.parentNode;

    checkCards();
  }
};

const createCard = (character) => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url('${character}')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", revealCard);
  card.setAttribute("data-character", character);

  return card;
};

const loadGame = async () => {
  let url = "https://rickandmortyapi.com/api/character";

  const response = await fetch(url);
  const data = await response.json();
  const characters = data.results;
  const duplicateCharacters = [...characters, ...characters];
  const suffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

  for (let character of suffledArray) {
    const card = createCard(character.image);
    grid.appendChild(card);
  }
};

loadGame();

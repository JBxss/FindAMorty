const grid = document.querySelector(".grid");

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

const createCard = (character) => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url('${character}')`;

  card.appendChild(front);
  card.appendChild(back);

  return card;
};

const loadGame = async () => {
  let url = "https://rickandmortyapi.com/api/character";

  const response = await fetch(url);
  const data = await response.json();
  const char = data.results;

  for (let character of char) {
    const card = createCard(character.image);
    grid.appendChild(card);
  }
};

loadGame();
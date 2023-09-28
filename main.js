const characterElement = document.getElementById("characters");
const nameFilterElement = document.getElementById("name-filter");
const statusFilterElement = document.getElementById("status-filter");

async function getCharacters(name, status) {
  let url = "https://rickandmortyapi.com/api/character";

  const response = await fetch(url);
  const data = await response.json();

  return data.results;
}

async function displayCharacters(name, status) {
  const characters = await getCharacters(name, status);

  for (let character of characters) {
    const card = document.createElement("div");
    card.classList.add("character-card");

    card.innerHTML = `
        <img src="${character.image}" />
        <h2>${character.name}<h2/>
        <p> Status: ${character.status}<p/>
        <p>Especie: ${character.species}<p/>
        `;

        characterElement.appendChild(card);
  }
}

displayCharacters();
const characterElement = document.getElementById("characters");
const nameFilterElement = document.getElementById("name-filter");
const statusFilterElement = document.getElementById("status-filter");

async function getCharacters(name, status) {
  let url = "https://rickandmortyapi.com/api/character";

  if (name || status) {
    url += "?";
    if (name) {
      url += `name=${name}`;
    }
    if (status) {
      url += name ? `&status=${status}` : `status=${status}`;
    }
  }

  const response = await fetch(url);
  const data = await response.json();

  return data.results;
}

async function displayCharacters(name, status) {
  const characters = await getCharacters(name, status);

  characterElement.innerHTML = ``; // limpiando el elemento

  for (let character of characters) {
    const card = document.createElement("div");
    card.classList.add("character-card");

    card.innerHTML = `
    <h2>${character.name}<h2/>
        <img src="${character.image}" />
        <div class="content-card">
        <p> <span>Estado</span> <br> ${character.status}<p/>
        <p> <span>Especie</span> <br> ${character.species}<p/>
        </div>
        `;

    characterElement.appendChild(card);
  }
}

displayCharacters();

nameFilterElement.addEventListener("input", () => {
  displayCharacters(nameFilterElement.value);
});

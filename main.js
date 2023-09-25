const characterElement = document.getElementById("characters");
const nameFilterElement = document.getElementById("name-filter");
const statusFilterElement = document.getElementById("status-filter");

async function getCharacters (name, status) {
    let url = "https://rickandmortyapi.com/api/character";

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    return data.results;
}

getCharacters();
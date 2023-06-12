const buttonNext = document.getElementById("next");
const buttonPrevious = document.getElementById("previous");
const jokeDiv = document.querySelector(".container .joke p");

let jokeIndex = 0;
let jokesData = [];

document.addEventListener("DOMContentLoaded", getJokes);
buttonNext.addEventListener("click", getNextJoke);
buttonPrevious.addEventListener("click", getPreviousJoke);

async function getJokes() {
  const jokesDataResponse = await fetch("https://icanhazdadjoke.com/search", {
    headers: { Accept: "application/json" },
  });
  const jokesDataObj = await jokesDataResponse.json();
  jokesData = jokesDataObj.results;
  displayJoke(jokeIndex);
}

function displayJoke(index) {
  jokeDiv.innerHTML = jokesData[index].joke;
}

function getNextJoke() {
  jokeIndex = (jokeIndex + 1) % jokesData.length;
  displayJoke(jokeIndex);
}

function getPreviousJoke() {
  jokeIndex = (jokeIndex - 1 + jokesData.length) % jokesData.length;
  displayJoke(jokeIndex);
}

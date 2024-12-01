import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


async function fetchData() {
  try {

    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!response.ok) {
      throw new Error("Could not fetch");
    }

    const data = await response.json();
    console.log(data);
  } 
  catch (error) {
    console.error(error);
  }
}

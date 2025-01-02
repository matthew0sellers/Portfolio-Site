import React, { useState, useRef } from "react";

const PokiSearch = () => {
  const [pokemonSprite, setPokemonSprite] = useState(null);
  const [pokemonSpriteShiny, setPokemonSpriteShiny] = useState(null);
  const [pokeName, setPokeName] = useState(null);
  const [pokeType, setPokeType] = useState(null);
  const [pokeSound, setPokeSound] = useState(null);
  const [pokeId, setPokeId] = useState(null);

  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current && pokeSound) {
        audioRef.current.volume = 0.1;
        audioRef.current.play(); 
      }
  };
  // Function to handle fetching data
  const fetchData = async () => {
    try {
      const pokemonName = document
        .getElementById("pokemonName")
        .value.toLowerCase();

      if (!pokemonName) {
        alert("Please enter a Pokémon name");
        return;
      }

      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );

      if (!response.ok) {
        throw new Error("Could not fetch Pokémon");
      }

      const data = await response.json();
      console.log(data);

      setPokemonSprite(data.sprites.front_default);
      setPokemonSpriteShiny(data.sprites.front_shiny);
      setPokeId(data.id);
      setPokeName(pokemonName);

      setPokeType(data.types.map((type) => type.type.name).join(", "));

      setPokeSound(`https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${data.id}.ogg`
      );

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="apiEx">
              <h4>API Application</h4>
      
      <p>
        I know that the ability to use API's might be important to your project.
        API's can be used to implement weather updates, financial data, or even authenticating your identity using login services.
        Here I'm using the free pokemon API as an example this is how API's can be used.
      </p>
      <input type="text" id="pokemonName" placeholder="Enter Pokemon name" />
      <button id="apiBtn" onClick={fetchData}>
        Fetch Pokemon
      </button>
      <br />
      {pokemonSprite && (
        <div>
          <img src={pokemonSprite} alt="Pokemon Sprite" id="pokemonSprite" />
          <img
            src={pokemonSpriteShiny}
            alt="Pokemon Sprite"
            id="pokemonSprite"
          />
        </div>
      )}
      <div>Name: {pokeName}</div>
      <div>Dex #: {pokeId}</div>
      <div>Type: {pokeType}</div><br />
      <button onClick={playSound}>Pokemon Cry</button>

      {pokeSound && (
        <audio ref={audioRef} key={pokeSound} src={pokeSound} />
      )}

    </div>
  );
};

export default PokiSearch;

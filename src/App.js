import PokeList from "./components/PokeList";
import pokebanner from "./pokemon-anniversary.PNG";
import professor from "./Professor_Oak.webp";
import "./App.css";

export default function App() {
  const pokeinfo = [
    {
      number: 1,
      name: "Bulbasaur",
      type: "Grass/Poison",
    },
    {
      number: 2,
      name: "Ivysaur",
      type: "Grass/Poison",
    },
    {
      number: 3,
      name: "Venusaur",
      type: "Grass/Poison",
    },
    {
      number: 4,
      name: "Charmander",
      type: "Fire",
    },
    {
      number: 5,
      name: "Charmeleon",
      type: "Fire",
    },
    {
      number: 6,
      name: "Charizard",
      type: "Fire/Flying",
    },
    {
      number: 7,
      name: "Squirtle",
      type: "Water",
    },
    {
      number: 8,
      name: "Wartortle",
      type: "Water",
    },
  ];

  return (
    <div className="PokePage">
      <h1>National Pokedex</h1>
      <img src={pokebanner} alt="best boi" className="PokeBanner"></img>
      <div className="PokeIntro">
        <img src={professor} alt="old boi" width="144.5" height="270"></img>
        <p>
          Hello there! Welcome to the world of Pokémon! My name is Oak! People
          call me the Pokémon Prof! This world is inhabited by creatures called
          Pokémon! For some people, Pokémon are pets. Other use them for fights.
          Myself… I study Pokémon as a profession. Oh, right! I have a request
          of you. On the desk there is my invention, the Pokédex! It
          automatically records data on Pokémon you've seen or caught! It's a
          hi-tech encyclopedia! To make a complete guide on all the Pokémon in
          the world… That was my dream! But, I'm too old! I can't do it! So, I
          want you to fulfill my dream for me! Get moving! This is
          a great undertaking in Pokémon history!
        </p>
      </div>
      <PokeList className="AddMargin" items = {pokeinfo} />
    </div>
  );
}

import PokeList from "./components/PokeList";
import PokeOak from "./components/PokeOak"
import PokeNameForm from "./components/PokeNameForm";
import pokebanner from "./pokemon-anniversary.PNG";
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
      <PokeOak />
      <PokeList className="AddMargin" items = {pokeinfo} />
    </div>
  );
}

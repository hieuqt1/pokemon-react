import Card from "./Card";
import professor from "../Professor_Oak.webp";
import trainerRed from "../Trainer_Red.webp";
import "./PokeOak.css";
import PokeNameForm from "./PokeNameForm";

export default function PokeOak() {
  return (
    <div className="OakIntro">
      <Card className="PokeIntro">
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
          want you to fulfill my dream for me! Get moving! This is a great
          undertaking in Pokémon history!
        </p>
      </Card>
      <Card className="FormIntro">
        <img src={trainerRed} alt="new boi" width="120" height="257"></img>
        <PokeNameForm />
      </Card>
    </div>
  );
}

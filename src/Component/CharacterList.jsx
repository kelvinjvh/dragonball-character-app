import { useContext } from "react";
import { ContextData } from "../Context/DataContext";
import "../CharactersList.css";
import Loading from "./Loading";

export default function CharacterList() {
  const { characterslist, getDetailsCharacter, showloadin } =
    useContext(ContextData);
  return (
    <div className="container">
      {characterslist.map((character) => (
        <div className="characters_cards" key={character.id}>
          <img
            className="characters_cards-img"
            src={character.image}
            alt={character.name}
          />
          <p className="characters_cards-name">{character.name}</p>
          <p className="characters_cards-race">{character.race}</p>
          <button
            onClick={() => getDetailsCharacter(character.id)}
            className="characters_cards-btn"
          >
            Vie Details
          </button>
          
        </div>
      ))}
    </div>
  );
}

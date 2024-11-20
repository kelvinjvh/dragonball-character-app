import { useContext } from "react";
import "./App.css";
import DetailsCharacter from "./Component/DetailsCharacter";
import { ContextData } from "./Context/DataContext";
import SearchForm from "./Component/SearchForm";
import Pagination from "./Component/Pagination";
import CharacterList from "./Component/CharacterList";

function App() {
  const { showcomponent, GetDatacharacter, characterslist } =
    useContext(ContextData);

  return (
    <div id="App">
      <SearchForm />
      <CharacterList />
      {characterslist.length === 0 && (
        <div>
          <h1>Datos No Encontrados</h1>
          <button
            style={{ backgroundColor: "#E88D01" }}
            onClick={() => GetDatacharacter("")}
          >
            Aceptar!
          </button>
        </div>
      )}
      {characterslist.length > 1 && <Pagination />}
      {showcomponent && <DetailsCharacter />}
    </div>
  );
}

export default App;

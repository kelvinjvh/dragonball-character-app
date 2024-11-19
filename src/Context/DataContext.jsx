import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ContextData = createContext();

export const ContextDataProvider = (props) => {
  const [characterslist, setCharacterslist] = useState([]);
  const [detailscharacters, setDetailsCharacters] = useState([]);
  const [showcomponent, setShowComponent] = useState(false);
  const [pagination, setPagination] = useState(1);
  const [error,setError]=useState("");
  const [showloadin,setShowLoading]=useState(false)
  //https://dragonball-api.com/api/characters?page=4&limit=10


  useEffect(() => {
    GetDatacharacter("");
  }, []);

  function GetDatacharacter(name) {
    setShowLoading(true);
    fetch(`https://dragonball-api.com/api/characters?name=${name}`)
      .then((response) => {
        if(!response.ok){
          
          setError("Personaje No Encontrado");
          //throw new Error("no se encontro el personaje")
         
          return;
        }
        setCharacterslist(characterslist)
        setShowLoading(false);
        return response.json();
      })
      .then((results) => {
        name === ""
          ? setCharacterslist(results.items)
          : setCharacterslist(results);
          console.log(error)
      });
  }

  function getDetailsCharacter(idcharacter) {
    ShowHiddenComponent();
    setDetailsCharacters([]);
    setShowLoading(true)
    try {
      fetch(`https://dragonball-api.com/api/characters/${idcharacter}`)
        .then((response) => response.json())
        .then((results) => {
          setDetailsCharacters(results);
          setShowLoading(false)
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    Pagination(pagination);
  }, [pagination]);

  function Pagination(pagination) {
    try {
      fetch(
        `https://dragonball-api.com/api/characters?page=${pagination}&limit=10`
      )
        .then((response) => response.json())
        .then((results) => {
          setCharacterslist(results.items);
        });
    } catch (error) {
      console.log(error);
    }
  }

  function ShowHiddenComponent() {
    setShowComponent(!showcomponent);
  }

  function Previous() {
    pagination !== 1 && setPagination(pagination - 1);
  }
  function Next() {
    pagination < 6 && setPagination(pagination + 1);
    //Pagination();
  }

  return (
    <ContextData.Provider
      value={{
        characterslist,
        setCharacterslist,
        GetDatacharacter,
        getDetailsCharacter,
        detailscharacters,
        ShowHiddenComponent,
        showcomponent,
        setShowComponent,
        Previous,
        Next,
        error,
        setDetailsCharacters,
        showloadin
      }}
    >
      {props.children}
    </ContextData.Provider>
  );
};

import React from "react";
import { useContext } from "react";
import { ContextData } from "../Context/DataContext";
import "../DetailsCharacters.css";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../Component/Loading";

const DetailsCharacter = () => {
  const { detailscharacters, ShowHiddenComponent, showloadin } =
    useContext(ContextData);
  const { name, image, description, transformations } = detailscharacters;
  const [currentdetails, setCurrentDetails] = useState({});
  /* const [transformations,setTransformations]=useState([]) */
  useEffect(() => {
    setCurrentDetails({
      namecharacter: detailscharacters.name,
      imagecharacter: detailscharacters.image,
    });
  }, [detailscharacters]);

  function changedata(newname, newimage) {
    setCurrentDetails({
      ...currentdetails, // Copia las propiedades existentes de detailscharacters
      namecharacter: newname, // Actualiza solo el campo name
      imagecharacter: newimage, // Actualiza solo el campo image
    });
  }

  return (
    <div className="details_character">
      <div className="card_details">
        <header className="card_header">
          <p>{currentdetails.namecharacter}</p>
          <span onClick={ShowHiddenComponent}>❎</span>
        </header>
        <div className="card_description">
          <img
            className="card_img"
            src={currentdetails.imagecharacter}
            alt=""
          />
          <div>
            <p>{currentdetails.namecharacter}</p>
            <p className="card_description-text">{description}</p>
          </div>
        </div>
        <div className="card_transformations">
          {showloadin ? (
            <Loading />
          ) : (
            transformations?.map((item) => (
              <img
                onClick={() => changedata(item.name, item.image)}
                className="transformations_img"
                key={item.id}
                src={item.image}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsCharacter;

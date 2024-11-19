import React from "react";
import { useContext } from "react";
import { ContextData } from "../Context/DataContext";
import "../Pagination.css";
const Pagination = () => {
  const { Previous, Next } = useContext(ContextData);

  return (
    <div className="container_pagination">
      <div className="box_button">
      <span onClick={Previous}>⏮</span>
      <span onClick={Next}>⏩</span>
      </div>
    </div>
  );
};

export default Pagination;

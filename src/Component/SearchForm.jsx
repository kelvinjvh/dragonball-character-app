import { useContext, useState } from "react";
import { ContextData } from "../Context/DataContext";
import "../SearchForm.css";

const SearchForm = () => {
  const {GetDatacharacter,error } = useContext(ContextData);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    /* GetDataApi(text); */
    text !== "" &&  GetDatacharacter(text);
    setText("")
    //alert(error)
  };

  return (
    <header className="header_search">
      <div className="header_logo">
        <img onClick={()=>GetDatacharacter("")} src="./logo.png" alt="" className="header_logo-img" />
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="">Search: </label>
          <input type="search" placeholder="search" value={text} onChange={handleChange} />
          <button>Search</button>
        </div>
        
      </form>
     
    </header>
  );
};

export default SearchForm;

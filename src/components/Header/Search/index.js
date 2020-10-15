import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import "./index.scss"


const Search = () => {
  return (
    <>
      <form action="sublim">
        <FontAwesomeIcon icon={faSearch} inverse/>
        <input type="text" placeholder={'Я ищу...'}/>
        <button onClick={
          function (event) {
            event.preventDefault();
          }
        }>Найти
        </button>
      </form>
    </>

  )
}

export default Search;
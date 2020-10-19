import React from "react";
import "./index.scss"
import {Link} from "react-router-dom";

function CardHead({imgSrc, cardId}) {
  return (
    <div className='card__image'>
      <Link to={`/single/${cardId}`}>
        <img src={imgSrc} alt=""/>
      </Link>
    </div>

  )
}

export default CardHead;
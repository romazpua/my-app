import React from "react";
import "./index.scss"
import {Link} from "react-router-dom";

function CardHead({imgSrc}) {
  return (
    <div className='card__image'>
      <Link to={'/single'}>
        <img src={imgSrc} alt=""/>
      </Link>
    </div>

  )
}

export default CardHead;
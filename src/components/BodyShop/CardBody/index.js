import React from "react";
import "./index.scss"
import {Link} from "react-router-dom";

function CardBody ({title, cardId}){
  return(
    <Link to={`/single/${cardId}`}>{title}</Link>
  )
}

export default CardBody;
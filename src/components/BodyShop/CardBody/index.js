import React from "react";
import "./index.scss"
import {Link} from "react-router-dom";

function CardBody ({title}){
  return(
    // <a href="#">{title}</a>
    <Link to={'/single'}>{title}</Link>
  )
}

export default CardBody;
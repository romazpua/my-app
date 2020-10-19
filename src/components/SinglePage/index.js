import React, {Component} from "react";
import "./index.scss"
import ProductBoxImg from "./ProductBoxImg";
import ProductBoxRight from "./ProductBoxRight";
import {useParams} from "react-router-dom";

function SinglePage() {

  let {id} = useParams();
  let indexCard = --id;

  return (
    <div className="single__page">
      <div className="container">
        <div className='product-box'>
          <ProductBoxImg cardId={indexCard}/>
          <ProductBoxRight cardId={indexCard}/>
        </div>
      </div>
    </div>
  )
}

export default SinglePage;
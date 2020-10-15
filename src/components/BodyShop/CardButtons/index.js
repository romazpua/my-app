import React from "react";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./index.scss"

function CardButtons({price, priceDiscount, priceDiscount2, trust}) {
  return (
    <div className='card__buttons'>
      <div className="card__buttons-row">
        <div className="card__price-discount">
          <p>{priceDiscount}</p>
          <label>{priceDiscount2}</label>
        </div>
        <div className="card__price">
          {price}
        </div>
        <div className="card__price-trust">
          <a href="" style={{color: 'black'}}>
            {trust}
          </a>
        </div>
      </div>
      <div className="card__buttons-row button">
        <div className="product-buy-button">
          <FontAwesomeIcon icon={faShoppingCart} inverse/>
          <p>Купить</p>
        </div>
      </div>
    </div>
  )
}

export default CardButtons;
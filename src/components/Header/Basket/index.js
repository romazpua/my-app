import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBalanceScale, faHeart, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import "./index.scss"



const Basket = () => {
  return (
    <div className='basket'>
      <FontAwesomeIcon icon={faBalanceScale} inverse/>
      <FontAwesomeIcon icon={faHeart} inverse/>
      <FontAwesomeIcon icon={faShoppingCart} inverse/>
    </div>
  )
}

export default Basket;
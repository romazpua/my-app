import React from "react";
import "./index.scss"
const CardFooter = () => {
  return (
    <div className='card__footer'>
        <div className="card__footer_compare">
          <input type="checkbox" id="compare"/>
          <label htmlFor="compare">Сравнить</label>
        </div>
      <div className="card__footer_favorites">
        <input type="checkbox" id="favorites"/>
        <label htmlFor="favorites">В избранное</label>
      </div>
    </div>
  )
}

export default CardFooter;
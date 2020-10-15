import React from "react";
import {faComment, faStar, faWallet} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./index.scss";

function CardColInfo({rating, comments, cashback}) {
  return (
    <div className='card__col-info'>
      <div className="card__col-info-row">
        <div className="card__rating">
          {rating.map((el, index) => (
            el ? <FontAwesomeIcon icon={faStar} key={index} style={{color: '#E95D2A'}}/> :
              <FontAwesomeIcon icon={faStar} key={index} style={{color: '#E5E5E5'}}/>
          ))}
        </div>
        <a href="" className='card__comments'>
          <FontAwesomeIcon icon={faComment} />
          <p>{comments}</p>
        </a>
      </div>
      <div className="card__price-cashback">
        <FontAwesomeIcon icon={faWallet} />
        <p>Кенбэк: {cashback}</p>
      </div>
    </div>
  )
}

export default CardColInfo;
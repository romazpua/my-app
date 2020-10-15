import React from "react";
import {faCreditCard, faMapMarkedAlt, faShippingFast, faSun} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./index.scss"

const Information = () => {
  return (
    <div className='information'>
      <div className="container">
        <div className="information__items">
          <div className="information__item">
            <div className="information__item_pic">
              <FontAwesomeIcon icon={faMapMarkedAlt}/>
            </div>
            <div className="information__item_text">
              <h4>Магазины работают!</h4>
              <p>Покупай безопасно, все санитарные меры соблюдены</p>
            </div>
          </div>
          <div className="information__item">
            <div className="information__item_pic">
              <FontAwesomeIcon icon={faSun}/>
            </div>
            <div className="information__item_text">
              <h4>Более комфортные условия</h4>
              <p>Сроки возврата, обмена товара продлены</p>
            </div>
          </div>
          <div className="information__item">
            <div className="information__item_pic">
              <FontAwesomeIcon icon={faCreditCard}/>
            </div>
            <div className="information__item_text">
              <h4>Кредитование</h4>
              <p>Удобно оформляй оплату частями или рассрочку</p>
            </div>
          </div>
          <div className="information__item">
            <div className="information__item_pic">
              <FontAwesomeIcon icon={faShippingFast}/>
            </div>
            <div className="information__item_text">
              <h4>БЕСПЛАТНАЯ доставка</h4>
              <p>Получай заказ быстро и безопасно в удобное время</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information;
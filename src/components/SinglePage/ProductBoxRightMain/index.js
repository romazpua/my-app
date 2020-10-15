import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCalendar,
    faChartPie,
    faExclamationCircle,
    faPaw,
    faShoppingCart,
    faWallet
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss"

const ProductBoxRightMain =()=>{
    return(
        <div className="product-box__main">
            <div className="product-box__main-row">
                <div className="product-box__main-price">
                    <div className="product-box__main_nice-price">
                        <img src={require("../../../img/button_nice-price.png")} alt=""/>
                    </div>
                    <div className="product-box__main-price__info">
                        <FontAwesomeIcon icon={faExclamationCircle} inverse/>
                        <label>Финальная цена</label>
                    </div>
                    <div className="product-box__main-price__discount">
                        <p>21 999</p>
                        <label>-2 000</label>
                    </div>
                    <div className="product-box__main-price__main">
                        <div className="card-price">19 999 ₴</div>
                    </div>
                </div>
                <div className="product-box__main-buy">
                    <div className="product-box__main-buy__cashback">
                        <FontAwesomeIcon icon={faWallet} inverse/>
                        Кэшбек: 199 $
                    </div>
                    <div className="product-box__main-buy__button">
                        <FontAwesomeIcon icon={faShoppingCart} inverse/>
                        <p>Купить</p>
                    </div>
                    <a className="button-link">
                        <label>Быстрая покупка</label>
                    </a>
                </div>
            </div>
            <div className="product-box__main-row">
                <div className="product-box__main-buyloans">
                    <ul className='product-box__main-buyloans__credits'>
                        <li>
                            <FontAwesomeIcon icon={faPaw}/>
                            <div className="credit">8</div>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faChartPie}/>
                            <div className="credit">12</div>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCalendar}/>
                            <div className="credit">24</div>
                        </li>
                    </ul>
                    <div className="product-box__main-buy__button">
                        <FontAwesomeIcon icon={faShoppingCart} inverse/>
                        <p>Купить в кредит</p>
                    </div>
                    <div className="product-box__main-buyloans__trust">
                        от 834 ₴/мес
                    </div>
                </div>
                <div className="product-box__main-buynow">
                    <div className="product-box__main-code">Код: 6561778</div>
                    <a className="button-link">
                        <label>ЗАБРАТЬ СЕГОДНЯ</label>
                    </a>
                    <div className="product-box__main-buynow__shops">13 магазинов</div>
                </div>
            </div>
        </div>
    )
}

export default ProductBoxRightMain
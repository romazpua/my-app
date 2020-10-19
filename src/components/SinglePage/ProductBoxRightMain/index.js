import React, {Component} from "react";
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
import {connect} from "react-redux";

class ProductBoxRightMain extends Component {
  render() {
    return (
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
              <p>{this.props.cards[this.props.cardId].priceDiscount}</p>
              <label>{this.props.cards[this.props.cardId].priceDiscount2}</label>
            </div>
            <div className="product-box__main-price__main">
              <div className="card-price">{this.props.cards[this.props.cardId].price}</div>
            </div>
          </div>
          <div className="product-box__main-buy">
            <div className="product-box__main-buy__cashback">
              <FontAwesomeIcon icon={faWallet} inverse/>
              Кэшбек: {this.props.cards[this.props.cardId].cashback}
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
                <div className="credit">{this.props.cards[this.props.cardId].credit.mono}</div>
              </li>
              <li>
                <FontAwesomeIcon icon={faChartPie}/>
                <div className="credit">{this.props.cards[this.props.cardId].credit.parts}</div>
              </li>
              <li>
                <FontAwesomeIcon icon={faCalendar}/>
                <div className="credit">{this.props.cards[this.props.cardId].credit.month}</div>
              </li>
            </ul>
            <div className="product-box__main-buy__button">
              <FontAwesomeIcon icon={faShoppingCart} inverse/>
              <p>Купить в кредит</p>
            </div>
            <div className="product-box__main-buyloans__trust">
              {this.props.cards[this.props.cardId].trust}
            </div>
          </div>
          <div className="product-box__main-buynow">
            <div className="product-box__main-code">Код: {this.props.cards[this.props.cardId].codeOfProduct}</div>
            <a className="button-link">
              <label>ЗАБРАТЬ СЕГОДНЯ</label>
            </a>
            <div className="product-box__main-buynow__shops">13 магазинов</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => ({
  cards: store.cardsRoot.cards
})

export default connect(mapStateToProps, null)(ProductBoxRightMain);
import React, { Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faChartPie} from "@fortawesome/free-solid-svg-icons";
import "./index.scss"
import {connect} from "react-redux";

class ProductBoxImg extends Component{
  render() {
    return (
      <div className="product-img">
        <div className="product-img__wrap">
          <div className="product-img__main">
            <div className="product-img__main-over">
              <div className="product-img__main-tags">
                <ul className='hidden-overflow'>
                  <li className='card-tags__item'>
                    <div className="action-icon">
                      <img src={require("../../../img/icon_76_ru.svg")} style={{display: this.props.cards[this.props.cardId].headOfProductForSingle.sale}} alt="icon"/>
                    </div>
                  </li>
                  <li className='card-tags__item'>
                    <div className="action-icon">
                      <img src={require("../../../img/icon_77_ru.svg")} style={{display: this.props.cards[this.props.cardId].headOfProductForSingle.top}} alt="icon"/>
                    </div>
                  </li>
                  <li className='card-tags__item'>
                    <div className="action-icon">
                      <img src={require("../../../img/icon_94_ru.svg")} style={{display: this.props.cards[this.props.cardId].headOfProductForSingle.cashb}} alt="icon"/>
                    </div>
                  </li>
                  <li className='card-tags__item'>
                    <div className="action-icon">
                      <img src={require("../../../img/icon_67_ru.svg")} style={{display: this.props.cards[this.props.cardId].headOfProductForSingle.exclusive}} alt="icon"/>
                    </div>
                  </li>
                </ul>
              </div>
              <ul className="product-img__main-credits">
                <li className='icon'>
                  <FontAwesomeIcon icon={faChartPie}/>
                  <p className="credit">{this.props.cards[this.props.cardId].credit.parts}</p>
                </li>
                <li className='icon'>
                  <FontAwesomeIcon icon={faCalendar}/>
                  <p className="credit">{this.props.cards[this.props.cardId].credit.month}</p>
                </li>
              </ul>
            </div>
            <div className="product-img__carousel">
              <img src={this.props.cards[this.props.cardId].imgSrcBig}
                   alt=""/>
            </div>
          </div>
        </div>
        <div className="product-img__specs">
          <ul>
            <li><label>Гарантия</label><p>12 мес. </p></li>
            <li><label>Модельный ряд</label><p>Asus TUF</p></li>
            <li><label>Диагональ дисплея</label><p>15.6 "</p></li>
            <li><label>Разрешение дисплея</label><p>1920 x 1080 </p></li>
          </ul>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (store) => ({
  cards: store.cardsRoot.cards
})

export default connect(mapStateToProps, null)(ProductBoxImg);
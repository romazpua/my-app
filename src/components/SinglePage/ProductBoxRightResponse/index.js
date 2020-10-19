import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment, faStar} from "@fortawesome/free-solid-svg-icons";
import "./style.scss"
import {connect} from "react-redux";

class ProductBoxRightResponse extends Component {

  render() {
    return (
      <div className="product-box__response">
        <div className="product-box__response-review">
          <div className="product-box__response-rating">
            {this.props.cards[this.props.cardId].rating.map((el, index) => (
              el ? <FontAwesomeIcon icon={faStar} key={index} style={{color: '#E95D2A'}}/> :
                <FontAwesomeIcon icon={faStar} key={index} style={{color: '#E5E5E5'}}/>
            ))}
          </div>
          <a className="product-box__response-comments">
            <FontAwesomeIcon icon={faComment} style={{color: '#E95D2A'}}/>
            <p>{this.props.cards[this.props.cardId].comments}</p>
          </a>
        </div>
        <div className="product-box__response-text">
          {this.props.cards[this.props.cardId].peopleAddFavor} человек добавили этот товар в избранное
        </div>
        <div className='product-box__response-buttons'>
          <div className="product-box__response-button">
            <input type="checkbox" id="compare"/>
            <label htmlFor="compare">Сравнить</label>
          </div>
          <div className="product-box__response-button">
            <input type="checkbox" id="favorites"/>
            <label htmlFor="favorites">В избранное</label>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => ({
  cards: store.cardsRoot.cards
})

export default connect(mapStateToProps, null)(ProductBoxRightResponse);
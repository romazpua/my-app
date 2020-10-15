import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment, faStar} from "@fortawesome/free-solid-svg-icons";
import "./style.scss"

const ProductBoxRightResponse = () => {
    return (
        <div className="product-box__response">
            <div className="product-box__response-review">
                <div className="product-box__response-rating">
                    <FontAwesomeIcon icon={faStar} style={{color: '#E95D2A'}}/>
                    <FontAwesomeIcon icon={faStar} style={{color: '#E95D2A'}}/>
                    <FontAwesomeIcon icon={faStar} style={{color: '#E95D2A'}}/>
                    <FontAwesomeIcon icon={faStar} style={{color: '#E95D2A'}}/>
                    <FontAwesomeIcon icon={faStar} style={{color: '#E5E5E5'}}/>
                </div>
                <a className="product-box__response-comments">
                    <FontAwesomeIcon icon={faComment} style={{color: '#E95D2A'}}/>
                    <p>154</p>
                </a>
            </div>
            <div className="product-box__response-text">
                265 человек добавили этот товар в избранное
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

export default ProductBoxRightResponse;
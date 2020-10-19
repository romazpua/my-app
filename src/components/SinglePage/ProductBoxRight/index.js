import React from "react";
import "./index.scss"
import ProductBoxRightMain from "../ProductBoxRightMain";
import ProductBoxRightResponse from "../ProductBoxRightResponse";


const ProductBoxRight = ({cardId}) => {
    return (
        <div className="product-box__right">
            <div className="product-box__ad">
                <div className="product-box__ad-label">
                    <p>Кредит до 25 платежей</p>
                </div>
                <div className="product-box__ad-timer">
                    <label>СРОКИ ДЕЙСТВИЯ АКЦИИ</label>
                    <p>с 10-09-2020 по 23-09-2020</p>
                </div>
            </div>

            <ProductBoxRightMain cardId={cardId}/>

            <ProductBoxRightResponse cardId={cardId}/>

        </div>
    )
}

export default ProductBoxRight;

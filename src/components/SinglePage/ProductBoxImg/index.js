import React, {useState, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faChartPie} from "@fortawesome/free-solid-svg-icons";
import "./index.scss"
import {connect} from "react-redux";

const ProductBoxImg =()=>{

    return(
        <div className="product-img">
            <div className="product-img__wrap">
                <div className="product-img__main">
                    <div className="product-img__main-over">
                        <div className="product-img__main-tags">
                            <ul className='hidden-overflow'>
                                <li className='card-tags__item'>
                                    <div className="action-icon">
                                        <img src={require("../../../img/icon_76_ru.svg")} alt="icon"/>
                                    </div>
                                </li>
                                <li className='card-tags__item'>
                                    <div className="action-icon">
                                        <img src={require("../../../img/icon_77_ru.svg")} alt="icon"/>
                                    </div>
                                </li>
                                <li className='card-tags__item'>
                                    <div className="action-icon">
                                        <img src={require("../../../img/icon_94_ru.svg")} alt="icon"/>
                                    </div>
                                </li>
                                <li className='card-tags__item'>
                                    <div className="action-icon">
                                        <img src={require("../../../img/icon_67_ru.svg")} alt="icon"/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <ul className="product-img__main-credits">
                            <li className='icon'>
                                <FontAwesomeIcon icon={faChartPie}/>
                                <p className="credit">12</p>
                            </li>
                            <li className='icon'>
                                <FontAwesomeIcon icon={faCalendar}/>
                                <p className="credit">24</p>
                            </li>
                        </ul>
                    </div>
                    <div className="product-img__carousel">
                        <img src={require('../../../img/BIG_ASUS_TUF_FX505DT-BQ143_Stealth_Black.jpg')}
                             alt=""/>
                    </div>
                </div>
            </div>
            <div className="product-img__specs">
                <ul>
                    <li><label>Гарантия</label><p>12 мес.</p></li>
                    <li><label>Модельный ряд</label><p>Asus TUF</p></li>
                    <li><label>Диагональ дисплея</label><p>15.6 "</p></li>
                    <li><label>Разрешение дисплея</label><p>1920 x 1080 </p></li>
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (store) => ({
    cards: store.cardsRoot.cards
})

export default connect(mapStateToProps, null)(ProductBoxImg);
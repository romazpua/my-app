import React from "react";
import "./index.scss"
import {faCog, faTh} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const NavMenu = () => {
  return (
    <div className="nav_menu">
      <Link className={'catalog'} to={'/'}><FontAwesomeIcon icon={faTh} inverse/>
        Каталог товаров</Link>
      <ul className='menu'>
        <li><a href="https://www.foxtrot.com.ua/ru/shop/mobilnye_telefony_smartfon.html">Смартфоны</a></li>
        <li><Link to={'/clicker'}>CLICKER</Link></li>
        <li><Link to={'/54654'}>404</Link></li>
        <li><a href="https://www.foxtrot.com.ua/ru/portal-krupnaya-bitovaya-tehnika.html">Техника для кухни</a></li>
        <li><a href="https://www.foxtrot.com.ua/ru/portal-stirka-glazhka.html">Техника для дома</a></li>
      </ul>
      <a href="" className='nav_menu-sale'>
        <FontAwesomeIcon icon={faCog} inverse/>
        Распродажа <span> до -80%</span></a>
    </div>
  )
}

export default NavMenu;
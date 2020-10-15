import React from "react";
import Logo from "./Logo";
import "./index.scss"
import Search from "./Search";
import Basket from "./Basket";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <header>
      <div>
        <Logo/>
        <Search/>
        <Basket/>
      </div>
      <NavMenu/>
    </header>
  )
}

export default Header;
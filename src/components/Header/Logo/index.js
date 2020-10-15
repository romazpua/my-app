import React from "react";
import {Link} from "react-router-dom";
import './index.scss'

const Logo = () => {
  return (
    <Link className={'logo'} to={'/'}>
      <img src={require("./logo-white.png")} alt="logo"/>
    </Link>
  )
}

export default Logo;
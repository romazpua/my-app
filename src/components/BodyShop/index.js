import React, {Component} from "react";
import Card from "./Card";
import Brands from "./Brands";
import "./index.scss"
import Information from "./Information";
import Redax from "../Redux";

class BodyShop extends Component{
  render() {
    return (
      <div className="container">
        <div className="cards">
          <Information/>
          <Brands/>
          <Redax/>
          <h2>Лучшие ценовые предложения</h2>
          <Card/>
        </div>
      </div>
    );
  }
}

export default BodyShop;
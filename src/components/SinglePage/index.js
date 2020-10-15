import React, {Component} from "react";
import "./index.scss"
import ProductBoxImg from "./ProductBoxImg";
import ProductBoxRight from "./ProductBoxRight";

class SinglePage extends Component {
  render() {
    return (
      <div className="single__page">
        <div className="container">
          <div className='product-box'>
            <ProductBoxImg/>
            <ProductBoxRight/>
          </div>
        </div>
      </div>
    )
  }
}

export default SinglePage;
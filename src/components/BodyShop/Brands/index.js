import React from "react";
import "./index.scss"

const Brands = () => {
  return (
    <div className='brands'>
      <div className="container">
        <div className="brands__wrap">
          <a href=""><img src={require('./../../../img/imgs_for_Brands/samsung.jpg')} alt=""/></a>
          <a href=""><img src={require('./../../../img/imgs_for_Brands/huawei.jpg')} alt=""/></a>
          <a href=""><img src={require('./../../../img/imgs_for_Brands/apple.jpg')} alt=""/></a>
          <a href=""><img src={require('./../../../img/imgs_for_Brands/xiaomi.jpg')} alt=""/></a>
          <a href=""><img src={require('./../../../img/imgs_for_Brands/lg.jpg')} alt=""/></a>
          <a href=""><img src={require('./../../../img/imgs_for_Brands/hisense.jpg')} alt=""/></a>
        </div>
      </div>
    </div>
  )
}

export default Brands;
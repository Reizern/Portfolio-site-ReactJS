import React from "react";
import { Link } from 'react-router-dom';
import Burger from "./Burger";

function HeaderTwo() {
  return(
    <div className="banner-two">
      <div className="banner-two-info">
        <div className="container">
          <div className="logo">
            <div className="ribbon">
              <Link to='/'><div className="ribbon-fold"><h1> Pizza</h1></div></Link>
            </div>
            <h2>Better Ingredients better Pizza</h2>
          </div>
          <Burger/>
        </div>
      </div>
    </div>
  )
}

export default HeaderTwo;

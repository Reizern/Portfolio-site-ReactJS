import React from "react";

function Footer() {
  return(
    <div className="footer">
      <div className="container2">
        <div className="footer-left">
          <h4>Address</h4>
          <ul>
            <li>New York Restaurant</li>
            <li>3926 Anmoore Road</li>
            <li>New York, NY 10014</li>
            <li>718-749-1714</li>
          </ul>
        </div>
        <div className="footer-left">
          <h4>Popular</h4>
          <ul>
            <li><a href="#">Proin placerat</a></li>
            <li><a href="#">Ipsum et rutrum</a></li>
            <li><a href="#">Proin semper utr</a></li>
            <li><a href="#">ligula sit amet</a></li>
          </ul>
        </div>
        <div className="footer-left">
          <h4>Details</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <p> © 2020 Pizza . All rights reserved | Design by Reizern</p>
          <div className="icons">
            <ul>
              <li><a href="#" className="twitter"> </a></li>
              <li><a href="#" className="twitter facebook"> </a></li>
              <li><a href="#" className="twitter chrome"> </a></li>
              <li><a href="#" className="twitter pinterest"> </a></li>
              <li><a href="#" className="twitter linkedin"> </a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;

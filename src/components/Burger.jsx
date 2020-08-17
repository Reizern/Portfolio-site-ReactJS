import React from "react";
import { Link } from 'react-router-dom';


export default class Burger extends React.Component {

  state = {
    toggleClass: false
  };

  toggleFunction = ()=>{
    this.setState({toggleClass: !this.state.toggleClass})
  };

  render() {
    return (
      <>
        <div className="menu-burger">
          <button className="burger" onClick={this.toggleFunction}>
            <span>Menu</span>
          </button>
        </div>
        <div className="top-nav">
          <div className={this.state.toggleClass?'open':'burger-nav'}>
            <ul className="nav">
              <Link to='/'><li>Home</li></Link>
              <Link to='/about'><li>About</li></Link>
              <Link to='/gallery'><li>Gallery</li></Link>
              <Link to='/contact'><li>Contact</li></Link>
            </ul>
          </div>
        </div>
      </>
    )
  }
}

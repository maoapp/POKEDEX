// @vendors
import React from 'react';
import { NavLink } from "react-router-dom";

// @ styles
import './NavBar.scss';

const logo = require('../../assets/png/pokebola-logo.png');

const NavBar = ({user}) => (
    <nav className="navBar navbar fixed-top">
      <div className="container">
        <NavLink exact to="" className="navBar__brand navbar-brand" href="">Pokeapp</NavLink>
        <div className="navBar__infoContainer">
          {user.isLogged && <h6>{user.email}</h6>}
          <img src={logo} className="navBar__logo" alt="pokeball_logo"/>
        </div>
      </div>
    </nav>
);

export default NavBar;

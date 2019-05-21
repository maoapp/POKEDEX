// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

// @ styles
import './NavBar.scss';

const logo = require('../../assets/png/pokebola-logo.png');

const NavBar = ({user}) => (
    <nav className="navBar navbar fixed-top">
      <div className="navBar__container container">
        <div className="navBar__optionsMenu">
          <li className="navBar__brand navbar-brand" href="">Pokedex</li>
          {user.isLogged && <React.Fragment>
            <NavLink className="navBar__optionMenu" exact to="/" href="">Home</NavLink>
            <NavLink className="navBar__optionMenu" to="/login" href="">Logout</NavLink>
          </React.Fragment>}
        </div>
        <div className="navBar__infoContainer">
          {user.isLogged && <NavLink className="navBar__user" to="/register">{user.email}</NavLink>}
          <img src={logo} className="navBar__logo" alt="pokeball_logo"/>
        </div>
      </div>
    </nav>
);

NavBar.propTypes = {
  user: PropTypes.object
};

export default NavBar;

// @vendor
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

// @styles
import './Form.scss';

// @assets
const pokeballImage = require('../../assets/png/pokeball-form.png');

const LoginForm = ({email, password, userInvalid, onChangeField, onSubmitForm}) => (
  <React.Fragment> 
    <div className="form__pictureContainer">
      <img className="form__picture" src={pokeballImage} alt="pokeball"/>
    </div> 
    <section className="form">
    <h3>Lets start</h3>
      <form>
        <label htmlFor="email">Email</label>
        <input name="email"  type="email" value={email} onChange={e => onChangeField(e)} required/>
        <label htmlFor="other">Password</label>
        <input name="password"  type="password" value={password} onChange={e => onChangeField(e)}/>
        <button 
          type="submit" 
          onClick={e => onSubmitForm(e)} 
          disabled={!email || !password}
        >
          Login
        </button>
      </form>
      <div>
        <h5 className="form__registerInfo">If you are not user sing up <NavLink to="register"> here</NavLink></h5>
        {userInvalid && <h6 className="form__errorMessage">Correo o contraseña invalidos</h6>}
      </div>
    </section>
  </React.Fragment>
);

LoginForm.propTypes = {
  email: PropTypes.string, 
  password: PropTypes.string, 
  onChangeEmail: PropTypes.func, 
  userInvalid: PropTypes.bool, 
  onChangePassword: PropTypes.func, 
  onSubmitForm: PropTypes.func
};

export default LoginForm;

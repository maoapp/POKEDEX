// @vendor
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

// @styles
import './Form.scss';

// @assets
const pokeballImage = require('../../assets/png/pokeball-form.png');

const LoginForm = ({email, password, onChangeEmail, userInvalid, onChangePassword, onSubmitForm}) => (
  <React.Fragment> 
    <div className="formLogin__picture">
      <img src={pokeballImage} style={{height: 70, width: 70}} alt="pokeball"/>
    </div> 
    <section className="formLogin">
    <h3>Lets start</h3>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" value={email} onChange={e => onChangeEmail(e)} required/>
        <label htmlFor="other">Password</label>
        <input type="password" value={password} onChange={e => onChangePassword(e)}/>
        <button type="submit" onClick={e => onSubmitForm(e)}>Login</button>
      </form>
      <div>
        <h5 style={{marginTop: 15}}>If you are not user sing up <NavLink to="register"> here</NavLink></h5>
        {userInvalid && <h6 className="alert">Correo o contraseña invalidos</h6>}
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

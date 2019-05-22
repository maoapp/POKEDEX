// @vendor
import React from 'react';
import PropTypes from 'prop-types';

// @styles
import './Form.scss';

// @components
import ErrorsForm from '../errorsForm/ErrorsForm';

// @assets
const pokeballImage = require('../../assets/png/pokeball-form.png');

const RegisterForm = (
  {
    confirmPassword,
    email, 
    firstName, 
    formErrors,
    formValid,
    goBack,
    isLogged,
    lastName, 
    onChangeField,
    onSubmitForm,
    password
  }) => (
  <React.Fragment>
    <div className="formRegister__picture">
      <img src={pokeballImage} className="formRegister__pokeball" alt="pokeball"/>
    </div> 
    <section className="formRegister">
      <h3>{!isLogged ? `Sing up to be a new pokemon trainer` : 'Welcome to edit form'}</h3>
      {!formValid && !isLogged && <h6 style={{color: '#db4439'}}>All fields are mandatories</h6>}
      <form>
        <label htmlFor="first name">* First Name</label>
        <input 
          name="firstName" 
          type="text" 
          value={firstName} 
          onChange={e => onChangeField(e)} 
        />
        <label htmlFor="last name">* Last Name</label>
        <input 
          name="lastName" 
          type="text" 
          value={lastName} 
          onChange={e => onChangeField(e)} 
        />
        <label htmlFor="email">* Email</label>
        <input 
          name="email" 
          type="email" 
          value={email} 
          onChange={e => onChangeField(e)}
          disabled={isLogged}
          required 
        />
        <label htmlFor="password">* Password</label>
        <input 
          name="password" 
          type="password" 
          value={password} 
          onChange={e => onChangeField(e)}
        />
        <label htmlFor="confirm password">* Confirm Password</label>
        <input 
          name="confirmPassword" 
          type="password" 
          value={confirmPassword} 
          onChange={e => onChangeField(e)}
          disabled={!password && !confirmPassword}
        />
        <ErrorsForm errors={formErrors}/>
        <button 
          type="submit" 
          onClick={e => onSubmitForm(e)} 
          disabled={!formValid
        }>
          {!isLogged ? `Sing up` : 'Update'}
        </button>
        {!isLogged && <button className="close" onClick={() => goBack()}>Cancel</button>}
      </form>
    </section>
  </React.Fragment>  
);

RegisterForm.propTypes = {
  confirmPassword: PropTypes.string, 
  email: PropTypes.string, 
  firstName: PropTypes.string, 
  formErrors: PropTypes.object,
  formValid: PropTypes.bool,
  goBack: PropTypes.func,
  lastName: PropTypes.string, 
  onChangeField: PropTypes.func,
  onSubmitForm: PropTypes.func,
  password: PropTypes.string
};

export default RegisterForm;

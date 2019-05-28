// @vendors
import React from 'react';

// @components
import RegisterForm from 'components/registerForm/RegisterForm';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        user: {
          firstName: props.user.firstName || '',
          lastName: props.user.lastName || '',
          email: props.user.email || '',
          password: '',
          confirmPassword: ''
        },
        formErrors: {email: '', password: '', confirmPassword: ''},
        emailValid: false,
        formValid: false,
        passwordValid: false,
        passwordsMatched: false 
    }

    this.goBack = this.goBack.bind(this);
    this.onChangeField = this.onChangeField.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onValidateForm = this.onValidateForm.bind(this);
    this.onValidateField = this.onValidateField.bind(this);
  }

  onChangeField(e) {
    const { user } = this.state;
    const name = e.target.name;
    const value = e.target.value;

    this.setState({user: {...user, [name]: value}}, () => this.onValidateField(name));
  }

  onValidateField(fieldName) {
    const { emailValid, formErrors, passwordValid, user } = this.state;
    const { email, password, confirmPassword } = user;

    let fieldValidationErrors = formErrors;
    let emailIsValid = emailValid;
    let passwordIsValid = passwordValid;

    const passwordsMatch = password.length === confirmPassword.length;

    switch(fieldName) {
      case 'email':
        emailIsValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailIsValid ? '' : ' is invalid';
        break;
      case 'password':
        const regexPassword = '^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';

        passwordIsValid = password.match(regexPassword);
        fieldValidationErrors.password = passwordIsValid 
          ? '' : 'should has minimium 8 character, two uppercase letters, one special character and one number';
        
        fieldValidationErrors.confirmPassword = passwordsMatch  ? '' : 'Dont match with password';
        break;
      case 'confirmPassword':
        fieldValidationErrors.confirmPassword = passwordsMatch ? '' : 'Dont match with password';
        break;  
      default:
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailIsValid,
      passwordValid: passwordIsValid,
      passwordsMatched: passwordsMatch
    }, this.onValidateForm);
  } 
  
  onValidateForm() {
    const { emailValid, passwordValid, passwordsMatched, user } = this.state;
    const { firstName, lastName } = user;
    const validations = (emailValid || this.props.user.isLogged) && passwordValid && passwordsMatched && firstName && lastName;

    this.setState(
      {
        formValid: validations
      }
    );
  }

  onSubmitForm(e) {
    e.preventDefault();
    const { user } = this.state;
    const { registerUser, history } = this.props;

    registerUser(user);
    history.push('/');
  };

  goBack() {
    const { history } = this.props;

    history.push('/login');
  }

  render() {
    const { user, emailValid, formErrors, formValid } = this.state;

    return (
      <RegisterForm 
        {...
          {
            emailValid,
            formValid: formValid,
            formErrors,
            goBack: this.goBack,
            isLogged: this.props.user.isLogged,
            onChangeField: this.onChangeField,
            onSubmitForm: this.onSubmitForm,
            onValidateEmail: this.onValidateEmail,
            ...user
          }
        }
      />
    );
  }
}

export default Register;

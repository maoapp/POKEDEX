// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @components
import LoginForm from '../components/loginForm/LoginForm';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

	componentWillReceiveProps(nextProps) {
    const { isLogged } = nextProps;
    const { history } = this.props;

		if (isLogged) {
			history.push('/');
		}
	}

  onChangeEmail(e) {
    this.setState({email: e.target.value})
  }

  onChangePassword(e) {
    this.setState({password: e.target.value})
  }

  onSubmitForm(e) {
    e.preventDefault();
    const { loginRequest } = this.props;
    const { email, password } = this.state;
    const user = {
      email,
      password
    }

    loginRequest(user);
  };

  render() {
    const { email, password } = this.state;
    const { userInvalid } = this.props;

    return (
      <LoginForm 
        {...
          {
            email, 
            password, 
            userInvalid,
            onChangeEmail: this.onChangeEmail, 
            onChangePassword: this.onChangePassword,
            onSubmitForm: this.onSubmitForm
          }
        }
      />
    );
  }
}

Login.propTypes = {
  userInvalid: PropTypes.bool
};

export default Login;

// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @components
import LoginForm from '../components/loginForm/LoginForm';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {
        email: '',
        password: ''
      }
    }

    this.onChangeField = this.onChangeField.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  componentDidMount() {
    const { logout } = this.props;
    
    logout();
  }

	componentWillReceiveProps(nextProps) {
    const { isLogged } = nextProps;
    const { history } = this.props;

		if (isLogged) {
			history.push('/');
		}
	}

  onChangeField(e) {
    const { user } = this.state;
    const name = e.target.name;
    const value = e.target.value;

    this.setState({user: {...user, [name]: value}});
  }

  onSubmitForm(e) {
    e.preventDefault();
    const { loginRequest } = this.props;
    const { user } = this.state;

    if(user.email && user.password) {
      loginRequest(user);
    }
  };

  render() {
    const { user } = this.state;
    const { userInvalid } = this.props;

    return (
      <LoginForm 
        {...
          {
            ...user,
            userInvalid,
            onChangeField: this.onChangeField,
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

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions/pokedex';

import Login from '../pages/Login';

const mapStateToProps = ({ pokedexReducer }) => {
	return {
    isLogged: pokedexReducer.user.isLogged,
    userInvalid: pokedexReducer.user.userInvalid
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(Actions, dispatch);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);

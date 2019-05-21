import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions/pokedex';

import NavBar from '../components/navBar/NavBar';

const mapStateToProps = ({ pokedexReducer }) => {
	return {
    user: pokedexReducer.user
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(Actions, dispatch);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NavBar);

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions/pokedex';

import PokemonDetail from '../pages/PokemonDetail';

const mapStateToProps = ({ pokedexReducer }) => {
	return {
    pokemonDetail: pokedexReducer.pokemonDetail
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(Actions, dispatch);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PokemonDetail);

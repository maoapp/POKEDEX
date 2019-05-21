// @vendors
import axios from 'axios';
import isEqual from 'lodash/isEqual';

// @actiontypes
import {
  LOGIN_USER_SUCCESSFUL,
  LOGIN_USER_FAILURE,
  REGISTER_USER,
  REQUEST_POKEMONS,
  REQUEST_POKEMONS_FAILURE,
  REQUEST_POKEMONS_SUCCESSFUL,
  REQUEST_POKEMON_DETAIL,
  REQUEST_POKEMON_DETAIL_SUCCESSFUL,
  REQUEST_POKEMON_DETAIL_FAILURE
} from '../constants/actionTypes';

// @constants
import { API_URL, ENDPOINTS, LIMIT } from '../constants/constants';

const registerUser = user => dispatch => {
  dispatch({
    type: REGISTER_USER,
    payload: user
  })
}

const loginSuccesful = () => ({
  type: LOGIN_USER_SUCCESSFUL
});

const loginFailure = () => ({
  type: LOGIN_USER_FAILURE
});

const loginRequest = userData => (dispatch, getState) => {
  const { user } = getState().pokedexReducer; 
  const userRegistered = {
    email: user.email,
    password: user.password
  };

  if(isEqual(userRegistered, userData)) {
    dispatch(loginSuccesful())
  } else {
    dispatch(loginFailure())
  }
};

const fetchPokemons = () => dispatch => {
	const { POKEMONS } = ENDPOINTS;
	const url = `${API_URL}/${POKEMONS}?limit=${LIMIT}`;
  
	dispatch(pokemonsRequest());
	axios.get(url)
		.then(res => dispatch(pokemonsRequestSuccesful(res.data.results)))
		.catch(() => dispatch(pokemonsRequestFailure()));
};

const pokemonsRequest = () => ({
	type: REQUEST_POKEMONS
});

const pokemonsRequestFailure = () => ({
	type: REQUEST_POKEMONS_FAILURE
});

const pokemonsRequestSuccesful = data => ({
  type: REQUEST_POKEMONS_SUCCESSFUL,
  payload: data
});

const fetchPokemonDetail = index => dispatch => {
	const { POKEMON_DETAIL } = ENDPOINTS;
  const url = `${API_URL}/${POKEMON_DETAIL}`;
  const urlApi = url.replace('{index}', index);
 
	dispatch(pokemonDetailsRequest());
	axios.get(urlApi)
		.then(res => dispatch(pokemonDetailsRequestSuccesful(res.data)))
		.catch(() => dispatch(pokemonDetailsRequestFailure()));
};

const pokemonDetailsRequest = () => ({
	type: REQUEST_POKEMON_DETAIL
});

const pokemonDetailsRequestFailure = () => ({
	type: REQUEST_POKEMON_DETAIL_FAILURE
});

const pokemonDetailsRequestSuccesful = data => ({
  type: REQUEST_POKEMON_DETAIL_SUCCESSFUL,
  payload: data
});

export {
  fetchPokemons,
  fetchPokemonDetail,
  loginRequest,
  registerUser
}

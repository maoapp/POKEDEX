// @vendors
import axios from 'axios';
import isEqual from 'lodash/isEqual';

// @actiontypes
import {
  LOGIN_USER_SUCCESSFUL,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  REGISTER_USER,
  REQUEST_POKEMONS,
  REQUEST_POKEMONS_FAILURE,
  REQUEST_POKEMONS_SUCCESSFUL,
  REQUEST_POKEMON_DETAIL,
  REQUEST_POKEMON_DETAIL_SUCCESSFUL,
  REQUEST_POKEMON_DETAIL_FAILURE,
  REQUEST_POKEMON_EVOLUTION_CHAIN,
  REQUEST_POKEMON_EVOLUTION_CHAIN_SUCCESSFUL,
  REQUEST_POKEMON_EVOLUTION_CHAIN_FAILURE
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

const logout = () => dispatch => dispatch({type: LOGOUT_USER});

const fetchPokemons = (pag = LIMIT) => dispatch => {
	const { POKEMONS } = ENDPOINTS;
	const url = `${API_URL}/${POKEMONS}?limit=${pag}`;

	dispatch(pokemonsRequest());
  axios.get(url)
		.then(res => dispatch(pokemonsRequestSuccesful(res.data.results, pag)))
		.catch(() => dispatch(pokemonsRequestFailure()));
};

const pokemonsRequest = () => ({
	type: REQUEST_POKEMONS
});

const pokemonsRequestFailure = () => ({
	type: REQUEST_POKEMONS_FAILURE
});

const pokemonsRequestSuccesful = (data, list) => ({
  type: REQUEST_POKEMONS_SUCCESSFUL,
  payload: data,
  list
});

const fetchPokemonDetail = index => dispatch => {
	const { POKEMON_DETAIL, POKEMON_SPECIES } = ENDPOINTS;
  const url = `${API_URL}/${POKEMON_DETAIL}`;
  const urlApi = url.replace('{index}', index);

	dispatch(pokemonDetailsRequest());
	axios.get(urlApi)
		.then(res => {
      const pokemonDetail = res.data;
      dispatch(pokemonDetailsRequestSuccesful(pokemonDetail))
      const species = pokemonDetail.species;
      const indexSpecies = species.url.split('/')[6];
      const urlSpecies = `${API_URL}/${POKEMON_SPECIES}`;
      const urlApiSpecies = urlSpecies.replace('{index}', indexSpecies);

      axios.get(urlApiSpecies).then(res => {
        const speciesDetail = res.data;
        const indexEvolution = speciesDetail.evolution_chain.url.split('/')[6];
        dispatch(fetchPokemonEvolutionChain(indexEvolution))
      });
    })
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

const fetchPokemonEvolutionChain = index => dispatch => {
	const { POKEMON_EVOLUTION_CHAIN } = ENDPOINTS;
  const url = `${API_URL}/${POKEMON_EVOLUTION_CHAIN}`;
  const urlApi = url.replace('{index}', index);

	dispatch(pokemonEvolutionChainRequest());
	axios.get(urlApi)
		.then(res => dispatch(pokemonEvolutionChainSuccesful(res.data)))
		.catch(() => dispatch(pokemonEvolutionChainFailure()));
};

const pokemonEvolutionChainRequest = () => ({
	type: REQUEST_POKEMON_EVOLUTION_CHAIN
});

const pokemonEvolutionChainFailure = () => ({
	type: REQUEST_POKEMON_EVOLUTION_CHAIN_FAILURE
});

const pokemonEvolutionChainSuccesful = data => ({
  type: REQUEST_POKEMON_EVOLUTION_CHAIN_SUCCESSFUL,
  payload: data
});

export {
  fetchPokemons,
  fetchPokemonDetail,
  fetchPokemonEvolutionChain,
  loginRequest,
  logout,
  registerUser
}

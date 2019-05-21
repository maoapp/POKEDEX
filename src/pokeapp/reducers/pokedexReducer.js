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

const initialState = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    isLogged: false,
    userInvalid: false
  },
  pokemons: {
    data: [],
    isloading: false,
    succesful: false,
    error: false
  },
  pokemonDetail: {
    data: null,
    isloading: false,
    succesful: false,
    error: false
  }
};

const pokedexReducer = (state = initialState, action) => {
  switch(action.type) {
    case REGISTER_USER: {
      return {
        ...state,
        user: {
          ...action.payload
        }
      }
    };
    case LOGIN_USER_SUCCESSFUL: {
      return {
        ...state,
        user: {
          ...state.user,
          isLogged: true,
          userInvalid: false
        }
      }
    }
    case LOGIN_USER_FAILURE: {
      return {
        ...state,
        user: {
          ...state.user,
          isLogged: false,
          userInvalid: true
        }
      }
    }
    case REQUEST_POKEMONS:
      return { 
        ...state, 
        pokemons: {
          ...state.pokemons, 
          isloading: true, 
          error: false, 
          succesful: false
        }
      };
    case REQUEST_POKEMONS_FAILURE:  
      return {
        ...state, 
        pokemons: {
          ...state.pokemons, 
          isloading: false, 
          error: true, 
          succesful: false
        }
      };
    case REQUEST_POKEMONS_SUCCESSFUL:  
      return {
        ...state, 
        pokemons: {
          ...state.pokemons, 
          isloading: false, 
          error: false, 
          succesful: true, 
          data: action.payload
        }
      };
    case REQUEST_POKEMON_DETAIL:
      return {
        ...state,
        pokemonDetail: {
          ...state.pokemonDetail, 
          isloading: true, 
          error: false, 
          succesful: false
        }
      };
    case REQUEST_POKEMON_DETAIL_FAILURE:
      return {
        ...state,
        pokemonDetail: {
          ...state.pokemonDetail, 
          isloading: false, 
          error: true, 
          succesful: false
        }
      };
    case REQUEST_POKEMON_DETAIL_SUCCESSFUL:
      return {
        ...state,
        pokemonDetail: {
          ...state.pokemonDetail, 
          isloading: false, 
          error: false, 
          succesful: true,
          data: action.payload
        }
      };
    default:
      return state;  
  }
};

export default pokedexReducer;

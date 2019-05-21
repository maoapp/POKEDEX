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
    list: 50,
    isloading: false,
    succesful: false,
    error: false
  },
  pokemonDetail: {
    data: null,
    isloading: false,
    succesful: false,
    error: false
  },
  pokemonEvolutionChain: {
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
          ...state.user,
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
    case LOGOUT_USER: {
      return {
        ...state,
        user: {
          ...state.user,
          isLogged: false
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
          data: action.payload,
          list: action.list
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
      case REQUEST_POKEMON_EVOLUTION_CHAIN:
      return {
        ...state,
        pokemonEvolutionChain: {
          ...state.pokemonEvolutionChain, 
          isloading: true, 
          error: false, 
          succesful: false
        }
      };
    case REQUEST_POKEMON_EVOLUTION_CHAIN_FAILURE:
      return {
        ...state,
        pokemonEvolutionChain: {
          ...state.pokemonEvolutionChain, 
          isloading: false, 
          error: true, 
          succesful: false
        }
      };
    case REQUEST_POKEMON_EVOLUTION_CHAIN_SUCCESSFUL:
      return {
        ...state,
        pokemonEvolutionChain: {
          ...state.pokemonEvolutionChain, 
          isloading: false, 
          error: false, 
          succesful: true,
          data: getEvolutionChain(action)
        }
      };  
    default:
      return state;  
  }
};

const getEvolutionChain = (action) => {
  let evoChain = [];
  let evoData = action.payload.chain;

  while (!!evoData && evoData.evolves_to) {
    const evoDetails = evoData['evolution_details'][0];

    evoChain.push({
      "species_name": evoData.species.name,
      "min_level": !evoDetails ? 1 : evoDetails.min_level,
      "trigger_name": !evoDetails ? null : evoDetails.trigger.name,
      "item": !evoDetails ? null : evoDetails.item
    });

    evoData = evoData['evolves_to'][0];
  }

  return evoChain;
}

export default pokedexReducer;

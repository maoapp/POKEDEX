// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @constants
import { LIMIT } from 'constants/constants';

// @components
import PokemonCard from 'components/pokemonCard/PokemonCard';
import Spinner from 'components/spinner/Spinner';

// @styles
import './Pokemons.scss';

class Pokemons extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemon: '',
      pokemonsLimit: LIMIT ,
      showSpinnerScroll: false
    };

    this.getScrollBottom = this.getScrollBottom.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.renderPokemonList = this.renderPokemonList.bind(this);
    this.selectPokemon = this.selectPokemon.bind(this);
  }

  componentDidMount() {
    const { fetchPokemons, isLogged, history } = this.props;
    window.addEventListener('scroll', this.handleScroll);

    if(!isLogged) {
      history.push('/login');
    }

    fetchPokemons();
  }

  handleScroll () {
    const { fetchPokemons, pokemons } = this.props;
    const { list } = pokemons;
    const { pokemonsLimit } = this.state;
		const isBottomOfScroll = this.getScrollBottom();
        
		if(isBottomOfScroll) {
      fetchPokemons(list + pokemonsLimit);
    } 
  }
  
  getScrollBottom() {
		return (window.innerHeight + window.scrollY >= document.body.offsetHeight);
	}

  selectPokemon(id) {
    const { history } = this.props;

    history.push(`pokemon/${id}`)
  }

  onChange(e) {
    this.setState({pokemon: e.target.value})
  }

  renderPokemonList(list) {
    return (
      <div className="pokemonsContainer__pokemonCardContainer">
        {list.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon} onSelectPokemon={this.selectPokemon}/>)}
      </div>);
  }

  render() {
    const { pokemons } = this.props;
    const { pokemon } = this.state;
    const { data, isLoading } = pokemons;

    let content = <Spinner />;

    if(data.length) {
      content = this.renderPokemonList(data);

      if(pokemon) {
        const listFiltered = data.filter(item => item.name.match(pokemon));

        content = listFiltered.length ? this.renderPokemonList(listFiltered) : <div>no existe ese pokemon</div>
      }
    }

    return (
      <div className="pokemonsContainer">
        <input 
          className="pokemonsContainer__searchInput" 
          value={pokemon} 
          onChange={e => this.onChange(e)}
          placeholder="Search by your favorite pokemon"
        />
        <div>{content}</div>
        {this.getScrollBottom() && isLoading && <Spinner />}
      </div>
    )
  }
}

Pokemons.propTypes = {
  Pokemons: PropTypes.array
};

export default Pokemons;

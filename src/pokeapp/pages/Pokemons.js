// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @components
import PokemonCard from '../components/pokemonCard/PokemonCard';
import Spinner from '../components/spinner/Spinner';

// @styles
import './Pokemons.scss';

class Pokemons extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemon: ''
    };

    this.renderPokemonList = this.renderPokemonList.bind(this);
    this.selectPokemon = this.selectPokemon.bind(this);
    // this.handleScroll = this.handleScroll.bind(this);
  }

  async componentDidMount() {
    const { fetchPokemons, isLogged, history } = this.props;
    window.addEventListener('scroll', this.handleScroll);

    if(!isLogged) {
      history.push('/login');
    }

    fetchPokemons();
  }

  selectPokemon(id) {
    const { history } = this.props;

    history.push(`pokemon/${id}`)
  }

  renderPokemonList(list) {
    return (
      <div className="row">
        {list.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon} onSelectPokemon={this.selectPokemon}/>)}
      </div>);
  }

  onChange(e) {
    this.setState({pokemon: e.target.value})
  }

  render() {
    const { pokemons } = this.props;
    const { pokemon } = this.state;
    const { data } = pokemons;

    let content = <Spinner />;

    if(data.length) {
      content = this.renderPokemonList(data);

      if(pokemon) {
        // const regex = `/${pokemon}/i`
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
      </div>
    )
  }
}

Pokemons.propTypes = {
  Pokemons: PropTypes.array
};

export default Pokemons;

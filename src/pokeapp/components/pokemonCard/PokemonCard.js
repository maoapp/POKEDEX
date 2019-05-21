// @vendor
import React from 'react';
import PropTypes from 'prop-types';

// @styles
import './PokemonCard.scss';

const urlImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const logo = require('../../assets/png/pokebola-logo.png');
const pokeball = require('../../assets/png/pokeball-form.png')

const PokemonCard = ({pokemon, onSelectPokemon}) => (
  <div className="col-md-3" onClick={() => onSelectPokemon(pokemon.url.split('/')[6])}>
    <div className="pokemonCard card">
      <div className="card-header">
        <img src={logo} className="pokemonCard__pokeball" alt="pokeball_logo"/>
      </div>
      <div className="card-body">
        <img className="card-image" src={`${urlImage}${pokemon.url.split('/')[6]}.png` || pokeball} alt={"pokeball__loading"}/>
        <h6 className="card-title">{pokemon.name}</h6>
      </div>
    </div>
  </div>
);

PokemonCard.propTypes = {
  pokemon: PropTypes.object,
  onSelectPokemon: PropTypes.func
};

export default PokemonCard;

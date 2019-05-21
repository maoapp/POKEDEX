// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @constants
import { TYPES_COLORS } from '../../constants/constants';

// @styles
import './PokemonDetail.scss';

const PokemonDetailCard = ({evolutionChain, id, name, sprites, height, types, weight, moves}) => (
  <div className="card cardPokemonDetail">
    <div className="card-header cardPokemonDetail__header">
      <h5>{id}</h5>
        <div className="float-right">
          {types.map(type => 
            <span 
              key={type.type.name} 
              className="cardPokemonDetail__types"
              style={{backgroundColor: `#${TYPES_COLORS[type.type.name]}`}}
            >
              {type.type.name}
            </span>)}
        </div>
    </div>
    <div className="card-body">
      <div className="align-items-center">
        <img src={sprites.front_default} alt="pokemon__picture"/>      
      </div>
      <h3 className="cardPokemonDetail__name">{name}</h3> 
      <h5 className="cardPokemonDetail__physicalInfoTitle">height: {height}</h5> 
      <h5 className="cardPokemonDetail__physicalInfoTitle">weight: {weight}</h5> 
      <h5 className="cardPokemonDetail__movesTitle">Available moves:</h5>
      <div className="cardPokemonDetail__moves">
        {moves.map(item => 
          <li className="cardPokemonDetail__movesItem" key={item.move.name}>
            {item.move.name}
          </li>
        )}        
      </div>  
      <div className="cardPokemonDetail__evolution">
        <h5 className="cardPokemonDetail__evolutionTitle">Evolution Chain</h5>
        {evolutionChain ? evolutionChain.map(evolution => 
          <li key={evolution.species_name} className="cardPokemonDetail__evolutionsItem">
            {evolution.species_name}
          </li>) : 'no hay evolucion disponible'}
      </div>    
    </div>
  </div>
);

PokemonDetailCard.propTypes = {
  id: PropTypes.number, 
  name: PropTypes.string,
  sprites: PropTypes.object, 
  height: PropTypes.number, 
  types: PropTypes.array,
  weight: PropTypes.number, 
  moves: PropTypes.array
};

export default PokemonDetailCard;

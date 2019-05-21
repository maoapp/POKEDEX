// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @constants
import { TYPES_COLORS } from '../../constants/constants';

// @styles
import './PokemonDetail.scss';

const PokemonDetailCard = ({id, name, sprites, height, types, weight, moves}) => (
  <div className="card cardPokemonDetail">
    <div className="card-header">
      <div className="row">
        <div className="col-5">
          <h5>{id}</h5>
        </div>
        <div className="col-7">
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
      </div>
    </div>
    <div className="card-body">
      <div className="align-items-center">
        <img src={sprites.front_default} alt="pokemon__picture"/>      
      </div>
      <h4 className="">{name}</h4> 
      <h5>height: {height}</h5> 
      <h5>weight: {weight}</h5> 
      <h5 className="cardPokemonDetail__movesTitle">Available moves:</h5>
      <div className="cardPokemonDetail__moves">
        {moves.map(item => 
          <li className="cardPokemonDetail__movesItem" key={item.move.name}>
            {item.move.name}
          </li>
        )}        
      </div>       
    </div>
  </div>
);

PokemonDetailCard.propTypes = {
  id: PropTypes.number, 
  name: PropTypes.string,
  sprites: PropTypes.object, 
  height: PropTypes.string, 
  types: PropTypes.array,
  weight: PropTypes.string, 
  moves: PropTypes.array
};

export default PokemonDetailCard;

// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @components
import PokemonDetailCard from '../components/pokemonDetailCard/PokemonDetailCard';
import Spinner from '../components/spinner/Spinner';

class PokemonDetail extends React.Component {
  componentDidMount() {
    const { fetchPokemonDetail, match, isLogged, history } = this.props;
    const { index } = match.params;

    if(!isLogged) {
      history.push('/login');
    }

    fetchPokemonDetail(index);
  }

  render() {
    const { pokemonDetail, pokemonEvolutionChain } = this.props;
    const { data } = pokemonDetail;
    const evolutionChain = pokemonEvolutionChain.data;

    let content = <Spinner />;
    if(data) {
      content = (
        <PokemonDetailCard {...{...data, evolutionChain}} />
      )
    } 

    return (
      <div>
        {content}
      </div>
    )
  }
}

PokemonDetail.propTypes = {
  pokemonDetail: PropTypes.object
};

export default PokemonDetail;

// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @components
import PokemonDetailCard from '../components/pokemonDetailCard/PokemonDetailCard';
import Spinner from '../components/spinner/Spinner';

class PokemonDetail extends React.Component {
  constructor() {
    super();

  }

  async componentDidMount() {
    const { fetchPokemonDetail, match } = this.props;
    const { index } = match.params;

    fetchPokemonDetail(index);
  }

  render() {
    const { pokemonDetail } = this.props;
    let content = <Spinner />;

    if(pokemonDetail.data) {
      content = (
        <PokemonDetailCard {...{...pokemonDetail.data}} />
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

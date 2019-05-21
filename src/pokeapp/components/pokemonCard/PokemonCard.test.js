// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @Components
import PokemonCard from './PokemonCard';

const mockOnSelectPokemon = jest.fn();

describe('PokemonCard tests suite', () => {
  const props = {
    pokemon: {
      url: 'www.test.com/image.png',
      name: 'picachu'
    },
    onSelectPokemon: mockOnSelectPokemon
  };

	it('Should render a card', () => {
		const wrapper = shallow(<PokemonCard {...props}/>);
		const pokemonCard = wrapper.find('.pokemonCard');

		expect(pokemonCard.length).toBe(1);
  });

  it('Should render the name correctly', () => {
		const wrapper = shallow(<PokemonCard {...props}/>);
		const name = wrapper.find('h6');

		expect(name.text()).toBe('picachu');
  });

  it('Should has a onclick event', () => {
		const wrapper = shallow(<PokemonCard {...props}/>);
		const card = wrapper.find('.pokemonCard');

    card.simulate('click');
    expect(mockOnSelectPokemon).toHaveBeenCalled();
  });
});

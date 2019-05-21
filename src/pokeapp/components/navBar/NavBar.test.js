// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @Components
import NavBar from './NavBar';

describe('NavBar tests suite', () => {
  const props = {
    user: {
      isLogged: false,
      email: ''
    }
  };

	it('Should render a only element in the menu', () => {
		const wrapper = shallow(<NavBar {...props}/>);
		const appNameItem = wrapper.find('li');

		expect(appNameItem.length).toBe(1);
  });

  it('Should render three elements in the menu when the user is logged', () => {
		const wrapper = shallow(<NavBar {...props}/>);
		wrapper.setProps({
      user: {
        isLogged: true,
        email: 'mao@gmail.com'
      }
    })

    const elements = wrapper.find('NavLink');
		expect(elements.length).toBe(3);
  });
});

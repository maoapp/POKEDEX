// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @Components
import ErrorsForm from './ErrorsForm';

describe('Error tests suite', () => {
  const props = {
    errors: {
      email: 'email is invalid',
      password: 'lenght should be 8 digits'
    }
  };

	it('Should render two inline errors', () => {
		const wrapper = shallow(<ErrorsForm {...props}/>);
		const error = wrapper.find('li');

		expect(error.length).toBe(2);
	});
});

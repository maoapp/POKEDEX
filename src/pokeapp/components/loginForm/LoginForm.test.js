// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @Components
import LoginForm from './LoginForm';

const mockOnChangeField = jest.fn();
const mockSubmitEvent = jest.fn();

describe('Login Form tests suite', () => {
  const props = {
    email: 'maoapp@hotmail.com', 
    password: 'YuxiGl0bal-', 
    userInvalid: false, 
    onChangeField: mockOnChangeField,
    onSubmitForm: mockSubmitEvent
  };

	it('Should render a button with state clickeable', () => {
		const wrapper = shallow(<LoginForm {...props}/>);
		const buttonLogin = wrapper.find('button');

		expect(buttonLogin.props().disabled).toBe(false);
  });
  
  it('Should on change the email correctly', () => {
		const wrapper = shallow(<LoginForm {...props}/>);
		const inputEmail = wrapper.find('input').first();

    inputEmail.simulate('change');
    expect(mockOnChangeField).toHaveBeenCalled();
  });
  
  it('Should on change the password correctly', () => {
		const wrapper = shallow(<LoginForm {...props}/>);
		const inputPassword = wrapper.find('input').first();

    inputPassword.simulate('change');
    expect(mockOnChangeField).toHaveBeenCalled();
  });
  
  it('Should desactive the button fi the data is empty', () => {
		const wrapper = shallow(<LoginForm {...props}/>);
		wrapper.setProps({
      email: '',
      password: ''
    })
    const buttonLogin = wrapper.find('button');

		expect(buttonLogin.props().disabled).toBe(true);
	});
});

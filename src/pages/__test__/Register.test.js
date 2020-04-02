import React from 'react';
import ReactDOM from 'react-dom';
import Register from './../Register';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import {CookiesProvider} from 'react-cookie';
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from 'react-redux';

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: () => ({isButtonDisabled: ''})
  }));

const mockUseDispatch = useDispatch;
const mockDispatch = jest.fn();
 
describe('Test case for testing register', () => {
  const cookie = new Cookies()
  let wrapper = mount(
    <CookiesProvider>
      <MemoryRouter>
          <Register cookie={cookie} />
      </MemoryRouter>
    </CookiesProvider>);

  it('renders without crashing', () => {
      const div = document.createElement("div");
      ReactDOM.render(wrapper, div)
  });

 
  it('succes register', () => {
    mockUseDispatch.mockImplementation(() => mockDispatch);
    const body = {
      userName: 'Przemek',
      email: "przemek2@gmail.com",
      password: "przemek123"
    }
    wrapper.find('#userName').simulate('change', {target: {name: 'userName', value: body.userName}});
    wrapper.find('#email').simulate('change', {target: {name: 'email', value: body.email}});
    wrapper.find('#password').simulate('change', {target: {name: 'password', value: body.password}});
    wrapper.find('#registerForm').simulate('submit');
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    
  });

})
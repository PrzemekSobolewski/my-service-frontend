import React from 'react';
import ReactDOM from 'react-dom';
import Login from './../Login';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { mount } from 'enzyme';
import {Provider} from 'react-redux';
import {CookiesProvider, useCookies} from 'react-cookie';
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import loginReducer from '../../redux/reducers/loginReducer';
import Cookies from "universal-cookie";

//create store
const rootReducer = combineReducers({
    login: loginReducer,
  });
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

//create history.push mock
const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));
  
describe('Test case for testing logn', () => {
   //create useEffect mock
  let useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };
  useEffect = jest.spyOn(React, "useEffect");
  mockUseEffect(); // 2 times
  mockUseEffect(); //

  const cookie = new Cookies({token: 'some-token'})
  let wrapper = mount(
  <Provider store={store}>
    <CookiesProvider cookies={cookie}>
      <MemoryRouter>
          <Login/>
      </MemoryRouter>
    </CookiesProvider>
  </Provider>);

  it('renders without crashing', () => {
      const div = document.createElement("div");
      ReactDOM.render(wrapper, div)
  });

  it('email check', () => {
    //const cookies = new Cookies();
    wrapper.find('#email').simulate('change', {target: {name: 'email', value: 'przemus2@gmail.com'}});
    wrapper.find('#password').simulate('change', {target: {name: 'password', value: "przemek123"}});
    wrapper.find('#loginForm').simulate('submit');
    expect(mockHistoryPush).toHaveBeenCalledWith("/");

  });

})
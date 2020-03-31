import React from 'react';
import ReactDOM from 'react-dom';
import Login from './../Login';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import {Provider} from 'react-redux';
import {CookiesProvider} from 'react-cookie';
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import loginReducer from '../../redux/reducers/loginReducer';
import Cookies from "universal-cookie";

//create store
const rootReducer = combineReducers({
    login: loginReducer,
  });
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  isButtonLocked: false,
  isLoginSuccess: null,
  errorLoginMessage: null,
  userName: null
})

store.dispatch = jest.fn();

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
  
  const cookie = new Cookies({token: 'cos'})
  let wrapper = mount(
  <Provider store={store}>
    <CookiesProvider>
      <MemoryRouter>
          <Login/>
      </MemoryRouter>
    </CookiesProvider>
  </Provider>);

  it('renders without crashing', () => {
      const div = document.createElement("div");
      ReactDOM.render(wrapper, div)
  });

 
  it('succes login', () => {
    //const cookies = new Cookies();
    wrapper.find('#email').simulate('change', {target: {name: 'email', value: 'przemus2@gmail.com'}});
    wrapper.find('#password').simulate('change', {target: {name: 'password', value: "przemek123"}});
    wrapper.find('#loginForm').simulate('submit');
    //todo
  });

})
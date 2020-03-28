import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import loginReducer from './redux/reducers/loginReducer';
import registerReducer from './redux/reducers/registerReducer';

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer
  });
  
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, div)
})
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import loginReducer from './redux/reducers/loginReducer';
import registerReducer from './redux/reducers/registerReducer';
import {CookiesProvider} from 'react-cookie';

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer
  });
  
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <CookiesProvider>
            <App />
        </CookiesProvider>
    </Provider>, 
    document.getElementById('root'));



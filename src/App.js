import React from 'react';
import Headroom from 'react-headroom';
import  './syles/main.scss';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import loginReducer from './redux/reducers/loginReducer';

const rootReducer = combineReducers({
  login: loginReducer
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

const App = () => {
    return(
      <Provider store={store}>
        <Router>
            <Headroom>
                    <div className={'navPages'}>
                        <Link exact to={'/'}>Home</Link>
                    </div>
                    <ul className={'navAuth'}>
                        <li>
                            <Link to={'/login'}> Log in </Link>
                        </li>
                        <li>
                            <Link to={'/signup'}> Sign in </Link>
                        </li>
                    </ul>
            </Headroom>
            <div className="content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signin" component={Signup} />
              </Switch>
          </div>
        </Router>
      </Provider>
  );
}
export default App;


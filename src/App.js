import React from 'react';
import Headroom from 'react-headroom';
import  './syles/main.scss';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import UserOptions from './components/UserOptions'

const App = () => {
  return(
    <Router>
      <Headroom>
        <div className={'navPages'}>
            <Link exact to={'/'}> Home </Link>
        </div>
        <UserOptions/>          
      </Headroom>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;


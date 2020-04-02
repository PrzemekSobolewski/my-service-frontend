import React, {useState, useEffect} from 'react';
import * as loginActions from '../redux/actions/loginActions';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

const Login = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginState = useSelector(state => state.login);
  const history = useHistory();

  useEffect(() => {
    if(props.cookie.get('token') !== undefined) {
      history.push('/');
    }
  });
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email: email,
      password: password
    }
    if ((email.trim().length || password.trim().length) !== 0) {
      dispatch(loginActions.login(body, props.cookie));
    } else {
      alert("Empty field. Please fill all fields");
    }
  }

  return (
    <div className={'loginContent'}>
       <form id={'loginForm'} className={'loginForm'} method={'POST'} onSubmit={handleSubmit}>
        <input type={"text"} id={'email'} placeholder={'Email'} name={'email'} value={email} onChange={e => setEmail(e.target.value)}/>
        <input type={'password'} id={'password'} placeholder={'Password'} name={'password'} value={password} onChange={e => setPassword(e.target.value)}/>
        <div><button disabled={loginState.isButtonLocked} type={'submit'}> Login </button></div>
       </form>
    </div>
  );
}

export default Login;
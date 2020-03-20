import React, {useState} from 'react';
import * as loginActions from '../redux/actions/loginActions';
import {useDispatch, useSelector} from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginState = useSelector(state => state.login);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      userName: userName,
      email: email,
      password: password
    }
    if ((email.trim().length || password.trim().length || userName.trim().length) !== 0) {
      dispatch(loginActions.login(body));
    } else {
      alert("Empty field. Please fill all fields");
    }
  }

  return (
    <div className={'loginContent'}>
       <form id={'loginForm'} className={'loginForm'} method={'POST'} onSubmit={handleSubmit}>
        <input type={'text'} placeholder={'User Name'} name={'userName'} value={userName} onChange={e => setUserName(e.target.value)}/>
        <input type={'text'} placeholder={'Email'} name={'email'} value={email} onChange={e => setEmail(e.target.value)}/>
        <input type={'password'} placeholder={'Password'} name={'password'} value={password} onChange={e => setPassword(e.target.value)}/>
        <div><button disabled={loginState.isButtonLocked} type={'submit'}> Login </button></div>
       </form>
    </div>
  );
}

export default Login;
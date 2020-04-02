import React, {useState, useEffect} from 'react';
import * as registerActions from '../redux/actions/registerActions';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Cookies from 'universal-cookie';

const Register = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const registerState = useSelector(state => state.register);
  const history = useHistory();
  const cookies = new Cookies();

  useEffect(() => {
    if(cookies.get('token') !== undefined) {
      history.push('/');
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      userName: userName,
      email: email,
      password: password
    }
    if ((email.trim().length || password.trim().length || userName.trim().length) !== 0) {
      dispatch(registerActions.register(body, cookies));
    } else {
      alert("Empty field. Please fill all fields");
    }
  }

  return (
    <div className={'registerContent'}>
       <form id={'registerForm'} className={'registerForm'} method={'POST'} onSubmit={handleSubmit}>
        <input id={'userName'} type={'text'} placeholder={'User Name'} name={'userName'} value={userName} onChange={e => setUserName(e.target.value)}/>
        <input id={'email'} type={'text'} placeholder={'Email'} name={'email'} value={email} onChange={e => setEmail(e.target.value)}/>
        <input id={'password'} type={'password'} placeholder={'Password'} name={'password'} value={password} onChange={e => setPassword(e.target.value)}/>
        <div><button disabled={registerState.isButtonLocked} type={'submit'}> Create Account </button></div>
       </form>
    </div>
  );
}

export default Register;
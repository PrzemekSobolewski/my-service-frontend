import React, {useState} from 'react';
import * as registerActions from '../redux/actions/registerActions';
import {useDispatch, useSelector} from 'react-redux';

const Register = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const registerState = useSelector(state => state.register);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      userName: userName,
      email: email,
      password: password
    }
    if ((email.trim().length || password.trim().length || userName.trim().length) !== 0) {
      dispatch(registerActions.register(body));
    } else {
      alert("Empty field. Please fill all fields");
    }
  }

  return (
    <div className={'registerContent'}>
       <form id={'registerForm'} className={'registerForm'} method={'POST'} onSubmit={handleSubmit}>
        <input type={'text'} placeholder={'User Name'} name={'userName'} value={userName} onChange={e => setUserName(e.target.value)}/>
        <input type={'text'} placeholder={'Email'} name={'email'} value={email} onChange={e => setEmail(e.target.value)}/>
        <input type={'password'} placeholder={'Password'} name={'password'} value={password} onChange={e => setPassword(e.target.value)}/>
        <div><button disabled={registerState.isButtonLocked} type={'submit'}> Login </button></div>
       </form>
    </div>
  );
}

export default Register;
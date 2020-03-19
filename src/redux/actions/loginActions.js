import axios from "axios/index";
import {setUserSession} from '../../utils/Common'

export const LOGGING = 'LOGGING';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGI_SUCCESS';

export const tryLogin = () => ({
    type: LOGGING
});

export const handleLoginSuccess = () => ({
    type: LOGIN_SUCCESS
});

export const handleLoginError = () => ({
    type: LOGIN_ERROR
});

export const login = (body) => async dispatch => {
    dispatch(tryLogin());

    await axios.post('http://localhost:4000/user/login', {
        email: body.email,
        password: body.password
    }).then(response => {
        console.log(response);
        dispatch(handleLoginSuccess());
        setUserSession(response.token, response.email)
    }).catch(error => {
        console.log(error);
        dispatch(handleLoginError());
    })

}
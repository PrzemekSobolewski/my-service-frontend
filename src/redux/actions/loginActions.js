import axios from "axios/index";

export const LOGGING = 'LOGGING';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGI_SUCCESS';

export const tryLogin = () => ({
    type: LOGGING
});

export const handleLoginSuccess = (response) => ({
    type: LOGIN_SUCCESS,
    userName: response.data.userName
});

export const handleLoginError = () => ({
    type: LOGIN_ERROR,
    errorLoginMessage: "User not exist. Log in failed"
});

export const login = (body, setCookies) => async dispatch => {
    dispatch(tryLogin());

    await axios.post('http://localhost:4000/user/login', {
        email: body.email,
        password: body.password
    }).then(response => {
        console.log(response);
        setCookies('token', response.data.token, {path: '/'});
        dispatch(handleLoginSuccess());
    }).catch(error => {
        console.log(error);
        dispatch(handleLoginError());
    })

}
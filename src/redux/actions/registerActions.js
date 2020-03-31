import axios from "axios/index";
import {login} from './loginActions';

export const REGISTERING = "REGISTERING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const tryRegister = () => ({
    type: REGISTERING
});

export const handleRegisterSuccess = () => ({
    type: REGISTER_SUCCESS
});

export const handleRegisterError = () =>({
    type: REGISTER_ERROR
});

export const register = (body, cookies) => async dispatch => {
    dispatch(tryRegister());

    await axios.post('http://localhost:4000/user/signup', {
        userName: body.userName,
        email: body.email,
        password: body.password
    }).then(response => {
        console.log(response);
        dispatch(handleRegisterSuccess);
        dispatch(login(body, cookies));
    }).catch(error => {
        console.log(error);
        dispatch(handleRegisterError());
    })

}


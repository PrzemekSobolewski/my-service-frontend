

import {LOGGING, LOGIN_ERROR, LOGIN_SUCCESS} from '../actions/loginActions';

const initialState = {
    isButtonLocked: false,
    isLoginSuccess: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LOGGING: 
            return {
                ...state,
                isLoginSuccess: null,
                isButtonLocked: true
        }
        case LOGIN_ERROR:
            return {
                ...state,
                isLoginSuccess: false,
                isButtonLocked: false
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoginSuccess: true,
                isButtonLocked: false
            }
        default:
            return state;
    }
}
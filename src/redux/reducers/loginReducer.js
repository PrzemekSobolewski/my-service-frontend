import {LOGGING, LOGIN_ERROR, LOGIN_SUCCESS} from '../actions/loginActions';

const initialState = {
    isButtonLocked: false,
    isLoginSuccess: null,
    errorLoginMessage: null,
    userName: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LOGGING: 
            return {
                ...state,
                isButtonLocked: true
        }
        case LOGIN_ERROR:
            return {
                ...state,
                isLoginSuccess: "FAILED",
                isButtonLocked: false,
                errorLoginMessage: action.errorLoginMessage
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoginSuccess: "SUCCESS",
                isButtonLocked: false,
                userName: action.userName
            }
        default:
            return state;
    }
}
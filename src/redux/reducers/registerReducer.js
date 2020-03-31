import {REGISTERING, REGISTER_SUCCESS, REGISTER_ERROR} from '../actions/registerActions';

const initialState = {
    isButtonLocked: false,
    isRegisterSuccess: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTERING:   
            return {
                ...state,
                isButtonLocked: true
            }
        case REGISTER_ERROR:
            return{
                ...state,
                isButtonLocked: false,
                isRegisterSuccess: 'FAILED'
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isButtonLocked: false,
                isRegisterSuccess: 'SUCCESS'
            }
        default:
            return state;
    }
}
import loginReducer from '../loginReducer';
import * as loginTypes from '../../actions/loginActions';

describe('login reducer', () =>{
    it('should return initial state', () => {
        expect(loginReducer(undefined, {})).toEqual(
            {
                isButtonLocked: false,
                isLoginSuccess: null,
                errorLoginMessage: null,
                userName: null
            }
        )
    });

    it('should try login', () => {
        expect(
            loginReducer([], {
                type: loginTypes.LOGGING
            })
        ).toEqual(
            {
                isButtonLocked: true,
            }
        )
    });

    it('should handle login success', () => {
        expect(
            loginReducer([], {
                type: loginTypes.LOGIN_SUCCESS,
                userName: 'Przemek'
            })
        ).toEqual(
            {
                isLoginSuccess: "SUCCESS",
                isButtonLocked: false,
                userName: 'Przemek'
            }
        )
    });

    it('should handle login error', () => {
        expect(
            loginReducer([], {
                type: loginTypes.LOGIN_ERROR,
                errorLoginMessage: 'Login failed'
            })
        ).toEqual(
            {
                isLoginSuccess: "FAILED",
                isButtonLocked: false,
                errorLoginMessage: 'Login failed'
            }
        )
    });
});

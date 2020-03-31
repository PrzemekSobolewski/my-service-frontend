import registerReducer from '../registerReducer';
import * as registerTypes from '../../actions/registerActions';

describe('register reducer', () =>{
    it('should return initial state', () => {
        expect(registerReducer(undefined, {})).toEqual(
            {
                isButtonLocked: false,
                isRegisterSuccess: null
            }
        )
    });

    it('should try register', () => {
        expect(
            registerReducer([], {
                type: registerTypes.REGISTERING
            })
        ).toEqual(
            {
                isButtonLocked: true,
            }
        )
    });

    it('should handle register success', () => {
        expect(
            registerReducer([], {
                type: registerTypes.REGISTER_SUCCESS
            })
        ).toEqual(
            {
                isRegisterSuccess: "SUCCESS",
                isButtonLocked: false,
            }
        )
    });

    it('should handle register error', () => {
        expect(
            registerReducer([], {
                type: registerTypes.REGISTER_ERROR
            })
        ).toEqual(
            {
                isRegisterSuccess: "FAILED",
                isButtonLocked: false,
            }
        )
    });
});
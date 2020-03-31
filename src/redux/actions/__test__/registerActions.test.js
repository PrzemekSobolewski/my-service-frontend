import * as registerActions from '../registerActions';

describe('register actions', () => {
    it('should handle register succesfully', () => {
        const expectedAction = {
            type: registerActions.REGISTER_SUCCESS,
        }
        expect(registerActions.handleRegisterSuccess()).toEqual(expectedAction);
    });

    it('should handle register error', () => {
        const expectedAction = {
            type: registerActions.REGISTER_ERROR
        }
        expect(registerActions.handleRegisterError()).toEqual(expectedAction);
    });

    it('should try register', () => {
        const expectedAction = {
            type: registerActions.REGISTERING
        }
        expect(registerActions.tryRegister()).toEqual(expectedAction);
    });
})
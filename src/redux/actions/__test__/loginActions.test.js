import * as loginActions from '../loginActions';

const response = {
    data: {
        userName: 'Przemek'
    }
}

describe('login actions', () => {
    it('should handle login succesfully', () => {
        const expectedAction = {
            type: loginActions.LOGIN_SUCCESS,
            userName: response.data.userName
        }
        expect(loginActions.handleLoginSuccess(response)).toEqual(expectedAction);
    });

    it('should handle login error', () => {
        const expectedAction = {
            type: loginActions.LOGIN_ERROR,
            errorLoginMessage: "User not exist. Log in failed"
        }
        expect(loginActions.handleLoginError()).toEqual(expectedAction);
    });

    it('should try login', () => {
        const expectedAction = {
            type: loginActions.LOGGING
        }
        expect(loginActions.tryLogin()).toEqual(expectedAction);
    });
})
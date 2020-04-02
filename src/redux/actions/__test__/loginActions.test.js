import * as loginActions from '../loginActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Cookies from 'universal-cookie';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const response = {
    data: {
        id: 1,
        userName: 'Przemek',
        token: 'any-token'
    }
}

const body = {
    email: "przemek2@gmail.com",
    password: "przemek123"
}

const cookies = new Cookies();

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

describe('async login action', () => {
    
    beforeEach(function () {
        moxios.install();
      });
    
      afterEach(function () {
        moxios.uninstall();
      });

    it('creates LOGIN_SUCCESS after successfuly get user data', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
              status: 200,
              response: response.data,
            });
          });

        const expectedActions = [
            { type: loginActions.LOGGING },
            { type: loginActions.LOGIN_SUCCESS, userName: response.data.userName }
          ];

        const store = mockStore({ userName: {} })

        return store.dispatch(loginActions.login(body, cookies)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            expect(cookies.get('token')).toBeDefined();
        })
    })
});
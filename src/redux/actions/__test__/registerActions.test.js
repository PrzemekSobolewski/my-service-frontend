import * as registerActions from '../registerActions';
import * as loginActions from '../loginActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Cookies from 'universal-cookie';
import moxios from 'moxios'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const message ='user created';
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

describe('async register action', () => {
    
    beforeEach(function () {
        moxios.install();
      });
    
      afterEach(function () {
        moxios.uninstall();
      });

    it('creates REGISTER_SUCCESS after successfuly register', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
              status: 200,
              response: message,
            });
          });

        const expectedActions = [
            { type: registerActions.REGISTERING },
            { type: loginActions.LOGGING },
          ]; 

        const store = mockStore();

        return store.dispatch(registerActions.register(body, cookies)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        })
    })
});
import * as actions from 'redux/actions/Auth.actions'
import * as reducer from 'redux/reducers/Auth.reducer'
const initialState = {
    loading: false,
    loaded: false,

    user: null,
    error: null
}
describe('Empty reducer', () => {
    it('Empty Reducer', () => {
        expect(reducer.default([],actions.LOGIN)).toEqual([
        ])
    })
})

describe('Login reducer', () => {
    it('Empty Reducer', () => {
        expect(reducer.default(initialState,{type:actions.LOGIN})).toEqual(
            {"error": null, "loaded": false, "loading": true, "user": null}
        )
    });
    it('login success Reducer', () => {
        expect(reducer.default([],{type:actions.LOGIN_SUCCESS})).toEqual(
            { "loaded": true, "loading": false, "user": undefined}
        )
    })
})


describe('Login fail reducer', () => {
    it('login fail Reducer', () => {
        expect(reducer.default(initialState,{type:actions.LOGIN_FAIL})).toEqual(
            {"error": undefined, "loaded": true, "loading": false, "user": null}
        )
    })
})


describe('Register reducer', () => {
    it('Register Reducer', () => {
        expect(reducer.default(initialState,{type:actions.REGISTER})).toEqual(
            {"error": null, "loaded": false, "loading": true, "user": null}
        )
    })

    it('Register success Reducer', () => {
        expect(reducer.default(initialState,{type:actions.REGISTER_SUCCESS})).toEqual(
            {"error": null, "loaded": true, "loading": false, "user": undefined}
        )
    })
    it('Register fail Reducer', () => {
        expect(reducer.default(initialState,{type:actions.REGISTER_FAIL})).toEqual(
            {"error": undefined, "loaded": true, "loading": false, "user": null}
        )
    })
})

describe('logout success reducer', () => {
    it('logout Reducer', () => {
        expect(reducer.default(initialState,{type:actions.LOGOUT_SUCCESS})).toEqual(
            initialState
        )
    })
})

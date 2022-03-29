import types from '../storeTypes'

const initialAuthState = {
    token: "",
    isAuthenticate: false,
    user: null
}

function authReducer (state = initialAuthState, {type, payload}) {
    switch (type) {
        case types.AUTH.SET_AUTH:
            return {...state, ...payload, isAuthenticate: true}
        case types.AUTH.LOGOUT:
            return {...state, ...initialAuthState}
        default:
            return {...state}
    }
}

export default authReducer
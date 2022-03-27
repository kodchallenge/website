import types from '../storeTypes'

const initialEditorState = {
    token: "",
    isAuthenticate: false,
    user: null
}

function authReducer (state = initialEditorState, {type, payload}) {
    switch (type) {
        case types.AUTH.SET_AUTH:
            return {...state, ...payload, isAuthenticate: true}
        default:
            return {...state}
    }
}

export default authReducer
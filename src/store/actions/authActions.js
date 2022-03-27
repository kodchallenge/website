import types from "../storeTypes"

export const SetAuth = (data) => {
    return {
        type: types.AUTH.SET_AUTH,
        payload: data,
    }
}
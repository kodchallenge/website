import types from "../storeTypes"

const initialState = {
    contests: null,
}

export default function contestReducer(state = initialState, action) {
    switch (action.type) {
        case types.CONTEST.SET_CONTESTS:
            return {
                ...state,
                contests: action.payload
            }
        default:
            return state
    }
}
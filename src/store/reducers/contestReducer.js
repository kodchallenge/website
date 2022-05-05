import types from "../storeTypes"

const initialState = {
    contests: null,
    timer: 0,
    contestant: null,
}

export default function contestReducer(state = initialState, action) {
    switch (action.type) {
        case types.CONTEST.SET_CONTESTS:
            return {
                ...state,
                contests: action.payload
            }
        case types.CONTEST.SET_CONTESTANT:
            return {
                ...state,
                contestant: action.payload
            }
        case types.CONTEST.SET_TIMER:
            return {
                ...state,
                timer: action.payload
            }
        default:
            return state
    }
}
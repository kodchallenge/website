import types from "../storeTypes"

const problemState = {
    data: null,
    selectProblem: null,
    loading: false,
    error: "",
    difficulties: null
}

export default function problemReducer(state = problemState, {type, payload}) {
    switch (type) {
        case types.API_START:
            return {...state, loading: true, error: ""}
        
        case types.API_ERROR:
            return {...state, loading: false, error: payload}
        
        case types.PROBLEMS.SET_PROBLEM:
            return {...state, loading: false, selectProblem: payload}
        case types.PROBLEMS.GETALL_PROBLEMS:
            return {...state, loading: false, data: payload, selectProblem: null}
        case types.PROBLEMS.GET_DIFFICULTIES:
            return { ...state, loading: false, difficulties: payload }
        default:
            return {...state}
    }
}
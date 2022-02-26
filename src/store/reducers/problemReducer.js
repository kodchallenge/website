import types from "../storeTypes"

const problemState = {
    data: [],
    selectProblem: null,
    loading: false,
    error: "",
}

export default function problemReducer(state = problemState, {type, payload}) {
    switch (type) {
        case types.API_START:
            return {...state, loading: true, error: ""}
        
        case types.API_ERROR:
            return {...state, loading: false, error: payload}
        
        case types.PROBLEMS.SET_PROBLEM:
            return {...state, loading: false, selectProblem: payload}
    
        default:
            return {...state}
    }
}
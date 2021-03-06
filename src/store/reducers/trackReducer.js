import types from "../storeTypes"

const trackState = {
    data: [],
    loading: false,
    error: "",
}

export default function trackReducer(state = trackState, {type, payload}) {
    switch (type) {
        case types.TRACKS.API_START:
            return {...state, loading: true, error: ""}
        
        case types.TRACKS.API_ERROR:
            return {...state, loading: false, error: payload}
        
        case types.TRACKS.GETALL_TRACK:
            return {...state, loading: false, data: payload}
    
        default:
            return {...state}
    }
}
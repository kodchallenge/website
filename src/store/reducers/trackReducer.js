import types from "../storeTypes"

const trackState = {
    tracks: [],
    loading: false,
    error: "",
}

export default function trackReducer(state = trackState, {type, payload}) {
    switch (type) {
        case types.API_START:
            return {...state, loading: true, error: ""}
        
        case types.API_ERROR:
            return {...state, loading: false, error: payload}
        
        case types.TRACKS.GETALL_TRACK:
            return {...state, loading: false, tracks: payload}
    
        default:
            return {...state}
    }
}
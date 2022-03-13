import TrackService from "../../services/track.service"
import types from "../storeTypes"



export const getAllTrack = () => async dispatch =>  {
    dispatch({type: types.TRACKS.API_START})
    try {
        const res = await new TrackService().getAllTracks()
        if(res.data.success) {
            dispatch({type: types.TRACKS.GETALL_TRACK, payload: res.data.data})
        }
        else {
            throw res.data.message || "Hata Oluştu"
        }
    } catch(e) {
        dispatch({type: types.TRACKS.API_ERROR, payload: e})
    }
}
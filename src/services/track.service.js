import api from "./api"

export default class TrackService {
    constructor() {
        this.api_url = "/tracks/"
    }

    getAllTracks() {
        return api().get(this.api_url)
    }

    addTrack(data) {
        return api().post(this.api_url, data)
    }

    updateTrack(data) {
        return api().put(this.api_url, data)
    }

    changeTrackStatus(track) {
        return api().post(this.api_url+"changestatus", track)
    }
}
import api from "./api"

export default class TrackService {
    constructor() {
        this.api_url = "/tracks"
    }

    getAllTracks() {
        return api().get(this.api_url)
    }

    addTrack(data) {
        return api().post(this.api_url, data)
    }
}
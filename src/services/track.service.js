import api from "./api"

export default class TrackService {
    constructor() {
        this.api_url = "/Track"
    }

    getAllTracks() {
        return api().get(this.api_url+"/getalltracks")
    }
}
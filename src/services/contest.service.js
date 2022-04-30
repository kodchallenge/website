import api from "./api"

const api_url = "/contests/"
class ContestService {
    createContest(data) {
        return api().post(api_url, data)
    }
    getAllContest() {
        return api().get(api_url)
    }
}

export default ContestService
import api from "./api"

const api_url = "/contests/"
class ContestService {
    createContest(data) {
        return api().post(api_url, data)
    }
    getAllContest() {
        return api().get(api_url)
    }
    joinContest(data) {
        return api().post("/contestant/register", data)
    }
    isUserJoinedContest(data) {
        return api().get(`/contestant/isuserjoinedcontest?user=${data.user}&contest=${data.contest}`)
    }

    getContestById(id) {
        return api().get(api_url + id)
    }

    getContestant(user, contest) {
        return api().get(`/contestant/getcontestant?user=${user}&contest=${contest}`)
    }

    startContest(data) {   
        return api().post(`/contestant/startcontest`, data)
    }
    finishContest(data) {   
        return api().post(`/contestant/finishcontest`, data)
    }
}

export default ContestService
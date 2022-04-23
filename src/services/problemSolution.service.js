import api from "./api"

const api_url = "/problemsolutions/"
export default class ProblemSolutionService {
    
    sendSolution(data) {
        return api().post(api_url, data)
    }

    getUserSolutionByProblem(userId, problemId) {
        return api().get(api_url+`userproblemsolution?userId=${userId}&problemId=${problemId}`)
    }

    getProblemSolutions(problemId) {
        return api().get(api_url+problemId)
    }

    getUserSolutions(userId) {
        return api().get(api_url+`usersolutions?user=${userId}`)
    }
}
import api from "./api"

const api_url = "/problemsolutions"
export default class ProblemSolutionService {
    
    sendSolution(data) {
        return api().post(api_url+"/", data)
    }
}
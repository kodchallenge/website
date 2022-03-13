import api from "./api"

const api_url = "/problems"
export default class ProblemService {
    
    getById(id) {
        return api().get(api_url+"/"+id)
    }
}
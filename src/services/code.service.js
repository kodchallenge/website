import api from "./api"

const api_url = "/compiler"
class CodeService {
    
    runCode(data) {
        return api().post(api_url+"/runcode", data)
    }

}

export default new CodeService()
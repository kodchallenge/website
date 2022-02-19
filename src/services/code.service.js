import api from "./api"

const api_url = "/Code"
class CodeService {
    
    runCode(data) {
        return api().post(api_url+"/resruncode", data)
    }

}

export default new CodeService()
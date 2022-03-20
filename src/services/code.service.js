import api from "./api"

const api_url = "/compiler"
class CodeService {
    
    runCode(data) {
        return api().post(api_url+"/runcode", data)
    }

    runTest(data) {
        return api().post(api_url+"/runtest", data)
    }

}

export default new CodeService()
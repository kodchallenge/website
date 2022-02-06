import api from "./api"

const api_url = "/Code"
export default class CodeService {
    
    runCode(data) {
        return api().post(api_url+"/resruncode", data)
    }

}
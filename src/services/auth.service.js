import api from "./api"

const api_url = "/auth"
class AuthService {
    signup(data) {
        return api().post(api_url+"/signup", data)
    }

}

export default new AuthService()
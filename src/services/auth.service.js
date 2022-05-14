import api from "./api"

const api_url = "/auth"
class AuthService {
    signup(data) {
        return api().post(api_url+"/signup", data)
    }
    signin(data) {
        return api().post(api_url+"/signin", data)
    }

    changePassword(data) {
        return api().post(api_url+"/changepassword", data)
    }

    sendResetLink(data) {
        return api().post(api_url+"/sendresetlink", data)
    }
    
    resetPassword(data) {
        return api().post(api_url+"/resetpassword", data)
    }
}

export default new AuthService()
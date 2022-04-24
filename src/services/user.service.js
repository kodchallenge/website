import api from "./api";

const api_url = "/users/"
class UserService {
    uploadPhoto(userId, data) {
        return api().post(api_url+`uploadphoto?userId=${userId}`, data)
    }

    getUser(userId) {
        return api().get(api_url+userId)
    }
}

export default UserService
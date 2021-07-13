import axios from 'axios';
const USER_API_BASE_REGISTER_URL = "http://localhost:9095/registration";
const USER_API_BASE_LOGIN_URL = "http://localhost:9095/users/login";
const USER_API_BASE_GETALL_USERS_URL = "http://localhost:9095/userMappings/GetAllUserMappings";
class UserService{
    createUser(user){
        return axios.post(USER_API_BASE_REGISTER_URL, user);
    }
    loginUser(user){
        return axios.post(USER_API_BASE_LOGIN_URL, user);
    }
    getAllUserMappings(){
        return axios.get(USER_API_BASE_GETALL_USERS_URL,null)
    }
}
export default new UserService()
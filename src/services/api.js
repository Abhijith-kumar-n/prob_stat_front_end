import axios from "axios";

class Api{
    static Get(url){
        return axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
            }});
    }

    static Post(url, user) {
        return axios.post(url,user,{
            headers: {
                'Content-Type': 'application/json'
            }});
    }
}
export default Api;
import axios from "axios"
import { login } from "../redux/auth-reducer";

const instance = axios.create({
    withCredentials:true,
    headers:{
        "API-KEY":'d3b1d138-c47a-4134-a8f0-79032b8de450'
    },
    baseURL:'https://social-network.samuraijs.com/api/1.0',
});

export const userAPI={

    getUsers(currentPage,pageSize){
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`,)
        .then(response=>{
                    return response.data});
        },

}

export const followAPI={

    follow(id){
        return instance.post(`/follow/${id}`).then(response=>response.data)
        

    },
    unfollow(id){
        return instance.delete(`/follow/${id}`).then(response=>response.data)

    },

}

export const HeaderAPI={

    getAth() {
    return instance.get(`/auth/me`)
    .then(response=>{
        return response.data});
},
    login(email,password,rememberMe) {
        return instance.post(`auth/login`,{email,password,rememberMe:false});

},
logout() {
    return instance.delete(`auth/login`);

}

}

export const ProfileAPI={

    getProfile(userId) {

        return instance.get(`/profile/${userId}`)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put('profile/status', {status:status});
    }

}
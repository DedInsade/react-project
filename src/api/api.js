import * as axios from "axios";

const instans = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "da7c96b5-2b89-448e-a3d6-6d60c86c505b"
    }
});

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 3) {
        return instans.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    follow(id = 6891) {
        return instans.post(`follow/${id}`)
    },

    unfollow(id = 6891) {
        return instans.delete(`follow/${id}`)
    },

}


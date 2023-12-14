import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    follow(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    getUserProfile(id: string) {
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getUserProfile(id)
    }
}

export const authAPI = {
    me() {
        return instance.get<ResponseType<{ id: number, email: string, login: string }>, AxiosResponse<ResponseType<{
            id: number,
            email: string,
            login: string
        }>>, {}>(`auth/me`)
            .then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<ResponseType<{ userId: number }>, AxiosResponse<ResponseType<{ userId: number }>>, {
            email: string,
            password: string,
            rememberMe: boolean
        }>(`/auth/login`, {email, password, rememberMe})
            .then(response => response.data)
    },
    logout() {
        return instance.delete<ResponseType>(`/auth/login`)
            .then(response => response.data)
    },
}

export const profileAPI = {
    getUserProfile(id: string) {
        return instance.get(`profile/${id}`)
            .then(response => response.data)
    },
    getStatus(id: string) {
        return instance.get(`profile/status/${id}`)
            .then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status/`, {status: status})
            .then(response => response.data)
    }
}

type ResponseType<D = {}> = {
    resultCode: number
    messages: string[],
    data: D
}



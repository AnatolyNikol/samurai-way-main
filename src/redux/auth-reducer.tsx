import {ActionsTypes} from "./store";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";


type AuthReducerType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state: AuthReducerType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export type SetUserDataActionType = ReturnType<typeof setAuthUserData>


export const setAuthUserData = (id: number, email: string, login: string) => {
    return {
        type: 'SET-USER-DATA',
        data: {
            id: id,
            email: email,
            login: login
        }
    } as const
}

export const getAuthUserData = () => {
    return(dispatch: Dispatch) => {
        authAPI.getAuth()
            .then(data => {
                if(data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
}

export default authReducer;
import {ActionsTypes} from "./store";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {AppThunkDispatch} from "./redux-store";
import {stopSubmit} from "redux-form";


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
                ...action.payload
            }
        default:
            return state
    }
}

export type SetUserDataActionType = ReturnType<typeof setAuthUserData>


//action create
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: 'SET-USER-DATA',
        payload: {
            id: id,
            email: email,
            login: login,
            isAuth: isAuth
        }
    } as const
}


//thunks
export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => {

    return (dispatch: AppThunkDispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    }
}

export const logout = () => {
    return (dispatch: Dispatch) => {
        authAPI.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }
}


export default authReducer;
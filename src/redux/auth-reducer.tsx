import {ActionsTypes} from "./store";
import {authAPI, securityAPI} from "../api/api";
import {AppThunkDispatch} from "./redux-store";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai-network/auth/SET-USER-DATA'
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/security/GET_CAPTCHA_URL_SUCCESS'


type AuthReducerType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: string | null
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};


const authReducer = (state: AuthReducerType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}

export type SetUserDataActionType = ReturnType<typeof setAuthUserData>
export type SetCaptchaUrlActionType = ReturnType<typeof getCaptchaUrlSuccess>


//action create
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {
            id: id,
            email: email,
            login: login,
            isAuth: isAuth
        }
    } as const
}

export const getCaptchaUrlSuccess = (captchaUrl: string | null) => {
    return {type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}} as const
}


//thunks
export const getAuthUserData = () => async (dispatch: AppThunkDispatch) => {
    const data = await authAPI.me()

    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}


export const login = (email: string, password: string, rememberMe: boolean, captcha: null | string) => async (dispatch: AppThunkDispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha)

    if (data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}


export const logout = () => async (dispatch: AppThunkDispatch) => {
    const data = await authAPI.logout()

    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch: AppThunkDispatch) => {
    const data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.data.url

    dispatch(getCaptchaUrlSuccess(captchaUrl))
}


export default authReducer;
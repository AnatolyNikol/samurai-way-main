import {AppThunkDispatch} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

let initialState = {
    initialized: false
}

export const appReducer = (state: AppInitialStateType = initialState, action: ActionsTypes): AppInitialStateType => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS":
            return {
                ...state,
                initialized: action.initialized
            }
        default:
            return state
    }
}

//actions
export const initializedSuccess = (initialized: boolean) => ({
    type: 'INITIALIZED-SUCCESS',
    initialized
} as const)


//types
export type setInitializedActionType = ReturnType<typeof initializedSuccess>

type AppInitialStateType = {
    initialized: boolean
}

//thunks
export const initializeApp = () => (dispatch: AppThunkDispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then((res) => {
            dispatch(initializedSuccess(true));
        })
}


type ActionsTypes = setInitializedActionType


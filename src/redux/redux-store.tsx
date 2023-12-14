import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {sidebarReducer} from "./sidebarReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import authReducer from "./auth-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {appReducer} from "./appReducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

export type AppThunkDispatch = ThunkDispatch<AppStateType, any, AnyAction>

export const store = createStore(rootReducer, applyMiddleware(thunk));

// @ts-ignore
window.store = store;




import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {sidebarReducer} from "./sidebarReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk));

// @ts-ignore
window.store = store;




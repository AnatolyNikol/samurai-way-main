import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {sidebarReducer} from "./sidebarReducer";
import {dialogsReducer} from "./dialogsReducer";
import {StoreType} from "./store";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    dialogsPage: dialogsReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

// export const store: StoreType = createStore(reducers);
export const store = createStore(rootReducer);




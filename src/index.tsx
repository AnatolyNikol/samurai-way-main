import React from 'react';
import './index.css';
import {StateType} from './redux/store'
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom";
import {store} from "./redux/redux-store";
import StoreContext from "./StoreContext";

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                {/*<App*/}
                {/*    store={store}*/}
                {/*    state={state}*/}
                {/*    dispatch={store.dispatch.bind(store)}*/}
                {/*/>*/}
                <App state={state}/>
            </StoreContext.Provider>
        </BrowserRouter>, document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
});
import React from 'react';
import './index.css';
import store, {StateType} from './redux/state'
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom";

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={store.addPost.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)}
                addMessage={store.addMessage.bind(store)}
                updateNewMessageText={store.updateNewMessageText.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
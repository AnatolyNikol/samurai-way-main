import React from 'react';
import './index.css';
import state, {addMessage, addPost, StateType, subscribe, updateNewMessageText, updateNewPostText} from './redux/state'
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom";

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                addMessage={addMessage}
                updateNewMessageText={updateNewMessageText}
            />
        </BrowserRouter>, document.getElementById('root')
    );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
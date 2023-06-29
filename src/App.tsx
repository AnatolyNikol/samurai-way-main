import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import {StateType} from "./redux/state";
import Sidebar from "./components/sidebar/Sidebar";


type AppPropsType = {
    state: StateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    addMessage: () => void
    updateNewMessageText: (message: string) => void
}

function App(props: AppPropsType) {

    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Sidebar state={props.state.sidebar}/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile
                        profilePage={props.state.profilePage}
                        addPost={props.addPost}
                        updateNewPostText = {props.updateNewPostText}
                    />}/>
                    <Route path="/dialogs" render={() => <Dialogs
                        state={props.state.dialogsPage}
                        addMessage={props.addMessage}
                        updateNewMessageText={props.updateNewMessageText}
                    />}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
    );
}

export default App;

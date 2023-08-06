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
import {ActionsTypes, StateType, StoreType} from "./redux/store";
import Sidebar from "./components/sidebar/Sidebar";
import DialogsContainer from "./components/dialogs/DialogsContainer";


type AppPropsType = {
    state: StateType
    // store: StoreType
    // dispatch: (action: ActionsTypes) => void
}

function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Sidebar state={props.state.sidebar}/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={() =>
                    <Profile
                        // profilePage={props.state.profilePage}
                        // dispatch={props.dispatch}
                        // store={props.store}
                    />
                }/>
                <Route path="/dialogs" render={() =>
                    // <Dialogs
                    //     state={props.state.dialogsPage}
                    //     dispatch={props.dispatch}
                    // />
                    // <DialogsContainer store={props.store}/>
                    <DialogsContainer/>
                }/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;

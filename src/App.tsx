import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import {SidebarContainer} from "./components/sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import {AppStateType} from "./redux/redux-store";
import Preloader from "./components/common/preloader/Preloader";


class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <SidebarContainer/>
                <div className="app-wrapper-content">
                    <Route path="/profile:userId?" render={() =>
                        <ProfileContainer/>
                    }/>
                    <Route path="/dialogs" render={() =>
                        <DialogsContainer/>
                    }/>
                    <Route path="/users" render={() =>
                        <UsersContainer/>
                    }/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

//types
type AppPropsType = {
    initializeApp: () => void
    initialized: boolean
}




const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})
export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {
        initializeApp
    })
)(App);

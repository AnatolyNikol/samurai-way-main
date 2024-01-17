import React, {Suspense} from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import {SidebarContainer} from "./components/sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import {AppStateType, store} from "./redux/redux-store";
import Preloader from "./components/common/preloader/Preloader";
import {withSuspense} from "./hoc/withSuspanse";

const DialogsContainer = React.lazy(() => import("./components/dialogs/DialogsContainer"))
// import DialogsContainer from "./components/dialogs/DialogsContainer";
const ProfileContainer = React.lazy(() => import("./components/profile/ProfileContainer"))

// import ProfileContainer from "./components/profile/ProfileContainer";


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
                    {/*<Route path="/profile:userId?" render={() => {*/}
                    {/*    return <Suspense fallback={<Preloader/>}>*/}
                    {/*        <ProfileContainer/>*/}
                    {/*    </Suspense>*/}
                    {/*}*/}
                    {/*}/>*/}
                    <Route path="/profile:userId?" render={withSuspense(ProfileContainer)}/>
                    {/*<Route path="/dialogs" render={() => {*/}
                    {/*    return <Suspense fallback={<Preloader/>}>*/}
                    {/*        <DialogsContainer/>*/}
                    {/*    </Suspense>*/}
                    {/*}}/>*/}
                    <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
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
let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {
        initializeApp
    })
)(App);

export const SamuraiJSApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

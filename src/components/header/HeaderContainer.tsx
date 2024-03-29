import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {logout} from "../../redux/auth-reducer";

type HeaderContainerPropsType = {
    login: string | null,
    isAuth: boolean,
    // getAuthUserData: () => void
    logout: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType, any> {
    // componentDidMount() {
    //     this.props.getAuthUserData()
    // }
    render() {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect(mapStateToProps, {
    logout
})(HeaderContainer);
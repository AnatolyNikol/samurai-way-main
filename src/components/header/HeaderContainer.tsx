import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

type HeaderContainerPropsType = {
    // id: number | null,
    // email: string | null,
    login: string | null,
    isAuth: boolean,
    setAuthUserData: (id: number, email: string, login: string) => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType, any>{
    componentDidMount() {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //     withCredentials: true
        // })
        authAPI.getAuth()
            .then(data => {
                if(data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

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
    setAuthUserData
}) (HeaderContainer);
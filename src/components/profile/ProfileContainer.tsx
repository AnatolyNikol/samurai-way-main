import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile, userProfileType} from "../../redux/profileReducer";



type profileAPIPropsTypePropsType = {
    profile: userProfileType
    setUserProfile: (profile: userProfileType) => void
}

class ProfileContainer extends React.Component<profileAPIPropsTypePropsType, any>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps,{setUserProfile})(ProfileContainer);
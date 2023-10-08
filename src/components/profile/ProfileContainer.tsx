import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile, userProfileType} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";



// type profileAPIPropsTypePropsType = {
//     profile: userProfileType
//     setUserProfile: (profile: userProfileType) => void
// }

type PathParamsType = {
    userId: string
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    profile: userProfileType
}

type MapDispatchPropsType = {
    setUserProfile: (profile: userProfileType) => void
}

type ProfileAPIPropsType = RouteComponentProps<PathParamsType> & OwnPropsType


class ProfileContainer extends React.Component<ProfileAPIPropsType, any>{

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = '2';
        }

        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        profileAPI.getUserProfile(userId)
            .then(data => {
                this.props.setUserProfile(data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps,{setUserProfile})(WithUrlDataContainerComponent);
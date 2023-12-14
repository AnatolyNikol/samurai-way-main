import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, getUserStatus, updateUserStatus, userProfileType} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type PathParamsType = {
    userId: string
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    profile: userProfileType
    status: string
    id: number | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
    getUserStatus: (status: string) => void
    updateUserStatus: (status: string) => void
}

type ProfileAPIPropsType = RouteComponentProps<PathParamsType> & OwnPropsType


class ProfileContainer extends React.Component<ProfileAPIPropsType, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = JSON.stringify(this.props.id);
        }

        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}
            />
        )
    }
}


// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
//
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        id: state.auth.id,
        isAuth: state.auth.isAuth
    }
}
//
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps,{getUserProfile})(WithUrlDataContainerComponent);

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
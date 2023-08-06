import {connect} from "react-redux";
import Sidebar from "./Sidebar";
import {AppStateType} from "../../redux/redux-store";
import {SidebarType} from "../../redux/store";

type mapStateToPropsType = {
    sidebar: SidebarType
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        sidebar: state.sidebar
    }
}

export const SidebarContainer = connect(mapStateToProps)(Sidebar);


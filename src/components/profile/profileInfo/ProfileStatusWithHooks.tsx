import React, {useEffect, useState} from "react";


export type ProfileStatusType = {
    status: string
    updateUserStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status);
    }

    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
                <div>
                   <b>Status</b>: <span onDoubleClick={activateEditMode}>{props.status || '----'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus onBlur={deactivateEditMode} onChange={onStatusChange} value={status}/>
                </div>
            }

        </div>
    )
}


export default ProfileStatusWithHooks;
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

export type AddFormDataType = {
    newMessageBody: string
}

const maxLength50 = maxLengthCreator(50)

export const AddMessageForm = (props: InjectedFormProps<AddFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       name={'newMessageBody'}
                       placeholder='enter new message'/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm<AddFormDataType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)
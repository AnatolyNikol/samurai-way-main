import React from "react";
import styles from "./FormsControls.module.css"
import {Field} from "redux-form";
import {FieldValidatorType} from "../../../utils/validators/validators";
import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form/lib/Field";


const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    // const {input, meta, child, ...restProps} = props
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
    )
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    // const {input, meta, child, ...restProps} = props
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    )
}

export const createField = (placeholder: string | undefined,
                            name: string,
                            validators: FieldValidatorType[],
                            component: React.FC<WrappedFieldProps>,
                            props = {},
                            text = '') => {
    return (
        <div>
            <Field placeholder={placeholder}
                   name={name}
                   validate={validators}
                   component={component}
                {...props} /> {text}
        </div>
    )
}


//types

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}


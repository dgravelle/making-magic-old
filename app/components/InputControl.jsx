import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

const InputControl = (props) => {
        return (
            <TextField
                id={props.id}
                defaultValue={props.defaultValue}
                errorText={props.errorMessage}
                onBlur={props.handleBlur}
                placeholder={props.placeholder}
                type={props.type}
            />
        )
}

InputControl.handleBlur = (e) => {
    let valid = props.validate(e.target.value);
}

export default InputControl;

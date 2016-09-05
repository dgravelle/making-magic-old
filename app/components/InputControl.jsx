import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

class InputControl extends Component {
    constructor(props) {
        super(props)

        this.handleBlur = this.handleBlur.bind(this);
    }

    handleBlur(e) {
        console.log('tyring');
        let valid = this.props.validate(e.target.value);
    }

    render() {
        return(
            <TextField
                id={this.props.id}
                defaultValue={this.props.defaultValue}
                errorText={this.props.errorMessage}
                onBlur={this.handleBlur}
                placeholder={this.props.placeholder}
                type={this.props.type}
            />
        )
    }
}


export default InputControl;

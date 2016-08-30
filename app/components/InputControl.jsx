import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import classNames from 'classnames';

class InputControl extends Component {
    constructor(props) {
        super(props)

        this.handleBlur = this.handleBlur.bind(this);
    }

    handleBlur(e) {
        let valid = this.props.validate(e.target.value);
    }

    render() {
        return (
            <TextField
                id={this.props.id}
                errorText={this.props.errorMessage}
                placeholder={this.props.placeholder}
                onBlur={this.handleBlur}
                type={this.props.type}
            />
        )
    }
}

export default InputControl;

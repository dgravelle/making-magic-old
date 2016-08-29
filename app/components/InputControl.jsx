import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import InputError from './InputError.jsx';
import classNames from 'classnames';

class InputControl extends Component {
    constructor(props) {
        super(props)

        this.state = {
            errorVisible: false,
            errorMessage: 'invalid input',
            valid: true,
            value: props.initialValue,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    handleBlur(e) {
        let valid = this.props.validate(e.target.value)

        this.setState({
            errorVisible: valid.valid, errorMessage: valid.message
        });
    }

    render() {
        let classes = classNames({
                'input-control' : true,
                'has-error': this.state.valid
            });

        return <div>
            <TextField
                className={classes} placeholder={this.props.placeholder}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                type={this.props.type}
                validate={this.props.validate}
                value={this.state.value}
            />

            <InputError
                visible={this.state.errorVisible} errorMessage={this.state.errorMessage}
            />

        </div>
    }
}

export default InputControl;

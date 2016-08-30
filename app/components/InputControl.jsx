import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import InputError from './InputError.jsx';
import classNames from 'classnames';

class InputControl extends Component {
    constructor(props) {
        super(props)

        this.state = {
            errorVisible: false,
            errorMessage: null,
            valid: true,
            value: props.initialValue,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    handleBlur(e) {
        console.log(this.props);
        let valid = this.props.validate(e.target.value)

        console.log(valid);

        this.setState({
            errorVisible: valid.valid,
            errorMessage: valid.message
        });
    }

    render() {
        let classes = classNames({
                'input-control' : true,
                'has-error': this.state.valid
            });

        return <div>
            <TextField
                id={this.props.id}
                className={classes}
                errorText={this.state.errorMessage}
                placeholder={this.props.placeholder}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                type={this.props.type}
                value={this.state.value}
            />
{/* 
            <InputError
                visible={this.state.errorVisible} errorMessage={this.state.errorMessage}
            /> */}

        </div>
    }
}

export default InputControl;

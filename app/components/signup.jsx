import React, {Component} from 'react';
import InputControl from './InputControl.jsx';
import RaisedButton from 'material-ui/RaisedButton';

class SignupForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: props.initialEmail || 'your@email.com',
            password: props.initialPassword || 'password'
        }
    }

    handleSubmit() {

    }

    validateEmail() {
        let response = {};

        if (this.state.email === '') {
            response.message = 'yo dont leave me hangin';
            response.valid = false;

            return response;
        } else {
            response.valid = true;
            response.message = null;

            return response;
        }
    }


    render() {
        return <form>
                <InputControl placeholder="Email" type="email" value={this.state.email} onBlur={this.validateEmail()}/>
                <br/>
                <InputControl
                    placeholder="Password"
                />
                <br/>
                <RaisedButton
                    label="Signup"
                    onClick="handleSubmit()"/>
            </form>
    }
}

SignupForm.propTypes = {
    initialEmail: React.PropTypes.string,
    initialPassword: React.PropTypes.string
}

SignupForm.defualtProps = {}

export default SignupForm;

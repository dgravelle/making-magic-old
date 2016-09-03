import React from 'react';
import InputControl from './InputControl.jsx';
import RaisedButton from 'material-ui/RaisedButton';

class SignupForm extends React.Component {
    constructor(props) {
        super(props)

        this.validateEmail = this.validateEmail.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            email: props.email,
            password: props.password,
            valid: props.valid,
            errorMessage: props.errorMessage
        }
    }

    componentWillMount() {
        console.log(this.state);
    }

    componentWillReceiveProps() {
        console.log('mounted');
    }

    handleSubmit() {

    }

    validatePassword(password) {
        let currentState = this.state;

        if (password.length < 6) {
            currentState.valid.password = false
        }
        else {
            currentState.valid.password = true
        }

        this.setState(currentState);
    }

    validateEmail(email) {
        // var reg = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

        if (email.match(reg)) {
            this.setState({
                valid: {
                    email: true
                }
            });
        }
        else {
            this.setState({
                errorMessage: {
                    email: 'please input a valid email'
                }
            });
        }
    }


    render() {
        let isFormValid = this.state.valid.email && this.state.valid.password;

        return (
            <form name="signup">
                <InputControl
                    id="email"
                    errorMessage={this.state.errorMessage.email}
                    placeholder="Email"
                    type="email"
                    valid={this.state.valid.email}
                    validate={this.validateEmail}
                />
                <br/>
                <InputControl
                    id="password"
                    errorMessage={this.state.errorMessage.password}
                    placeholder="Password"
                    type="password"
                    valid={this.state.valid.password}
                    validate={this.validatePassword}
                />
                <br/>
                <RaisedButton
                    label="Signup"
                    onClick={this.handleSubmit}
                    disabled={!isFormValid}
                />
            </form>
        )
    }
}

SignupForm.propTypes = {
    email: React.PropTypes.string,
    password: React.PropTypes.string,
    valid: React.PropTypes.object,
    errorMessage: React.PropTypes.object

}

SignupForm.defaultProps = {
    email: 'your@email.com',
    password: 'password',
    valid: {
        email: false,
        password: false
    },
    errorMessage: {
        email: '',
        password: ''
    }
}

export default SignupForm;

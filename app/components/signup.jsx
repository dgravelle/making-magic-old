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

    validateEmail(email) {
        var reg = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

        var response = {};

        console.log(email.match(reg));

        if (email.match(reg)) {
            response.valid = true;
            response.message = null;

            return response;
        }
        else {
            response.valid = false;
            response.message = 'please provide a valid email'

            return response;
        }
    }


    render() {
        return <form name="signup">
                <InputControl
                    id="email"
                    placeholder="Email"
                    type="email"
                    validate={this.validateEmail}
                />
                <br/>
                <InputControl
                    id="password"
                    placeholder="Password"
                    type="password"
                />
                <br/>
                <RaisedButton
                    label="Signup"
                    onClick={this.handleSubmit}
                />
            </form>
    }
}

SignupForm.propTypes = {
    initialEmail: React.PropTypes.string,
    initialPassword: React.PropTypes.string
}

SignupForm.defualtProps = {

}

export default SignupForm;

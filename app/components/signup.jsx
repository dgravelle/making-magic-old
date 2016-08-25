import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class SignupForm extends Component {
  render() {
    return <form>
      <TextField
        hintText="Email"
        type="email"
      />
      <br/>
      <TextField
        hintText="Password"
        type="password"
      />
      <br />
      <RaisedButton label="Signup" />
    </form>
  }
}

export default SignupForm;

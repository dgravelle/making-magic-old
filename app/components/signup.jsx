import React, { Component } from 'react'
import TextField from 'material-ui/TextField'

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
    </form>
  }
}

export default SignupForm;

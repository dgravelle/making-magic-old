import React, { Component } from 'react'

class SignupForm extends Component {
  render() {
    return <form>
      <label>Email</label>
      <input id="email" type="email" />
    </form>
  }
}

export default SignupForm;

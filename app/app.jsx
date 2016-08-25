import React, { Component } from 'react'
import { render } from 'react-dom'
import SignupForm from './components/signup.jsx'

class App extends Component {
  render() {
    return <div>
      <SignupForm />
    </div>
  }
}

render(
  <App/>,
  document.getElementById('app')
)

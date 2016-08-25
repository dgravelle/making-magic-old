import React, { Component } from 'react'
import { render } from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SignupForm from './components/signup.jsx'

class App extends Component {
  render() {
    return <MuiThemeProvider>
      <SignupForm />
    </MuiThemeProvider>
  }
}

render(
  <App/>,
  document.getElementById('app')
)

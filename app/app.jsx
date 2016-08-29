import React, {Component} from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import SignupForm from './components/Signup.jsx';

injectTapEventPlugin()

class App extends Component {
    render() {
        return <MuiThemeProvider>
            <SignupForm/>
        </MuiThemeProvider>
    }
}

render(
    <App/>, document.getElementById('app'))

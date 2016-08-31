import React, {Component} from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Dashboard from './components/Dashboard/Dashboard.jsx';

injectTapEventPlugin()

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Dashboard />
            </MuiThemeProvider>
        )
    }
}

render(
    <App/>, document.getElementById('app'))

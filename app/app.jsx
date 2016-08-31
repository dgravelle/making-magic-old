import React, {Component} from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import CardSearch from './components/CardSearch/CardSearch.jsx';
import SearchBar from './components/CardSearch/SearchBar.jsx';

injectTapEventPlugin()

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <SearchBar />
            </MuiThemeProvider>
        )
    }
}

render(
    <App/>, document.getElementById('app'))

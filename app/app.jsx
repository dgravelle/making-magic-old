import React, {Component} from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import DeckEditor from './components/CardSearch/CardSearch.jsx';
import EDHEditorContainer from './components/Editor/EDHEditorContainer.jsx';
import AllDecks from './components/Decks/AllDecks.jsx';
import SignupForm from './components/Signup.jsx';

injectTapEventPlugin()

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Router history={browserHistory}>
                    <Route path="/" component={Dashboard}>
                        <IndexRoute component={AllDecks}/>
                        <Route path="/decks" component={DeckEditor} />
                        <Route path="/new" component={SignupForm} />
                    </Route>
                </Router>
            </MuiThemeProvider>
        )
    }
}

render(
    <App/>, document.getElementById('app'));

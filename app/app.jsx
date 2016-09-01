import React, {Component} from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import DeckEditor from './components/CardSearch/CardSearch.jsx';

injectTapEventPlugin()

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Router history={browserHistory}>
                    <Route path="/" component={Dashboard}>
                        <Route path="/decks" component={DeckEditor}>
                            {/* <Route to="/decks/:deckName" component={Deck} />
                            <Route to="/decks/:deckName/:edit" component={DeckEditor} /> */}
                        </Route>
                    </Route>
                </Router>
            </MuiThemeProvider>
        )
    }
}

render(
    <App/>, document.getElementById('app'))

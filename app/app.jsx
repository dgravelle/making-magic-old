import React, {Component} from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import DeckEditor from './components/CardSearch/CardSearch.jsx';
import EDHEditorContainer from './components/Editor/EDHEditorContainer.jsx';
import AllDecks from './components/Decks/AllDecks.jsx';
import CardSearch from './components/CardSearch/CardSearch.jsx';
import Signup from './components/Signup.jsx';

injectTapEventPlugin()

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Dashboard}>
                    <IndexRoute component={Signup} />
                    <Route path="/decks" component={AllDecks}/>
                    <Route path="/new" component={EDHEditorContainer} />
                </Route>
            </Router>
        )
    }
}

render(
    <App/>, document.getElementById('app'));

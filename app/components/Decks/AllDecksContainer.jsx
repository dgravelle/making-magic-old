import React from 'react';
import AllDecks from './AllDecks.jsx';

class AllDecksContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            decks: []
        }
    }

    componentDidMount() {
        var userId = 1
        $.get('http://localhost:3000/decks/' + userId, result => {
            console.log(decks);
            var decks = result;
            this.setState({ decks: decks });
        });
    }

    render() {
        return (
            <AllDecks props={this.state.decks} />
        )
    }
}

import React, { Component } from 'react';

class AllDecks extends Component {
    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return <h2>All Decks</h2>
    }
}

export default AllDecks;

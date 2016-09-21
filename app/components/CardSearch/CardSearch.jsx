import React, {Component} from 'react';
import $ from 'jquery';
import SearchBar from './SearchBar.jsx';
import SearchResults from './SearchResults.jsx';

class CardSearch extends Component {
    constructor(props) {
        super(props)

        this.search = this.search.bind(this);
        this.toggleColor = this.toggleColor.bind(this);
        this.updateQuery = this.updateQuery.bind(this);


        this.state = {
            colors: {
                white: false,
                blue: false,
                black: false,
                red: false,
                green: false
            },
            query: '',
            results: []
        }
    }

    updateQuery(e) {
        let newState = this.state
        newState.query = e.target.value;

        this.setState(newState);
    }

    toggleColor(e) {
        let val = e.target.value;
        let currentState = this.state;

        currentState.colors[val] = !currentState.colors[val];

        this.setState(currentState);
    }

    search(e) {
        e.preventDefault();
        console.log(e);
        console.log(this.state);

        let colors = this.state.colors;
        let query = ''

        for (let i in colors) {
            if (colors[i]) {
                if (query.length > 0) {
                    query+= `,${i}`;
                }
                else {
                    query = `${i}`;
                }
            }
        }

        console.log(`https://api.magicthegathering.io/v1/cards?colors="${query}"`);

        let apiUrl = `https://api.magicthegathering.io/v1/cards?colors="${query}"`

        $.get(apiUrl, cards => {

            var results = [];

            cards.cards.map(card => {
                if (!card.imageUrl)
                    // card.imageUrl = `http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${card.multiverseid}&type=card`
                    console.log(card);
                
                results.push(card);

            });
            console.log('results',results);
            this.setState({ results: results });
        });
    }

    render() {
        return (
            <form
                id="cardSearch"
                className="card-search"
                onSubmit={this.search}
                name="cardSearch"
                noValidate>
                <SearchBar
                    search={this.search}
                    toggle={this.toggleColor}
                    updateQuery={this.updateQuery}
                    />
                <SearchResults results={this.state.results} />
            </form>
        )
    }
}

export default CardSearch;

import React, {Component} from 'react';
import $ from 'jquery';
import SearchBar from './SearchBar.jsx';
import SearchResults from './SearchResults.jsx';

const style = {
    'card-search-container' : {
        // display: 'flex',
    }
}

class CardSearch extends Component {
    constructor(props) {
        super(props)

        this.search = this.search.bind(this);
        this.toggleColor = this.toggleColor.bind(this);
        this.updateQuery = this.updateQuery.bind(this);

        // console.log('card search props',this.props);

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

        let colors = this.state.colors;
        let colorQuery = ''

        for (let i in colors) {
            if (colors[i]) {
                if (colorQuery.length > 0) {
                    colorQuery+= `,${i}`;
                }
                else {
                    colorQuery = `${i}`;
                }
            }
        }


        let apiUrl = `https://api.magicthegathering.io/v1/cards?colors="${colorQuery}"`

        $.get(apiUrl, cards => {

            var results = [];

            // console.log(cards);

            cards.cards.map(card => {
                // if (!card.imageUrl)
                    // card.imageUrl = `http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${card.multiverseid}&type=card`

                results.push(card);

            });

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
                noValidate
                style={style['card-search-container']}
                >
                <SearchBar
                    search={this.search}
                    toggle={this.toggleColor}
                    updateQuery={this.updateQuery}
                    />
                <SearchResults
                    add={this.props.addToDeck}
                    results={this.state.results} />
            </form>
        )
    }
}

export default CardSearch;

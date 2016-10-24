import React, {Component} from 'react';
import $ from 'jquery';
import SearchBar from './SearchBar.jsx';
import SearchResults from './SearchResults.jsx';

const style = {
    'card-search-container' : {
        display: 'flex',
        flexDirection: 'column'
    }
}

class CardSearch extends Component {
    constructor(props) {
        super(props)

        this.search = this.search.bind(this);
        this.toggleColor = this.toggleColor.bind(this);
        this.updateQuery = this.updateQuery.bind(this);
        this.updateTextOptions = this.updateTextOptions.bind(this);

        this.state = {
            colors: {
                white: false,
                blue: false,
                black: false,
                red: false,
                green: false
            },
            textOptions: {
                name: false,
                type: false,
                text: false
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

    updateTextOptions(e) {
        let opt = e.target.value
        let newState = this.state

        newState.textOptions[opt] = !newState.textOptions[opt];

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
        let textOptions = this.state.textOptions;
        let colorQuery = '';
        let textOptionsQuery = '';
        let query = this.state.query;

        for (let i in colors) {
            if (colors.hasOwnProperty(i)) {
                if (colors[i]) {
                    if (colorQuery.length > 0) {
                        colorQuery += `,${i}`;
                    }
                    else {
                        colorQuery = `${i}`;
                    }
                }
            }
        }


        for (let i in textOptions) {
            if (textOptions.hasOwnProperty(i)) {
                if(textOptions[i]) {
                    textOptionsQuery += `&${i}=${query}`;
                }
            }
        }

        let apiUrl = `https://api.magicthegathering.io/v1/cards?colors="${colorQuery}"${textOptionsQuery}&pageSize=10`;

        $.get(apiUrl, cards => {

            var results = [];

            cards.cards.map(card => {

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
                    updateTextOptions={this.updateTextOptions}
                    />
                <SearchResults
                    add={this.props.addToDeck}
                    results={this.state.results} />
            </form>
        )
    }
}

export default CardSearch;

import React, {Component} from 'react';
import $ from 'jquery';
import SearchBar from './SearchBar.jsx';
import SearchResults from './SearchResults.jsx';

class CardSearch extends Component {
    constructor(props) {
        super(props)

        this.handleSelection = this.handleSelection.bind(this);
        this.searchInColors = this.searchInColors.bind(this);

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
    
    handleSelection(event, index, value) {
        console.log(value);
        this.searchInColors(value)
        // this.setState({colors: value});
    }

    searchInColors(colors) {


        $.get('https://api.magicthegathering.io/v1/cards?colors=' + colors + '&page=1&pageSize=50', cards => {

            var results = [];

            cards.cards.map(card => {
                if(card.colors.includes('Green') || card.colors.includes('Black') || card.colors.includes('Red')) {

                }
                else {
                    // console.log(card);
                    results.push(card);
                }
            });
            console.log('results',results);
            this.setState({ results: results });
        });
    }

    render() {
        return (
            <div className="card-search">
                <SearchBar handleSelection={this.handleSelection}/>
                <SearchResults results={this.state.results} />
            </div>
        )
    }
}

export default CardSearch;

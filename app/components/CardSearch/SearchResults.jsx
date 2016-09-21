import React from 'react';
import CardDisplay from './CardDisplay.jsx';

class SearchResults extends React.Component {
    constructor(props) {
        super(props)

        console.log('search results',this.props);
        this.addToDeck = this.addToDeck.bind(this);
    }

    addToDeck(card) {
        console.log(card);
        this.props.add(card);
    }

    render() {
        let results = [];

        return (
            <div className="results-container">
                {this.props.results.map(card => {
                    return (
                        <CardDisplay key={card.id}
                            name={card.name}
                            manaCoast={card.manaCoast}
                            imageUrl={card.imageUrl}
                            text={card.text}
                            add={this.addToDeck.bind(card)}
                        />
                    )
                })}
            </div>
        )
    }
}

export default SearchResults;

import React from 'react';
import CardDisplay from './CardDisplay.jsx';

class SearchResults extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        let results = [];

        // console.log('SearchResults',results);
        return (
            <div className="results-container">
                {this.props.results.map(card => {
                    return (
                        <CardDisplay key={card.id}
                            name={card.name}
                            manaCoast={card.manaCoast}
                            imageUrl={card.imageUrl}
                            text={card.text}
                        />
                    )
                })}
            </div>
        )
    }
}

export default SearchResults;

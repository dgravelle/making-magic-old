import React from 'react';

class DeckView extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        let cards = [];

        this.props.deckList.map(card => {
            cards.push(<li key={card.id}>{card.name}</li>);
        })

        console.log(cards[0]);

        return(
            <div className="deck-view-container">
                <ul>
                    {cards}
                </ul>
            </div>
        )
    }
}

export default DeckView;

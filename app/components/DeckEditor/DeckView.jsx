import React from 'react';

class DeckView extends React.Component {
    constructor(props) {
        super(props)

        this.sortDeck = this.sortDeck.bind(this);

    }

    sortDeck() {
        let sort = {
            land: [],
            artifact: [],
            creature: [],
            enchantment: [],
            spell: []
        }

        this.props.deckList.forEach(card => {
            console.log('card types',card.types);
            card.types.forEach(type => {
                console.log(sort[type.toLowerCase()]);
                sort[type.toLowerCase()].push(card);
                console.log('sort',sort);
            })
        });

        return sort;
    }

    render() {
        let allCards = []

        let types = this.sortDeck();

        for (let type in types) {
            let cards = [];
            types[type].forEach(card => {
                cards.push(<li key={card.id}>{card.name}</li>);
            })

            allCards.push(<ul>{cards}</ul>);
        }




        return(
            <div className="deck-view-container">
                {allCards}
            </div>
        )
    }
}

export default DeckView;

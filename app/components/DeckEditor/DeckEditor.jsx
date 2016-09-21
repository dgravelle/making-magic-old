import React from 'react';
import CardSearch from '../CardSearch/CardSearch.jsx';
import DeckView from './DeckView.jsx'

class DeckBuilderContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            deckList: []
        }

        this.add = this.add.bind(this);
        this.checkForDoubles = this.isCardDupe.bind(this);

    }

    isCardDupe(card) {
        let newState = this.state;
        console.log(`checking for dupe: ${card}`);
        if (newState.deckList.length < 1)
            return false;

        let deckList = this.state.deckList;
        let dupe = false;

        for (var i = 0; i < deckList.length; i++) {
            console.log(deckList[i]);
            if(card.id === deckList[i].id) {
                dupe = true;
                return dupe
            }
        }

        return dupe;
    }

    add(card) {
        let newState = this.state;
        console.log(newState);
        if (!this.isCardDupe(card)) {
            newState.deckList.push(card);
        }
        else {
            alert(`you've already got ${card.name} in your deck.`)
        }

        console.log(newState.deckList);

        this.setState(newState);


    }

    render() {
        return(
            <main className="deckbuilder-container">
                <CardSearch
                    addToDeck={this.add}
                    />
                <DeckView deckList={this.state.deckList}/>
            </main>
        )
    }

}

export default DeckBuilderContainer;

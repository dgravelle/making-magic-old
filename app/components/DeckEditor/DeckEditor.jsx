import React from 'react';
import CardSearch from '../CardSearch/CardSearch.jsx';
import DeckView from './DeckView.jsx'

const styles = {
    row: {
        'display': 'flex'
    },
    col: {
        'flex': '1'
    }
}

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

        if (newState.deckList.length < 1)
            return false;

        let deckList = this.state.deckList;
        let dupe = false;

        for (var i = 0; i < deckList.length; i++) {
            if(card.id === deckList[i].id) {
                dupe = true;
                return dupe
            }
        }

        return dupe;
    }

    add(card) {
        let newState = this.state;
        if (!this.isCardDupe(card)) {
            newState.deckList.push(card);
            this.setState(newState);
        }
        else {
            alert(`you've already got ${card.name} in your deck.`)
        }
    }

    render() {
        return(
            <main className="deckbuilder-container" style={styles.row}>
                <section style={styles.col}>
                    <CardSearch
                        addToDeck={this.add}

                        />
                </section>
                <section style={styles.col}>
                    <DeckView
                        deckList={this.state.deckList}
                        styles={styles.col}
                        />
                </section>
            </main>
        )
    }

}

export default DeckBuilderContainer;

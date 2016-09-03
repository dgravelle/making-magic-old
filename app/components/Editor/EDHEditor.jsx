import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import InfoForm from './EDHInfoForm.jsx';

class EDHEditor extends React.Component {
    constructor(props) {
        super(props)

        // console.log(this.props.deck);
        this.state({
            deck: this.props.deck
        })
    }

    render() {
        return (
            <Tabs>
                <Tab label="description">
                    <p>Form</p>
                </Tab>
                <Tab label="editDeckList">
                    <p>editDeckList</p>
                </Tab>
                <Tab label="deckList">
                    <p>DeckList</p>
                </Tab>
            </Tabs>
        )
    }

}

export default EDHEditor;

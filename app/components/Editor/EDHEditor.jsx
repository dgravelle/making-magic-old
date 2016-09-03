import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import InfoForm from './EDHInfoForm.jsx';

class EDHEditor extends React.Component {
    componentWillMount() {
    }

    render() {
        return (
            <Tabs>
                <Tab label="description">
                    <InfoForm deck={this.props.deck} />
                </Tab>
                <Tab label="editDeckList">
                    <p>editDeckList</p>
                </Tab>
                <Tab label="deckStats">
                    <p>Deck Stats</p>
                </Tab>
            </Tabs>
        )
    }

}

export default EDHEditor;

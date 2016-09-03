import React from 'react';
import EDHEditor from './EDHEditor.jsx';

const testDeck = {
    id: 0,
    commander: '',
    colors: ['g'],
    description: 'test deck description',
    title: 'test deck title',
    list: []
}

class EDHEditorContainer extends React.Component {
    constructor() {
        super()

        this.state ={
            deck: testDeck
        }
    }

    render() {
        return (
            <EDHEditor deck={this.state.deck} />
        )
    }
}

export default EDHEditorContainer;

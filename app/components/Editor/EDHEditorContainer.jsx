import React from 'react';
// import EDHEditor from './EDHEditor.jsx';

const testDeck = {
    id: 0,
    commander: '',
    colors: [],
    description: '',
    title: ''
}

class EDHEditorContainer extends React.Component {
    constructor() {
        super()

        this.state({
            deck: {
                id: 0,
                commander: '',
                colors: [],
                description: '',
                title: ''
            }
        })
    }

    render() {
        // return <EDHEditor deck={this.state.deck} />
        return <p>EDH Container</p>
    }
}

export default EDHEditorContainer;

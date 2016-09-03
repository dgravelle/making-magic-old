import React from 'react';
import InputControl from '../InputControl.jsx';

class EDHInfoForm extends React.Component {
    constructor(props) {
        super(props)

        this.state({
            deck: this.props.deck
        })
    }

    render() {
        return(
            <form>
                <InputControl type="text" value={this.state.deck.title} />
                <br/>
                <InputControl type="text" value={this.state.deck.commander} />
                <br/>
                <InputControl type="text" value={this.state.deck.description} />
                <br/>
                <InputControl type="text" value={this.state.deck.description} />
                <br/>

            </form>
        )
    }
}

export default EDHInfoForm;

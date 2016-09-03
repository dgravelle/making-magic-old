import React from 'react';
import InputControl from '../InputControl.jsx';
import RaisedButton from 'material-ui/RaisedButton';

class EDHInfoForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: {
                value: '',
                error: true,
                errorMessage: "hey, don't you want your deck to have a cool name?"
            },
            commander: {
                value: '',
                error: true,
                errorMessage: "Your deck needs a commander!"
            },
            valid: false
        }
    }

    componentWillMount() {

    }

    render() {
        return(
            <form>
                <legend><h2>Deck Info</h2></legend>
                <InputControl
                    id="title"
                    type="text"
                    defaultValue={this.props.deck.title}
                    errorText={this.state.title.errorMessage}
                    placeholder="Deck title"
                    validate={this.props.validateTitle}
                />
                <br/>
                <InputControl
                    id="description"
                    type="text"
                    validate={this.validateDescription}
                    defaultValue={this.props.deck.description}
                />
                <br/>
                <InputControl
                    id="commander"
                    type="text"
                    onBlur={this.validateCommander}
                    defaultValue={this.props.deck.commander}
                    errorText={this.props.deck.commander.errorMessage}
                />
                <br/>
                <InputControl
                    id="colors"
                    type="text"
                    defaultValue={this.props.deck.colors}
                />

                <br/>
                <RaisedButton label="Save" />
            </form>
        )
    }
}

export default EDHInfoForm;

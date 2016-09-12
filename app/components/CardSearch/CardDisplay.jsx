import React from 'react';

class CardDisplay extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillReceiveProps(props) {
        console.log('card props', props);
    }

    render() {
        return (
            <div className="card-container">
                <div className="img-container--card">
                    <img src={this.props.imageUrl} />
                </div>
                <div className="card-info">
                    {this.props.name}
                </div>

            </div>
        )
    }
}

export default CardDisplay;

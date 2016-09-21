import React from 'react';

const styles = {
    'card-container': {
        display: 'flex'
    }
}

class CardDisplay extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillReceiveProps(props) {
        console.log('card props', props);
    }

    render() {
        return (
            <div style={styles['card-container']}>
                <div className="img-container--card">
                    <img src={this.props.imageUrl} />
                    <p>{this.props.imageUrl}</p>
                </div>
                <div className="card-info">
                    <h3 className="card-info__name">  {this.props.name}</h3>
                    <p className="card-info__text">{this.props.text}</p>
                </div>

            </div>
        )
    }
}

export default CardDisplay;

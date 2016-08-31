import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Search from 'material-ui/svg-icons/action/search';

const green = {
    'border-radius': '50%',
    'background' : 'rgba(172,211,172,1)',
    'color': 'black',
    padding: '4px'
}

class SearchBar extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <TextField
                    id="search"
                    type="text"
                />
                <IconButton>
                    <Search />
                </IconButton>
                <br/>
            <section>
                <label>
                    <i className="ms ms-g" style={green}></i>
                    <br/>
                    <input type="checkbox" />
                </label>
            </section>
            </div>
        )
    }
}

export default SearchBar;

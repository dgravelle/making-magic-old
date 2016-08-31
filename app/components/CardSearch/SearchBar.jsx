import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Search from 'material-ui/svg-icons/action/search';

class SearchBar extends Component {
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
            </div>
        )
    }
}

export default SearchBar;

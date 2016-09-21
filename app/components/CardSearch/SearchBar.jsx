import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Search from 'material-ui/svg-icons/action/search';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
// import ColorCheck from 'ColorCheck' './ColorCheck.jsx';
import Checkbox from 'material-ui/Checkbox';

var ManaIcon = function() {
    this.borderRadius = '50%';
    this.color = 'black';
    this.padding = '4px';
    this.transition = 'transition: all .2s ease-in-out';
}

const white = new ManaIcon();
white.background = 'rgb(248, 246, 216)';
const whiteChecked = white;

const blue = new ManaIcon();
blue.background = 'rgb(193, 215, 233)';

const black = new ManaIcon();
black.background = 'rgb(186, 177, 171)';

const red = new ManaIcon();
red.background = 'rgba(228,153,119,1)';

const green = new ManaIcon();
green.background = 'rgba(172,211,172,1)';

const checkStyle = {
    marginBottom: 16,
    width: '30%'
};


class SearchBar extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="search-options">
                <TextField
                    id="search"
                    type="text"
                    onChange={this.props.updateQuery}
                />
                <IconButton onClick={this.props.search}>
                    <Search />
                </IconButton>
                <br/>
                <Toolbar>
                    <ToolbarGroup firstChild={true}>
                        <Checkbox
                            value="white"
                            label={
                                <i className="ms ms-w" style={white}></i>
                            }
                            onCheck={this.props.toggle}
                            style={checkStyle}
                            />
                            <Checkbox
                                value="blue"
                                label={
                                    <i className="ms ms-u" style={blue}></i>
                                }
                                onCheck={this.props.toggle}
                                style={checkStyle}
                                />
                            <Checkbox
                                value="black"
                                label={
                                    <i className="ms ms-b" style={black}></i>
                                }
                                onCheck={this.props.toggle}
                                style={checkStyle}
                                />
                            <Checkbox
                                value="red"
                                label={
                                    <i className="ms ms-r" style={red}></i>
                                }
                                onCheck={this.props.toggle}
                                style={checkStyle}
                                />
                            <Checkbox
                                value="green"
                                label={
                                    <i className="ms ms-g" style={green}></i>
                                }
                                onCheck={this.props.toggle}
                                style={checkStyle}
                                />
                    </ToolbarGroup>
                </Toolbar>
            </div>
        )
    }
}

export default SearchBar;

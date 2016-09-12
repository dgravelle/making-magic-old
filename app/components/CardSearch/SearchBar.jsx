import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Search from 'material-ui/svg-icons/action/search';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

var ManaIcon = function() {
    this.borderRadius = '50%';
    this.color = 'black';
    this.padding = '4px';
}

const white = new ManaIcon();
white.background = 'rgb(248, 246, 216)';

const blue = new ManaIcon();
blue.background = 'rgb(193, 215, 233)';

const black = new ManaIcon();
black.background = 'rgb(186, 177, 171)';

const red = new ManaIcon();
red.background = 'rgba(228,153,119,1)';

const green = new ManaIcon();
green.background = 'rgba(172,211,172,1)';



class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchColors: 9999
        }

    }

    componentDidMonut() {
        console.log(this.state);
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
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <DropDownMenu value="0" onChange={this.props.handleSelection}>
                        <MenuItem value={0} primaryText="2 Color" />
                        <MenuItem value={'white,blue'} primaryText="Azorius">
                            <span className="mana-icons-wrapper" style={{'float':'left'}}>
                                <i className="ms ms-w" style={white}></i>
                                <i className="ms ms-u" style={blue}></i>
                            </span>
                        </MenuItem>
                        <MenuItem value={'blue,black'} primaryText="Dimir">
                            <span className="mana-icons-wrapper" style={{'float':'left'}}>
                                <i className="ms ms-u" style={blue}></i>
                                <i className="ms ms-b" style={black}></i>
                            </span>
                        </MenuItem>
                        <MenuItem value={3} primaryText="Rakdos">
                            <span className="mana-icons-wrapper" style={{'float':'left'}}>
                                <i className="ms ms-b" style={black}></i>
                                <i className="ms ms-r" style={red} ></i>
                            </span>
                        </MenuItem>
                        <MenuItem value={4} primaryText="Gruul">
                            <span className="mana-icons-wrapper" style={{'float':'left'}}>
                                <i className="ms ms-r" style={red}></i>
                                <i className="ms ms-g" style={green}></i>
                            </span>
                        </MenuItem>
                        <MenuItem value={5} primaryText="Selesyna">
                            <span className="mana-icons-wrapper" style={{'float':'left'}}>
                                <i className="ms ms-g" style={green}></i>
                                <i className="ms ms-w" style={white}></i>
                            </span>
                        </MenuItem>
                        <MenuItem value={4} primaryText="Orzhov">
                            <span className="mana-icons-wrapper" style={{'float':'left'}}>
                                <i className="ms ms-w" style={white}></i>
                                <i className="ms ms-b" style={black}></i>
                            </span>
                        </MenuItem>
                        <MenuItem value={7} primaryText="Izzet">
                            <span className="mana-icons-wrapper" style={{'float':'left'}}>
                                <i className="ms ms-u" style={blue}></i>
                                <i className="ms ms-r" style={red} ></i>
                            </span>
                        </MenuItem>
                        <MenuItem value={8} primaryText="Golgari">
                            <span className="mana-icons-wrapper" style={{'float':'left'}}>
                                <i className="ms ms-b" style={black}></i>
                                <i className="ms ms-g" style={green}></i>
                            </span>
                        </MenuItem>
                        <MenuItem value={9} primaryText="Boros">
                            <span className="mana-icons-wrapper" style={{'float':'left'}}>
                                <i className="ms ms-r" style={red} ></i>
                                <i className="ms ms-w" style={white}></i>
                            </span>
                        </MenuItem>
                        <MenuItem value={10} primaryText="Simic">
                            <span className="mana-icons-wrapper" style={{'float':'left'}}>
                                <i className="ms ms-g" style={green}></i>
                                <i className="ms ms-u" style={blue}></i>
                            </span>
                        </MenuItem>

                    </DropDownMenu>
                </ToolbarGroup>
            </Toolbar>
            </div>
        )
    }
}

export default SearchBar;

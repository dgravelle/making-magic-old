import React, { Component } from 'react';
import { Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Clear from 'material-ui/svg-icons/content/clear';

class SideNav extends Component {
    render() {
        return (
            <nav id="sideNav">
                <Drawer
                    docked={true}
                    open={this.props.open}
                    onRequestChange={(open) => this.props.handleRequest(open)}
                >
                    <IconButton onClick={this.props.toggleDrawer}>>
                        <Clear />
                    </IconButton>
                    <MenuItem><Link to="/">Decks</Link></MenuItem>
                    <MenuItem><Link to="/new">New</Link></MenuItem>
                    <MenuItem><Link to="/signup">Signup</Link></MenuItem>
                </Drawer>
            </nav>
        )
    }
}

export default SideNav;

import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Clear from 'material-ui/svg-icons/content/clear';

class SideNav extends Component {
    render() {
        return (
            <Drawer
                open={this.props.open}
            >
                <IconButton onClick={this.props.toggleDrawer}>>
                    <Clear />
                </IconButton>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Decks</MenuItem>
                <MenuItem>Wishlist</MenuItem>
            </Drawer>
        )
    }
}

export default SideNav;

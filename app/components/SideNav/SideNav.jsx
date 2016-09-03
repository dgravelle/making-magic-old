import React, { Component } from 'react';
import { Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Clear from 'material-ui/svg-icons/content/clear';

class SideNav extends Component {
    componentWillMount() {
        console.log(this.props);
    }

    render() {
        return (
            <nav id="sideNav">
                <Drawer
                    docked={false}
                    open={this.props.open}
                    onRequestChange={(open) => this.props.handleRequest(open)}
                    onChange={() => console.log('change')}
                >
                    <IconButton onClick={this.props.toggleDrawer}>>
                        <Clear />
                    </IconButton>
                    <Link to="/" onClick={this.props.toggleDrawer}>
                        <MenuItem>Decks</MenuItem>
                    </Link>
                    <Link to="/new" onClick={this.props.toggleDrawer}>
                        <MenuItem>New</MenuItem>
                    </Link>
                    <Link to="/signup" onClick={this.props.toggleDrawer}>
                        <MenuItem>Signup</MenuItem>
                    </Link>
                </Drawer>
            </nav>
        )
    }
}

export default SideNav;

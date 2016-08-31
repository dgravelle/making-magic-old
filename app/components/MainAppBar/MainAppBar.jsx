import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class MainAppBar extends Component {
    render() {
        return (
            <AppBar
                title="Making Magic"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        )
    }
}

export default MainAppBar;

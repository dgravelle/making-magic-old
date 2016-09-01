import React, { Component } from 'react';
import MainAppBar from '../MainAppBar/MainAppBar.jsx';
import SideNav from '../SideNav/SideNav.jsx';

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.toggleDrawer = this.toggleDrawer.bind(this);

        this.state = {
            drawerOpen: false
        }
    }

    toggleDrawer() {
        let currentState = this.state;
        currentState.drawerOpen = !currentState.drawerOpen;

        this.setState(currentState);
    }

    render() {
        return (
            <div id="dashboard">
                <MainAppBar
                    toggleDrawer={this.toggleDrawer}
                />
                <SideNav
                    open={this.state.drawerOpen}
                    toggleDrawer={this.toggleDrawer}
                    />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Dashboard;

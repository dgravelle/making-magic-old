import React, { Component } from 'react';
import MainAppBar from '../MainAppBar/MainAppBar.jsx';
import SideNav from '../SideNav/SideNav.jsx';

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.handleRequest = this.handleRequest.bind(this);

        this.state = {
            open: false
        }
    }

    handleRequest(open) {
        this.setState({ open : open })
    }

    toggleDrawer() {
        let currentState = this.state;
        currentState.open = !currentState.open;

        this.setState(currentState);
    }

    render() {
        return (
            <div id="dashboard">
                <MainAppBar
                    toggleDrawer={this.toggleDrawer}
                />
                <SideNav
                    open={this.state.open}
                    toggleDrawer={this.toggleDrawer}
                    handleRequest={this.handleRequest}
                    />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Dashboard;

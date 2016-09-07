import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainAppBar from '../MainAppBar/MainAppBar.jsx';
import SideNav from '../SideNav/SideNav.jsx';

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);
        this.handleRequest = this.handleRequest.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);

        this.state = {
            open: false,
            userName: '',
            email: ''
        }
    }

    componentDidMount() {
        
    }

    handleChange(e, key, payload) {
        this.context.router.transitionTo(payload.route);
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
            <MuiThemeProvider>
                <div id="dashboard">
                    <MainAppBar
                        toggleDrawer={this.toggleDrawer}
                    />
                    <SideNav
                        onChange={this.handleChange}
                        open={this.state.open}
                        handleRequest={this.handleRequest}
                        toggleDrawer={this.toggleDrawer}
                        />
                    <main>
                        {this.props.children}
                    </main>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Dashboard;

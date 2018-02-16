import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions/index';

class LoginScreen extends Component {
    state = {
        email: '',
        password: '',
    }

    setEmail = (event) => {
        this.setState({
            ...this.state,
            email: event.target.value,
        });
    }

    setPassword = (event) => {
        this.setState({
            ...this.state,
            password: event.target.value,
        });
    }

    componentDidMount() {
        this.props.checkIfIsAuthenticated();
    }

    render() {
        return (
            <div>
                Email: <input type="text" autoComplete="new-password" onChange={this.setEmail}/> <br />
                Password: <input type="password" autoComplete="new-password" onChange={this.setPassword}/> <br />
                <button onClick={() => {this.props.login(this.state.email, this.state.password)}}>
                    Login
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userIsAuthenticated: state.auth.userIsAuthenticated,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        checkIfIsAuthenticated: () => dispatch(actions.checkIfIsAuthenticated()),
        login: (email, password) => dispatch(actions.loginUser(email, password)),
        createUser: (email, password) => dispatch(actions.createUser(email, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

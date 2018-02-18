import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

import ErrorList from '../../components/ErrorList/ErrorList';

import style from './Login.css';

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
            <div className={style.LoginContainer}>
                <ErrorList errors={this.props.errors} />
                <div className={style.FormWrapper}>
                    <h2>If you don't have an account, you probably don't, just fill the form with your email and password that one will be created automatically</h2>
                    <div className={style.FormItem}>
                        <div className={style.FormLabel}>Email:</div>
                        <div className={style.FormInput}><input type="email" autoComplete="new-password" onChange={this.setEmail}/></div>
                    </div>
                    <div className={style.FormItem}>
                        <div className={style.FormLabel}>Password:</div>
                        <div className={style.FormInput}><input type="password" autoComplete="new-password" onChange={this.setPassword}/></div>
                    </div>

                    <button className={style.SubmitButton} onClick={() => {this.props.login(this.state.email, this.state.password)}}>
                        Login
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userIsAuthenticated: state.auth.userIsAuthenticated,
        errors: state.error.errorList,
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

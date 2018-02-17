import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

import styles from './Layout.css';

import Player from '../../components/Player/Player';
import Menu from '../../components/Menu/Menu';
import Login from '../../containers/Login';
import ErrorList from '../../components/ErrorList/ErrorList';

class Layout extends Component {
    render() {
        if (!this.props.userIsAuthenticated) {
            return (
                <Login />
            );
        }

        const player = (this.props.episode)
            ? <Player
                    podcast={this.props.podcast}
                    episode={this.props.episode}
              />
            : null;

        return(
            <div className={styles.Layout}>
                <ErrorList errors={this.props.errors} />
                <Menu
                    userIsAuthenticated={this.props.userIsAuthenticated}
                    logoutAction={this.props.logout}
                />

                { this.props.children }
                { player }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        podcast: state.podcast.selectedPodcast,
        episode: state.episode.selectedEpisode,
        playing: state.player.playing,
        userIsAuthenticated: state.auth.userIsAuthenticated,
        errors: state.error.errorList,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(actions.logoutUser()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

import styles from './Layout.css';

import Player from '../../components/Player/Player';
import Menu from '../../components/Menu/Menu';
import Login from '../../containers/Login';

class Layout extends Component {
    render() {
        if (!this.props.userIsAuthenticated) {
            return (
                <Login />
            );
        }

        return(
            <div className={styles.Layout}>
                <Menu
                    userIsAuthenticated={this.props.userIsAuthenticated}
                    logoutAction={this.props.logout}
                />
                {this.props.children}
                <Player
                    podcast={this.props.podcast}
                    episode={this.props.episode}
                />
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
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(actions.logoutUser()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

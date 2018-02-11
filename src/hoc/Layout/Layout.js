import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './Layout.css';

import Player from '../../components/Player/Player';

class Layout extends Component {
    render() {
        return(
            <div className={styles.Layout}>
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
    };
}

export default connect(mapStateToProps)(Layout);

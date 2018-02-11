import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from '../components/Menu/Menu';
import Player from '../components/Player/Player';
import EpisodeList from '../components/EpisodeList/EpisodeList';

import * as actions from '../store/actions/index';

class PodcastScreen extends Component {
    componentDidMount() {
        this.props.loadPodcastInfo(this.props.match.params.id);
    }

    render () {
        return (
            <div>
                <Menu />
                <h1>{ this.props.podcast.title }</h1>
                <EpisodeList episodes={this.props.episodes} onSelectEpisode={this.props.playEpisode}/>
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
        episodes: state.episode.episodes,
        podcast: state.podcast.selectedPodcast,
        episode: state.episode.selectedEpisode,
        playing: state.player.playing,
    };
}

const mapDispatchToProps = (dispatch, getState) => {
    return {
        loadPodcastInfo: (podcastId) => dispatch(actions.loadPodcastInfo(podcastId)),
        playEpisode: (episodeId) => {
            dispatch(actions.selectPodcastEpisode(episodeId));
            dispatch(actions.playPodcastEpisode(episodeId));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PodcastScreen);

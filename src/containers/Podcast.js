import React, { Component } from 'react';
import { connect } from 'react-redux';

import EpisodeList from '../components/EpisodeList/EpisodeList';

import * as actions from '../store/actions/index';

import style from '../App.css';

class PodcastScreen extends Component {
    componentDidMount() {
        this.props.selectPodcastEpisodes(this.props.match.params.id);
    }

    render () {
        const episodeList = (this.props.episodes.length)
            ? <EpisodeList episodes={this.props.episodes} onSelectEpisode={this.props.playEpisode}/>
            : null;

        return (
            <div className={style.ContainerWrapper}>
                <div className={style.MainContent}>
                    <h1>{ this.props.podcast.title }</h1>
                    { episodeList }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        episodes: state.episode.selectedEpisodes,
        podcast: state.podcast.selectedPodcast,
        episode: state.episode.selectedEpisode,
        playing: state.player.playing,
    };
}

const mapDispatchToProps = (dispatch, getState) => {
    return {
        selectPodcastEpisodes: (podcastId) => dispatch(actions.selectPodcastEpisodes(podcastId)),
        playEpisode: (episode) => {
            dispatch(actions.selectPodcastEpisode(episode));
            dispatch(actions.playPodcastEpisode(episode));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PodcastScreen);

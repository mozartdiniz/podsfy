import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from '../components/Menu/Menu';
import EpisodeList from '../components/EpisodeList/EpisodeList';

import * as actions from '../store/actions/index';

import style from '../App.css';

class PodcastScreen extends Component {
    componentDidMount() {
        this.props.loadPodcastInfo(this.props.match.params.id);
    }

    render () {
        return (
            <div className={style.ContainerWrapper}>
                <Menu />
                <div className={style.MainContent}>
                    <h1>{ this.props.podcast.title }</h1>
                    <EpisodeList episodes={this.props.episodes} onSelectEpisode={this.props.playEpisode}/>
                </div>
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
        playEpisode: (episode) => {
            dispatch(actions.selectPodcastEpisode(episode));
            dispatch(actions.playPodcastEpisode(episode));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PodcastScreen);

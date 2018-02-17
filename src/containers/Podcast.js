import React, { Component } from 'react';
import { connect } from 'react-redux';

import EpisodeList from '../components/EpisodeList/EpisodeList';
import Loader from '../components/Loader/Loader';

import * as actions from '../store/actions/index';

import style from '../App.css';

class PodcastScreen extends Component {
    componentDidMount() {
        if (this.props.library.length) {
            return;
        }

        this.props.loadRemoteLibrary();
    }

    render () {
        const selectedPodcast = this.props.library.filter((podcast) => podcast.id === this.props.match.params.id);
        const selectedEpisodes = this.props.episodes.filter((episode) => episode.podcast_id === this.props.match.params.id);
        const podcast = (selectedPodcast && selectedPodcast.length) ? selectedPodcast[0] : {};
        const episodeList = (selectedEpisodes.length)
            ? <EpisodeList episodes={selectedEpisodes} onSelectEpisode={this.props.playEpisode}/>
            : null;

        return (
            <div className={style.ContainerWrapper}>
                <div className={style.MainContent}>
                    <Loader show={!selectedEpisodes.length} />
                    <h1>{ podcast.name }</h1>
                    <h3>{ podcast.description }</h3>
                    { episodeList }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        episodes: state.episode.episodes,
        library: state.podcast.library,
        episode: state.episode.selectedEpisode,
        playing: state.player.playing,
    };
}

const mapDispatchToProps = (dispatch, getState) => {
    return {
        playEpisode: (episode) => {
            dispatch(actions.selectPodcastEpisode(episode));
            dispatch(actions.playPodcastEpisode(episode));
        },
        loadRemoteLibrary: () => dispatch(actions.loadRemoteLibrary()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PodcastScreen);

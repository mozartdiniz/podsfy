import React, { Component } from 'react';
import { connect } from 'react-redux';

import PodcastCardList from '../components/PodcastCardList/PodcastCardList';
import SubscribePodcast from '../components/SubscribePodcast/SubscribePodcast';

import style from '../App.css';

class LibraryScreen extends Component {
    render () {
        const cardList = (this.props.podcasts.length)
            ? <PodcastCardList podcasts={this.props.podcasts} />
            : null;

        return (
            <div className={style.ContainerWrapper}>
                <div className={style.MainContent}>
                    <h1>Library</h1>
                    <SubscribePodcast thereArePodcasts={this.props.podcasts.length}/>
                    { cardList }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        podcasts: state.podcast.library,
        podcast: state.podcast.selectedPodcast,
        episode: state.episode.selectedEpisode,
        playing: state.player.playing,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(LibraryScreen);

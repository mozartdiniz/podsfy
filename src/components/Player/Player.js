import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

import style from './Player.css';

class Player extends Component {
    render() {
        return(
            <div className={style.Player}>
                <h2>{(this.props.podcast) ? this.props.podcast.title : null}</h2>
                <h3>{(this.props.episode) ? this.props.episode.title : null}</h3>
                <div dangerouslySetInnerHTML={{__html: this.props.episode.description}}></div>
                <button onClick={() => { this.props.playEpisode(this.props.episode.id); }}>
                    { (this.props.playing) ? 'Pause' : 'Play' }
                </button>
                <audio src={this.props.episode.mp3URL} controls autoPlay />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        episode: state.episode.selectedEpisode,
        playing: state.player.playing,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        playEpisode: (episodeId) => dispatch(actions.playPodcastEpisode(episodeId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);

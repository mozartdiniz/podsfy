import React, { Component } from 'react';
import { connect } from 'react-redux';

import style from './Player.css';

class Player extends Component {
    // Custom player controls
    playPausePlayer = () => {
        if (this.audioTag.paused) {
            this.audioTag.play();
            return;
        }

        this.audioTag.pause();
    }

    render() {
        const { podcast, episode } = this.props;

        return (episode && podcast)
            ? <div className={style.Player}>
                <div className={style.ScrollArea}>
                    <h2 className={style.PodcastName}>{ podcast.name }</h2>
                    <div className={style.ThumbWrapper}>
                        <img src={podcast.thumb} className={style.Thumb} alt={`${podcast.name} thumb`} />
                    </div>
                    <h3 className={style.EpisodeTitle}>{ episode.title }</h3>
                    <div className={style.EpisodeDescription}>{ episode.description }</div>
                    <div className={style.PlayerControls}>
                        <audio src={episode.mp3URL} ref={ (tag) => this.audioTag = tag } controls autoPlay/>
                    </div>
                </div>
              </div>
            : null;
    }
}

/*
    Those methods are intentionally left empty. They will be useful to
    control if the episode was played or not.
*/
const mapStateToProps = state => {
    return {};
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);

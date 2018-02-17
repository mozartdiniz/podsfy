import React from 'react';

import style from './EpisodeListItem.css';

const episodeListItem = (props) => (
    <div className={ style.EpisodeListItem } onClick={() => { props.onSelectEpisode(props.episode) }}>
        <div className={ style.Title }>{ props.episode.title }</div>
        <div className={ style.Duration }>{ props.episode.duration }</div>
    </div>
);

export default episodeListItem;

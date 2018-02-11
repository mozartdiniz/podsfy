import React from 'react';

import style from './EpisodeListItem.css';

const episodeListItem = (props) => (
    <div className={style.EpisodeListItem}>
        <h1>{ props.episode.title }</h1>
        <h1>{ props.episode.mp3URL }</h1>
        <p>{ props.episode.description }</p>
        <button onClick={() => { props.onSelectEpisode(props.episode) }}>
            Play
        </button>
    </div>
);

export default episodeListItem;
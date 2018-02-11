import React from 'react';

import style from './EpisodeListItem.css';

const episodeListItem = (props) => (
    <div className={style.EpisodeListItem}>
        <h2>{ props.episode.title }</h2>

        <button onClick={() => { props.onSelectEpisode(props.episode) }}>
            Play
        </button>
    </div>
);

export default episodeListItem;

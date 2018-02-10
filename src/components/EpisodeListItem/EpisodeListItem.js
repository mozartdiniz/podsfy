import React from 'react';

import style from './EpisodeListItem.css';

const episodeListItem = (props) => (
    <div className={style.EpisodeListItem}>
        <button onClick={() => { props.onSelectEpisode(props.episode.id) }}>
            { props.episode.title }
        </button>
    </div>
);

export default episodeListItem;

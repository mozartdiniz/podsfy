import React from 'react';

import EpisodeListItem from '../EpisodeListItem/EpisodeListItem';

const episodeList = (props) => (
    <div>
        { props.episodes.map((episode) =>
            <EpisodeListItem
                episode={episode}
                onSelectEpisode={props.onSelectEpisode}
            />)
        }
    </div>
);

export default episodeList;

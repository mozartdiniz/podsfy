import React from 'react';

import EpisodeListItem from '../EpisodeListItem/EpisodeListItem';

const episodeList = (props) => (
    <div>
        { props.episodes.map((episode) =>
            <EpisodeListItem
                key={episode.id}
                episode={episode}
                podcast={props.podcast}
                onSelectEpisode={props.onSelectEpisode}
            />)
        }
    </div>
);

export default episodeList;

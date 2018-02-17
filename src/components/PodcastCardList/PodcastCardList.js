import React from 'react';

import PodcastCard from '../PodcastCard/PodcastCard';

const episodeList = (props) => (
    <div>
        { (props.podcasts) ? props.podcasts.map((podcast) =>
        <PodcastCard
            podcast={podcast}
            key={podcast.id}
        />) : null }
    </div>
);

export default episodeList;

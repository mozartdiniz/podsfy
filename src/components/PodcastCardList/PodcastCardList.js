import React from 'react';

import PodcastCard from '../PodcastCard/PodcastCard';

const episodeList = (props) => (
    <div>
        { props.podcasts.map((podcast) => <PodcastCard podcast={podcast} key={podcast.id} />) }
    </div>
);

export default episodeList;

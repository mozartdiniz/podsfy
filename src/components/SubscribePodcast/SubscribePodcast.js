import React from 'react';

import style from './SubscribePodcast.css';

import AddPodcastByFeed from '../AddPodcastByFeed/AddPodcastByFeed';
import Search from '../Search/Search';

const SubscribePodcast = (props) => {
    const initialFragment = (!props.thereArePodcasts)
    ? <span>
        <h3>You have no subscriptions</h3>
        <p className={style.TextInstructions}>Paste the feed URL to add a new podcast to your library</p>
      </span>
    : null;

    return (
        <div>
            { initialFragment }
            <div className={style.FormContainer}>
                <Search />
                <AddPodcastByFeed isLoadingPodcast={props.isLoadingPodcast} />
            </div>
        </div>
    );
};

export default SubscribePodcast;

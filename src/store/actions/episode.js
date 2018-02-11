import * as actionTypes from './actionTypes';

import loadFeed from '../../utils/loadFeed';
import { selectPodcast } from './podcast';

export const loadPodcastInfo = (podcastId) => {
    return (dispatch, getState) => {
        dispatch(selectPodcast(podcastId));
        const { podcast } = getState();

        loadFeed(podcast.selectedPodcast.feedURL).then((feed) => {
            dispatch(savePodcastEpisodes(feed));
        });
    }
};

export const savePodcastEpisodes = (episodes) => {
    return {
        type: actionTypes.SAVE_PODCAST_EPISODES,
        episodes,
    };
};

export const selectPodcastEpisodes = (podcastId) => {
    return {
        type: actionTypes.SELECT_PODCAST_EPISODES,
        podcastId,
    };
};

export const selectPodcastEpisode = (episodeId) => {
    return {
        type: actionTypes.SELECT_PODCAST_EPISODE,
        episodeId,
    };
};

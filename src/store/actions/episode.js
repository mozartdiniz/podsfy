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

export const savePodcastEpisodes = (episodes) => ({
    type: actionTypes.SAVE_PODCAST_EPISODES,
    episodes,
});

export const selectPodcastEpisodes = (podcastId) => ({
    type: actionTypes.SELECT_PODCAST_EPISODES,
    podcastId,
});

export const selectPodcastEpisode = (episode) => ({
    type: actionTypes.SELECT_PODCAST_EPISODE,
    episode,
});

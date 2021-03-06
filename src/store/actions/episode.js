import * as actionTypes from './actionTypes';

import loadFeed from '../../utils/loadFeed';
import database from '../../conf/firebase';

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

export const addEpisodesToFirebase = (userId, podcastId, episodes, errorHandler) => {
    const firebaseEpisodes = database.ref(`/library/${userId}/podcasts/${podcastId}/episodes`);
    firebaseEpisodes.set(episodes).catch(errorHandler);
}

export const savePodcastEpisodes = (episodes) => ({
    type: actionTypes.SAVE_PODCAST_EPISODES,
    episodes,
});

export const selectPodcastEpisode = (episode) => ({
    type: actionTypes.SELECT_PODCAST_EPISODE,
    episode,
});

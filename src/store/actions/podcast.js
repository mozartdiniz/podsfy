import * as actionTypes from './actionTypes';
import { throwError } from './errorHandler';

import loadFeed from '../../utils/loadFeed';

import { savePodcastEpisodes } from './episode';

export const loadPodcastFromFeedURL = (feedURL) => {
    return (dispatch) => {
        dispatch(loadLibrary());

        loadFeed(feedURL)
            .then((data) => {
                dispatch(subscribePodcast(data.podcast));
                dispatch(savePodcastEpisodes(data.episodes));
            })
            .catch((error) => {
                dispatch(throwError(error.message));
            });
    }
};

export const subscribePodcast = (podcast) => ({
    type: actionTypes.SUBSCRIBE_PODCAST,
    podcast,
});

export const loadLibrary = () => ({
    type: actionTypes.LOAD_LIBRARY,
});

export const selectPodcast = (podcastId) => ({
    type: actionTypes.SELECT_PODCAST,
    podcastId,
});

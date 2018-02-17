import * as actionTypes from './actionTypes';
import { throwError } from './errorHandler';

import loadFeed from '../../utils/loadFeed';

export const loadPodcastFromFeedURL = (feedURL) => {
    return (dispatch) => {
        dispatch(loadLibrary());

        loadFeed(feedURL)
            .then((podcast) => {
                dispatch(subscribePodcast(podcast));
            })
            .catch((error) => {
                dispatch(throwError(error.message));
            });
    }
};

export const subscribePodcast = (podcast) => {
    return {
        type: actionTypes.SUBSCRIBE_PODCAST,
        podcast,
    };
}

export const loadLibrary = () => {
    return {
        type: actionTypes.LOAD_LIBRARY,
    };
};

export const selectPodcast = (podcastId) => {
    return {
        type: actionTypes.SELECT_PODCAST,
        podcastId,
    };
};

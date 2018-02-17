import * as actionTypes from './actionTypes';
import { throwError } from './errorHandler';

import loadFeed from '../../utils/loadFeed';
import database from '../../conf/firebase';

import { savePodcastEpisodes } from './episode';

export const loadPodcastFromFeedURL = (feedURL) => {
    return (dispatch, getState) => {
        dispatch(loadLibrary());

        const { uid } = getState().auth;

        loadFeed(feedURL)
            .then((data) => {
                addEpisodeToFirebase(
                    uid,
                    data.podcast,
                    (error) => dispatch(throwError(error.message))
                );
                dispatch(subscribePodcast(data.podcast));
                dispatch(savePodcastEpisodes(data.episodes));
            })
            .catch((error) => {
                dispatch(throwError(error.message));
            });
    }
};

export const loadRemoteLibrary = () => (dispatch, getState) => {
    const { uid } = getState().auth;

    const guestsRef = database.ref(`/library/${uid}`);
    guestsRef.on('child_added', (snapshot) => {
        const firebasePodcasts = snapshot.val();
        const podcasts = Object.keys(firebasePodcasts).map((key) => firebasePodcasts[key]);

        dispatch(saveRemoteLibrary(podcasts));
    });
}

export const saveRemoteLibrary = (podcasts) => ({
    type: actionTypes.SAVE_PODCASTS,
    podcasts,
});

export const addEpisodeToFirebase = (userId, podcast, errorHandler) => {
    const guestsRef = database.ref(`/library/${userId}/podcasts`);
    guestsRef.push(podcast).catch(errorHandler);
}

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

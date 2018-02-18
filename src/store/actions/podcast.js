import * as actionTypes from './actionTypes';
import { throwError } from './errorHandler';

import loadFeed from '../../utils/loadFeed';
import database from '../../conf/firebase';

import { savePodcastEpisodes, addEpisodesToFirebase } from './episode';

export const loadPodcastFromFeedURL = (feedURL) => (dispatch, getState) => {
    const { uid } = getState().auth;
    const statePodcast = getState().podcast.library.find(
        (podcast) => podcast.feedURL === feedURL
    );

    if (statePodcast) {
        dispatch(throwError('You already have this podcast in your library'));
        return;
    }

    dispatch(loadLibrary());

    loadFeed(feedURL)
        .then((data) => {
            dispatch(subscribePodcast(data.podcast));
            dispatch(savePodcastEpisodes(data.episodes));
            addPodcastsToFirebase(
                uid,
                data.podcast,
                (error) => dispatch(throwError(error.message))
            );
            addEpisodesToFirebase(
                uid,
                data.podcast.id,
                data.episodes,
                (error) => dispatch(throwError(error.message))
            );
        })
        .catch((error) => {
            dispatch(throwError(error.message));
        });
}

export const loadRemoteLibrary = () => (dispatch, getState) => {
    const { uid } = getState().auth;

    dispatch(loadLibraryFromFirebase(true));

    database.ref(`/library/${uid}`)
        .once('value')
        .then((snapshot) => {
            const snapshotValue = snapshot.val();

            if (!snapshotValue) {
                dispatch(loadLibraryFromFirebase(false));

                return;
            }

            const firebasePodcasts = snapshotValue.podcasts;
            const podcasts = Object.keys(firebasePodcasts).map((key) => {
                const { description, feedURL, id, name, thumb } = firebasePodcasts[key];

                return {
                    id,
                    name,
                    thumb,
                    feedURL,
                    description
                }
            });

            const episodes = Object.keys(firebasePodcasts).reduce((accumulator, key) => {
                return accumulator.concat(firebasePodcasts[key].episodes);
            }, []);

            dispatch(saveRemoteLibrary(podcasts));
            dispatch(savePodcastEpisodes(episodes));
        });
}

export const saveRemoteLibrary = (podcasts) => ({
    type: actionTypes.SAVE_PODCASTS,
    podcasts,
});

export const addPodcastsToFirebase = (userId, podcast, errorHandler) => {
    const podcastRef = database.ref(`/library/${userId}/podcasts`);

    podcastRef.child(podcast.id).set(podcast).catch(errorHandler);
}

export const subscribePodcast = (podcast) => ({
    type: actionTypes.SUBSCRIBE_PODCAST,
    podcast,
});

export const loadLibrary = () => ({
    type: actionTypes.LOAD_LIBRARY,
});

export const loadLibraryFromFirebase = (loading) => ({
    type: actionTypes.LOAD_LIBRARY_FROM_FIREBASE,
    loading,
});

export const selectPodcast = (podcast) => ({
    type: actionTypes.SELECT_PODCAST,
    podcast,
});

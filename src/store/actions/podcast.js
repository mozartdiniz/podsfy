import * as actionTypes from './actionTypes';

export const searchPodcast = (text) => {
    return {
        type: actionTypes.SEARCH_PODCAST,
        text,
    };
};

export const singPodcast = (id) => {
    return {
        type: actionTypes.SIGN_PODCAST,
        id,
    };
};

export const addNewPodcast = (podcast) => {
    return {
        type: actionTypes.ADD_NEW_PODCAST,
        podcast,
    };
};

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

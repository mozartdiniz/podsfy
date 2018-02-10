import * as actionTypes from './actionTypes';

export const loadPodcastEpisodes = (podcastId) => {
    return {
        type: actionTypes.LOAD_PODCAST_EPISODES,
        podcastId,
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

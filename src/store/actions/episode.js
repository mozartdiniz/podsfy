import * as actionTypes from './actionTypes';

export const loadPodcastEpisodes = (podcastId) => {
    return {
        type: actionTypes.LOAD_PODCAST_EPISODES,
        podcastId,
    };
};

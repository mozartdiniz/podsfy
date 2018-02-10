import * as actionTypes from './actionTypes';

export const playPodcastEpisode = (episodeId) => {
    return {
        type: actionTypes.PLAY_PODCAST_EPISODES,
        episodeId,
    };
};

export const pausePodcastEpisode = (episodeId) => {
    return {
        type: actionTypes.ADD_NEW_PODCAST,
        episodeId,
    };
};

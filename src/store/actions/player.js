import * as actionTypes from './actionTypes';

export const playPodcastEpisode = (episode) => {
    return {
        type: actionTypes.PLAY_PODCAST_EPISODES,
        episode,
    };
};

export const pausePodcastEpisode = (episodeId) => {
    return {
        type: actionTypes.ADD_NEW_PODCAST,
        episodeId,
    };
};

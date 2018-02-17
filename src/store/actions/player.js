import * as actionTypes from './actionTypes';

export const playPodcastEpisode = (episode) => ({
    type: actionTypes.PLAY_PODCAST_EPISODES,
    episode,
});

export const pausePodcastEpisode = (episodeId) => ({
    type: actionTypes.PAUSE_PODCAST_EPISODES,
    episodeId,
});

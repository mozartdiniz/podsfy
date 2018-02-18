import * as actionTypes from '../actions/actionTypes';

const initialState = {
    episodes: [],
    selectedEpisode: null,
    loading: false
};

export const savePodcastEpisodes = (state, action) => {
    if (!action.episodes.length) {
        return state;
    }

    const episodes = state.episodes.filter(
        (episode) => episode.podcast_id !== action.episodes[0].podcast_id
    );

    return {
        ...state,
        episodes: episodes.concat(action.episodes),
    }
};

const selectPodcastEpisode = (state, action) => ({
    ...state,
    selectedEpisode: {
        ...action.episode
    },
});

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SAVE_PODCAST_EPISODES: return savePodcastEpisodes(state, action);
        case actionTypes.SELECT_PODCAST_EPISODE: return selectPodcastEpisode(state, action);
        default: return state;
    }
}

export default reducer;

import * as actionTypes from '../actions/actionTypes';

const initialState = {
    episodes: [],
    selectedEpisodes: [],
    selectedEpisode: null,
    loading: false
};

const savePodcastEpisodes = (state, action) => ({
    ...state,
    episodes: action.episodes.map((episode) => ({
        ...episode
    })),
});

const selectPodcastEpisodes = (state, action) => ({
    ...state,
    selectedEpisodes: {
        ...action.episode
    },
});

const selectPodcastEpisode = (state, action) => ({
    ...state,
    selectedEpisode: {
        ...action.episode
    },
});

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SAVE_PODCAST_EPISODES: return savePodcastEpisodes(state, action);
        case actionTypes.SELECT_PODCAST_EPISODES: return selectPodcastEpisodes(state, action);
        case actionTypes.SELECT_PODCAST_EPISODE: return selectPodcastEpisode(state, action);
        default: return state;
    }
}

export default reducer;

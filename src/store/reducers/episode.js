import * as actionTypes from '../actions/actionTypes';

const initialState = {
    episodes: [],
    selectedEpisode: {},
    loading: false
};

const loadPodcastEpisodes = (state, action) => ({
    ...state,
    selectedEpisode: {
      title: 'Today we gonna speak about something',
    },
    loading: false,
});

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PAUSE_PODCAST_EPISODES: return loadPodcastEpisodes(state, action);
        default: return state;
    }
}

export default reducer;

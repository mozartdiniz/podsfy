import * as actionTypes from '../actions/actionTypes';

const initialState = {
    playing: false
};

const pausePodcastEpisode = (state, action) => ({
    ...state,
    playing: false,
});

const playPodcastEpisode = (state, action) => ({
    ...state,
    playing: true,
});

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PAUSE_PODCAST_EPISODES: return pausePodcastEpisode(state, action);
        case actionTypes.PLAY_PODCAST_EPISODES: return playPodcastEpisode(state, action);
        default: return state;
    }
}

export default reducer;

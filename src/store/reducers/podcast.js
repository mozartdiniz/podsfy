import * as actionTypes from '../actions/actionTypes';

const initialState = {
    library: [],
    selectedPodcast: {},
    loading: false
};

const subscribePodcast = (state, action) => {
    const { podcast } = action.podcast;
    const library = [].concat(state.library);

    library.push(podcast);
    return {
        library,
        selectedPodcast: podcast,
        loading: false,
    }
};

const loadLibrary = (state, action) => ({
    ...state,
    loading: true,
});

const selectPodcast = (state, action) => {
    const podcast = state.library.filter((podcast) => podcast.id === action.podcastId)[0];
    return {
        ...state,
        selectedPodcast: podcast,
    }
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SUBSCRIBE_PODCAST: return subscribePodcast(state, action);
        case actionTypes.LOAD_LIBRARY: return loadLibrary(state, action);
        case actionTypes.SELECT_PODCAST: return selectPodcast(state, action);
        default: return state;
    }
}

export default reducer;

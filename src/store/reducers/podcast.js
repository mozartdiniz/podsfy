import * as actionTypes from '../actions/actionTypes';

const initialState = {
    library: [],
    searchResult: [],
    selectedPodcast: {},
    loading: false,
    loadingFromFirebase: false,
};

const subscribePodcast = (state, action) => {
    const { podcast } = action;
    const library = [].concat(state.library);

    library.push(podcast);
    return {
        ...state,
        library,
        loading: false,
    }
};

const unsubscribePodcast = (state, action) => {
    const libraryWithoutPodcast = state.library.filter((podcast) => podcast.id !== action.podcastId);
    return {
        ...state,
        library: libraryWithoutPodcast,
        loading: false,
    }
};

const loadLibrary = (state, action) => ({
    ...state,
    loading: true,
});

const loadLibraryFromFirebase = (state, action) => ({
    ...state,
    loadingFromFirebase: action.loading,
});

const selectPodcast = (state, action) => {
    return {
        ...state,
        selectedPodcast: action.podcast,
        loading: false,
    }
};

const saveRemoteLibrary = (state, action) => ({
    ...state,
    library: action.podcasts,
    loading: false,
    loadingFromFirebase: false,
});

const saveSearchResults = (state, action) => ({
    ...state,
    searchResult: action.podcasts,
});

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SUBSCRIBE_PODCAST: return subscribePodcast(state, action);
        case actionTypes.LOAD_LIBRARY: return loadLibrary(state, action);
        case actionTypes.LOAD_LIBRARY_FROM_FIREBASE: return loadLibraryFromFirebase(state, action);
        case actionTypes.SELECT_PODCAST: return selectPodcast(state, action);
        case actionTypes.SAVE_PODCASTS: return saveRemoteLibrary(state, action);
        case actionTypes.UNSUBSCRIBE_PODCAST: return unsubscribePodcast(state, action);
        case actionTypes.SAVE_PODCAST_SEARCH_RESULTS: return saveSearchResults(state, action);
        default: return state;
    }
}

export default reducer;

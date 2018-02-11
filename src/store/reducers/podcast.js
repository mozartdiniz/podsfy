import * as actionTypes from '../actions/actionTypes';

const initialState = {
    library: [{
        id: '1',
        title: 'Cinema com Rapadura',
        thumb: 'http://cinemacomrapadura.com.br/imagens/2016/03/20160301-itunes-ccr2.jpg',
    }, {
        id: '2',
        title: 'NerdCast',
        description: 'O mundo vira piada no Jovem Nerd',
        thumb: 'https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg',
    }, {
        id: '3',
        title: 'Podcast MDM'
    }, {
        id: '4',
        title: 'Mamilos'
    }],
    selectedPodcast: {},
    searchResult: [],
    loading: false
};

const searchPodcast = (state, action) => state;

const singPodcast = (state, action) => state;

const addNewPodcast = (state, action) => state;

const loadLibrary = (state, action) => state;

const selectPodcast = (state, action) => {
    const podcast = state.library.filter((podcast) => podcast.id === action.podcastId)[0];
    return {
        ...state,
        selectedPodcast: podcast,
    }
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SEARCH_PODCAST: return searchPodcast(state, action);
        case actionTypes.SIGN_PODCAST: return singPodcast(state, action);
        case actionTypes.ADD_NEW_PODCAST: return addNewPodcast(state, action);
        case actionTypes.LOAD_LIBRARY: return loadLibrary(state, action);
        case actionTypes.SELECT_PODCAST: return selectPodcast(state, action);
        default: return state;
    }
}

export default reducer;

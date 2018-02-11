import * as actionTypes from '../actions/actionTypes';

const initialState = {
    library: [{
        id: '1',
        name: 'NerdCast',
        description: 'O mundo vira piada no Jovem Nerd',
        feedURL: 'https://jovemnerd.com.br/feed-nerdcast/',
        thumb: 'http://is4.mzstatic.com/image/thumb/Music/v4/53/c4/c2/53c4c2b6-60f4-96b7-42d7-f8068b8b4323/source/600x600bb.jpg',
      }, {
        id: '2',
        name: 'CBN - Quatro em Campo',
        description: 'Craques do jornalismo esportivo discutem tudo o que acontece nos gramados com muito humor e descontração. Segunda a sexta, às 16h40.',
        feedURL: 'http://imagens.globoradio.globo.com/cbn/podcast/comentaristas/quatro-em-campo/carlos-eduardo-eboli-paulo-massini-marcos-guiotti-e-andre-sanches-quatro-em-campo.xml',
        thumb: 'http://estaticos.globoradio.globo.com/fotos/2017/02/de1dec3d-33ef-4b4f-9a98-c56592b38099.jpg.3000x3000_q100_box-0%2C0%2C6250%2C6250_detail_upscale.jpg',
      }, {
        id: '4',
        name: 'Love + Radio',
        description: 'Nick van der Kolk’s Love and Radio features in-depth, otherworldly-produced interviews with an eclectic range of subjects, from the seedy to the sublime. Get inside the mind of a rogue taxidermist. Find out what it’s like to experience a stroke firsthand. Or spend time with an artist who gives away her life savings every night. You’ve never heard anything like it before. Love+Radio is a proud member of Radiotopia, from PRX. Learn more at radiotopia.fm.',
        feedURL: 'http://feeds.feedburner.com/loveplusradio?format=xml',
        thumb: 'http://is2.mzstatic.com/image/thumb/Music62/v4/7c/3d/5e/7c3d5ee7-e983-9b03-9688-0acc4428544d/source/600x600bb.jpg',
      }, {
        id: '5',
        name: 'The Complete Guide to Everything',
        description: 'A weekly podcast for knowledge about anything and everything. From North Korea to Nicolas Cage, Tim and Tom leave no stone unturned in their humble quest to make the world a more informed place. Put away the encyclopedia four-eyes because this may just be the last resource youll ever need. Wikipedia, consider yourselves on warning.',
        feedURL: 'http://feeds.feedburner.com/24cast?format=xml',
        thumb: 'http://is1.mzstatic.com/image/thumb/Music62/v4/d4/4c/11/d44c116f-cb11-7afd-c994-e20ec22d77b6/source/600x600bb.jpg',
      }, {
        id: '6',
        name: 'Global News Podcast',
        description: 'The days top stories from BBC News compiled twice daily in the week, once at weekends.',
        feedURL: 'http://www.bbc.co.uk/programmes/p02nq0gn/episodes/downloads.rss',
        thumb: 'http://is2.mzstatic.com/image/thumb/Music71/v4/b4/d3/d5/b4d3d5df-dfa7-b7c4-24a2-431510c284c1/source/600x600bb.jpg',
      }, {
        id: '7',
        name: 'Café Brasil Podcast',
        description: 'Programa Café Brasil, que trata de comportamento, cidadania, política e cultura brasileiras, misturando o melhor da Música Popular Brasileira com reflexões do apresentador, o escritor e palestrante Luciano Pires. Eleito em 2008 e 2009 como o Melhor Podcast de Entretenimento e Variedades no Prêmio Podcast Brasil',
        feedURL: 'http://feed.portalcafebrasil.com.br/tools/podcast.xml',
        thumb: 'http://is4.mzstatic.com/image/thumb/Music62/v4/e8/a8/d9/e8a8d912-c4fa-4f04-090b-418d1ede3e69/source/600x600bb.jpg',
      }, {
        id: '8',
        name: 'RapaduraCast',
        description: 'Informação, diversão e muita opinião sobre cinema.',
        feedURL: 'http://feeds.feedburner.com/rapaduracast?format=xml',
        thumb: 'http://is1.mzstatic.com/image/thumb/Music/v4/85/f5/78/85f57813-a9fc-af88-363a-6acecb11fcfb/source/600x600bb.jpg',
      }, {
        id: '9',
        name: 'Freakonomics Radio',
        description: 'In their books "Freakonomics," "SuperFreakonomics" and "Think Like a Freak", Steven D. Levitt and Stephen J. Dubner  explore "the hidden side of everything," telling stories about cheating schoolteachers and eating champions while teaching us all to think a bit more creatively, rationally, and productively. The Freakonomics Radio podcast, hosted by Dubner, carries on that tradition with weekly episodes. Prepare to be enlightened, engaged, perhaps enraged, and definitely',
        feedURL: 'http://feeds.feedburner.com/freakonomicsradio?format=xml',
        thumb: 'http://is2.mzstatic.com/image/thumb/Music71/v4/7b/a7/41/7ba7414b-4534-3d9a-615e-e00e3d7c7819/source/600x600bb.jpg',
      }, {
        id: '10',
        name: 'Song Exploder',
        description: 'A podcast where musicians take apart their songs, and piece by piece, tell the story of how they were made.',
        feedURL: 'http://feed.songexploder.net/SongExploder?format=xml',
        thumb: 'http://is1.mzstatic.com/image/thumb/Music62/v4/6c/33/ea/6c33eaee-9d65-499e-4a46-edc7edf73bad/source/600x600bb.jpg',
      }, {
        id: '11',
        name: 'Mamilos',
        description: 'Os memes, trending topics e polêmicas da semana no novo podcast do B9',
        feedURL: 'http://feeds.feedburner.com/mamilos?format=xml',
        thumb: 'http://is3.mzstatic.com/image/thumb/Music71/v4/45/ce/80/45ce80f7-d3bf-46c5-a030-57c9d9b8272e/source/600x600bb.jpg',
      }, {
        id: '12',
        name: 'Canal42.tv',
        description: 'Podcast sobre séries da vida, universo e tudo mais.',
        feedURL: 'http://canal42.tv/podcast/feed.xml',
        thumb: 'http://is4.mzstatic.com/image/thumb/Music71/v4/25/aa/ae/25aaae47-329a-e0ef-5c49-151a19b7e72f/source/600x600bb.jpg',
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

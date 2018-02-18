import {
    savePodcastEpisodes,
} from './episode';

const episodes = [{
    title: 'F',
    podcast_id: 1,
}, {
    title: 'G',
    podcast_id: 1,
}];

const episodesTwo = [{
    title: 'W',
    podcast_id: 5,
}, {
    title: 'Z',
    podcast_id: 5,
}]

const state = {
    episodes: [{
        title: 'A',
        podcast_id: 1,
    }, {
        title: 'B',
        podcast_id: 1,
    }, {
        title: 'C',
        podcast_id: 2,
    }, {
        title: 'D',
        podcast_id: 2,
    }, {
        title: 'E',
        podcast_id: 3,
    }]
}

describe('Episode Reducer', () => {
    it('should add new episdes to state', () => {
        const resultedStateOne = savePodcastEpisodes(state, {
            episodes,
        });
        const resultedStateTwo = savePodcastEpisodes(state, {
            episodes: episodesTwo,
        });
        const resultedStateThree = savePodcastEpisodes(state, {
            episodes: [],
        });

        expect(resultedStateOne.episodes[3].podcast_id).toBe(1);
        expect(resultedStateOne.episodes[3].title).toBe('F');
        expect(resultedStateOne.episodes[4].podcast_id).toBe(1);
        expect(resultedStateOne.episodes[4].title).toBe('G');
        expect(resultedStateTwo.episodes[5].podcast_id).toBe(5);
        expect(resultedStateTwo.episodes[5].title).toBe('W');

        expect(resultedStateThree.episodes.length).toBe(5);
    });
});

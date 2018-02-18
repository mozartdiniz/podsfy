import {
    normalizeEpisodeObject,
    extractMP3URL,
    extractDuration
} from './normalizeEpisodeObject';

const dateAsReference = new Date(1518947019663);

const podcast = {
    id: 1,
}

const episodeOne = {
    title: 'Test Podcast',
    description: '<b>Something</b>',
    summary: 'We do not speak anything interesting',
    date: dateAsReference,
    'itunes:duration': {
        '#': '01:34:22',
    },
    enclosures: [{
        url: 'http://nowhere/file.mp3',
    }],
}

const episodeTwo = {
    enclosures: [],
}

const episodeThree = {
    guid: 'http://nowhere/file.mp3',
}

describe('normalizeEpisodeObject', () => {
    it('should extract duration episode info from the episode', () => {

        const durationOne = extractDuration(episodeOne);
        const durationTwo = extractDuration(episodeTwo);

        expect(durationOne).toBe('01:34:22');
        expect(durationTwo).toBe('');
    });

    it('should extract extractMP3URL info from the episode', () => {

        const mp3URLOne = extractMP3URL(episodeOne);
        const mp3URLTwo = extractMP3URL(episodeTwo);
        const mp3URLThree = extractMP3URL(episodeThree);

        expect(mp3URLOne).toBe('http://nowhere/file.mp3');
        expect(mp3URLTwo).toBe(null);
        expect(mp3URLThree).toBe('http://nowhere/file.mp3');
    });

    it('should apply the application episode format to the feed episode', () => {

        const episode = normalizeEpisodeObject(podcast, episodeOne);

        expect(episode.title).toBe('Test Podcast');
        expect(episode.description).toBe('Something');
        expect(episode.summary).toBe('We do not speak anything interesting');
        expect(episode.date).toBe(dateAsReference);
        expect(episode.podcast_id).toBe(1);
    });
});

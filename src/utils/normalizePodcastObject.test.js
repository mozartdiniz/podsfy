import {
    extractName,
    extractDescription,
} from './normalizePodcastObject';

const feedItemOne = {
    meta: {
        'rss:description': {
            '#': 'Super ultra podcast',
        },
        'rss:title': {
            '#': 'Podcast Name',
        }
    }
}

const feedItemTwo = {
    'rss:description': {
        '#': 'Super ultra podcast',
    },
    'rss:title': {
        '#': 'Podcast Name',
    }
}

const feedItemThree = {
    'itunes:keywords': {
        '#': 'Super ultra podcast',
    },
    'itunes:author': {
        '#': 'Podcast Name',
    }
}

const feedItemFour = {
    description: 'Super ultra podcast',
    author: 'Podcast Name'
}

const feedItemFive = {
    description: 'desc 1',
    author: 'Name 1',
    meta: {
        'rss:description': {
            '#': 'desc 2',
        },
        'rss:title': {
            '#': 'Name 2',
        }
    },
    'rss:description': {
        '#': 'desc 3',
    },
    'rss:title': {
        '#': 'Name 3',
    },
    'itunes:author': {
        '#': 'Name 4',
    }
}

describe('normalizePodcastObject', () => {
    it('should extract podcast description from feed', () => {

        const descriptionOne = extractDescription(feedItemOne);
        const descriptionTwo = extractDescription(feedItemTwo);
        const descriptionThree = extractDescription(feedItemThree);
        const descriptionFour = extractDescription(feedItemFour);
        const descriptionFive = extractDescription(feedItemFive);

        expect(descriptionOne).toBe('Super ultra podcast');
        expect(descriptionTwo).toBe('Super ultra podcast');
        expect(descriptionThree).toBe('Super ultra podcast');
        expect(descriptionFour).toBe('Super ultra podcast');
        expect(descriptionFive).toBe('desc 2');
    });

    it('should extract podcast name from feed', () => {

        const nameOne = extractName(feedItemOne);
        const nameTwo = extractName(feedItemTwo);
        const nameThree = extractName(feedItemThree);
        const nameFour = extractName(feedItemFour);
        const nameFive = extractName(feedItemFive);

        expect(nameOne).toBe('Podcast Name');
        expect(nameTwo).toBe('Podcast Name');
        expect(nameThree).toBe('Podcast Name');
        expect(nameFour).toBe('Podcast Name');
        expect(nameFive).toBe('Name 2');
    });
});

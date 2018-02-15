import feedparser from 'feedparser-promised';

import normalizeEpisodeObject from './normalizeEpisodeObject';
import normalizePodcastObject from './normalizePodcastObject';
import URLs from '../conf/URLs';

const loadFeed = (feedURL) => {
    const url = `${URLs.gateway}${feedURL}`;

    return feedparser.parse(url)
        .then((items) => {
            return {
                podcast: normalizePodcastObject(items[0], feedURL),
                episodes: items.map((item) => normalizeEpisodeObject(item)),
            };
        }).catch(error => console.error('error: ', error));
}

export default loadFeed;

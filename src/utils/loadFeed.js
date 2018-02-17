import feedparser from 'feedparser-promised';

import normalizeEpisodeObject from './normalizeEpisodeObject';
import normalizePodcastObject from './normalizePodcastObject';
import URLs from '../conf/URLs';

const loadFeed = (feedURL) => {
    const url = `${URLs.gateway}${feedURL}`;

    return feedparser.parse(url)
        .then((items) => {
            const podcast = normalizePodcastObject(items[0], feedURL);
            const episodes = items.map((item) => normalizeEpisodeObject(podcast, item));

            return {
                podcast,
                episodes,
            }
        });
}

export default loadFeed;

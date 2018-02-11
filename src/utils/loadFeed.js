import feedparser from 'feedparser-promised';

import normalizeEpisodeObject from './normalizeEpisodeObject';
import URLs from '../conf/URLs';

const loadFeed = (feedURL) => {
    const url = `${URLs.gateway}${feedURL}`;

    return feedparser.parse(url)
        .then((items) => {
            return items.map((item) => normalizeEpisodeObject(item));
        }).catch(error => console.error('error: ', error));
}

export default loadFeed;

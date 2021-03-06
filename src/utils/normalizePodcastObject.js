import uuid from 'uuid/v4';

export const normalizePodcastObject = (feedItem, feedURL) => {
    return {
        id: uuid(),
        feedURL,
        ...extractItunesTAGS(feedItem),
    }
}

export const extractItunesTAGS = (feedItem) => ({
    name: extractName(feedItem),
    description: extractDescription(feedItem),
    thumb: feedItem.meta.image.url,
})

export const extractName = (feedItem) => {
    if (feedItem.meta && feedItem.meta['rss:title']) {
        return feedItem.meta['rss:title']['#'];
    }

    if (feedItem.meta && feedItem.meta.image && feedItem.meta.image.title) {
        return feedItem.meta.image.title;
    }

    if (feedItem['rss:title']) {
        return feedItem['rss:title']['#'];
    }

    if (feedItem['itunes:author']) {
        return feedItem['itunes:author']['#'];
    }

    return feedItem.author;
}

export const extractDescription = (feedItem) => {
    if (feedItem.meta && feedItem.meta['rss:description']) {
        return feedItem.meta['rss:description']['#'];
    }

    if (feedItem['rss:description']) {
        return feedItem['rss:description']['#'];
    }

    if (feedItem['itunes:keywords']) {
        return feedItem['itunes:keywords']['#'];
    }

    return feedItem.description;
}

export default normalizePodcastObject;

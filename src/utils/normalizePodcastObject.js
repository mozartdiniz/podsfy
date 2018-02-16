const normalizePodcastObject = (feedItem, feedURL) => {
    return {
        id: new Date().getTime(), // Replace this for a UUID or something
        feedURL,
        ...extractItunesTAGS(feedItem),
    }
}

const extractItunesTAGS = (feedItem) => ({
    name: extractName(feedItem),
    description: extractDescription(feedItem),
    thumb: feedItem.meta.image.url,
})

const extractName = (feedItem) => {
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

const extractDescription = (feedItem) => {
    if (feedItem['rss:description']) {
        return feedItem['rss:description']['#'];
    }

    if (feedItem['itunes:keywords']) {
        return feedItem['itunes:keywords']['#'];
    }

    return feedItem.description;
}

export default normalizePodcastObject;

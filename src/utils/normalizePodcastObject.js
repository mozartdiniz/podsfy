const normalizePodcastObject = (feedItem, feedURL) => {
    return {
        feedURL,
        ...extractItunesTAGS(feedItem),
    }
}

const extractItunesTAGS = (feedItem) => ({
    name: feedItem['itunes:author']['#'],
    description: feedItem['itunes:keywords']['#'],
    thumb: feedItem.meta.image.url,
})


export default normalizePodcastObject;

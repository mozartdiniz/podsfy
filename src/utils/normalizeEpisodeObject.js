import uuid from 'uuid/v4';

const normalizeEpisodeObject = (podcast, episodeFromFeed) => {
    const { title, description, summary, date, pubdate } = episodeFromFeed;
    const normalizedEpisode = {
        id: uuid(),
        title,
        description,
        summary,
        date,
        pubdate,
        podcast_id: podcast.id,
        mp3URL: extractMP3URL(episodeFromFeed),
    }

    return normalizedEpisode;
}

const extractMP3URL = (episodeFromFeed) => {
    const fromEnclosures = (episodeFromFeed.enclosures && episodeFromFeed.enclosures.length)
        ? episodeFromFeed.enclosures[0].url
        : null;

    const fromGuid = episodeFromFeed.guid;

    return fromEnclosures || fromGuid;
}

export default normalizeEpisodeObject;

import uuid from 'uuid/v4';
import strip from 'strip';

export const normalizeEpisodeObject = (podcast, episodeFromFeed) => {
    const { title, description, summary, date, pubdate } = episodeFromFeed;
    const normalizedEpisode = {
        id: uuid(),
        title,
        description: strip(description),
        summary,
        date,
        pubdate,
        duration: extractDuration(episodeFromFeed),
        podcast_id: podcast.id,
        mp3URL: extractMP3URL(episodeFromFeed),
    }

    return normalizedEpisode;
}

export const extractMP3URL = (episodeFromFeed) => {
    const fromEnclosures = (episodeFromFeed.enclosures && episodeFromFeed.enclosures.length)
        ? episodeFromFeed.enclosures[0].url
        : null;

    const fromGuid = episodeFromFeed.guid || null;

    return fromEnclosures || fromGuid;
}

export const extractDuration = (episodeFromFeed) => {
    if (episodeFromFeed['itunes:duration']) {
        return episodeFromFeed['itunes:duration']['#'];
    }

    return '';
}

export default normalizeEpisodeObject;

const normalizeEpisodeObject = (episodeFromFeed) => {
    const { title, description, summary, date, pubdate } = episodeFromFeed;
    const normalizedEpisode = {
        title,
        description,
        summary,
        date,
        pubdate,
    }

    return normalizedEpisode;
}

export default normalizeEpisodeObject;

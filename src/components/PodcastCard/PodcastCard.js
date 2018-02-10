import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './PodcastCard.css';

const podcastCard = (props) => (
    <NavLink to={`/podcast/${props.podcast.id}`} className={style.PodcastCard}>
        <div>{props.podcast.title}</div>
    </NavLink>
);

export default podcastCard;

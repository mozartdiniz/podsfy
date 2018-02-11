import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './PodcastCard.css';

const podcastCard = (props) => (
    <div className={style.PodcastCard}>
        <NavLink to={`/podcast/${props.podcast.id}`} >
            <img src={props.podcast.thumb} alt="Podcast thumbnail"/>
            <div>{props.podcast.title}</div>
        </NavLink>
    </div>

);

export default podcastCard;

import React, { Component } from 'react';

import Menu from '../components/Menu/Menu';
import PodcastCardList from '../components/PodcastCardList/PodcastCardList';

export default class LibraryScreen extends Component {
    podcasts = [{
        id: 1,
        title: 'Rapadura Cast',
    }, {
        id: 2,
        title: 'Jovemnerd',
    }, {
        id: 3,
        title: 'Podcast MDM'
    }, {
        id: 4,
        title: 'Mamilos'
    }];

    render () {
        return (
            <div>
                <h1>Podcasts</h1>
                <Menu />
                <PodcastCardList podcasts={this.podcasts} />
            </div>
        );
    }
}

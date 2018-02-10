import React, { Component } from 'react';

import Menu from '../components/Menu/Menu';

export default class PodcastScreen extends Component {
    podcast = {
        id: 1,
        title: 'Rapadura Cast',
    }

    render () {
        return (
            <div>
                <Menu />
                <div>Podcast name and so on</div>
                <div>Podcast episodes</div>
            </div>
        );
    }
}

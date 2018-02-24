import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

import Loader from '../Loader/Loader';

import style from './Search.css';


class Search extends Component {
    // timer = null;
    state = {
        searchText: '',
    }

    setSearchText = (event) => {
        this.setState({
            searchText: event.target.value,
        }, () => {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.props.searchPodcast(this.state.searchText);
            }, 300);
        });
    }

    cleanSearchText = () => {
        this.setState({
            searchText: '',
        });
    }

    subscribePodcastHandler = (podcast) => {
        this.props.subscribePodcast(podcast.feedURL);
        this.props.cleanSearchResults();
    }

    render() {
        return(
            <div>
                <input
                    type="text"
                    value={this.state.searchText}
                    onChange={this.setSearchText}
                    onBlur={this.cleanSearchText}
                />
                <div>
                    {
                        this.props.searchResult.map((podcast) =>
                            <div
                                key={podcast.feedURL}
                                onClick={() => { this.subscribePodcastHandler(podcast) }}>
                                {podcast.name}
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoadingPodcast: state.podcast.loading,
        searchResult: state.podcast.searchResult,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchPodcast: (podcastName) => dispatch(actions.searchPodcast(podcastName)),
        subscribePodcast: (feedURL) => dispatch(actions.loadPodcastFromFeedURL(feedURL)),
        cleanSearchResults: () => dispatch(actions.savePodcastSearchResults([])),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

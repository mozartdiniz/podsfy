import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

import Loader from '../Loader/Loader';

import style from './AddPodcastByFeed.css';

class AddPodcastByFeed extends Component {
    state = {
        feedURL: '',
    }

    setFeedURL = (event) => {
        this.setState({
            feedURL: event.target.value,
        });
    }

    subscribePodcastButtonHandler = () => {
        this.props.subscribePodcast(this.state.feedURL);
        this.setState({
            feedURL: '',
        });
    }

    render() {
        return(
            <div>
                <input
                    type="text"
                    value={this.state.feedURL}
                    onChange={this.setFeedURL}
                    placeholder="http://podcastfeed.xml"
                />
                <button
                    onClick={ this.subscribePodcastButtonHandler }
                    >Add Podcast
                </button>
                <div className={style.LoaderPlacement}>
                    <Loader show={this.props.isLoadingPodcast} />
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        isLoadingPodcast: state.podcast.loading,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        subscribePodcast: (feedURL) => dispatch(actions.loadPodcastFromFeedURL(feedURL)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPodcastByFeed);

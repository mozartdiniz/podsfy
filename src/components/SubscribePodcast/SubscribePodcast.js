import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

import style from './SubscribePodcast.css';
import Loader from '../Loader/Loader';

class SubscribePodcast extends Component {
    state = {
        feedURL: '',
    }

    setFeedURL = (event) => {
        this.setState({
            ...this.state,
            feedURL: event.target.value,
        });
    }

    subscribePodcastButtonHandler = () => {
        this.props.subscribePodcast(this.state.feedURL);
        this.setState({
            ...this.state,
            feedURL: '',
        });
    }

    render() {
        const initialFragment = (!this.props.thereArePodcasts)
            ? <span>
                <h3>You have no subscriptions</h3>
                <p>Paste the feed URL to add a new podcast to your library</p>
              </span>
            : null;

        return (
            <div>
                { initialFragment }
                <div className={style.FormContainer}>
                    <input
                        type="text"
                        value={this.state.feedURL}
                        onChange={this.setFeedURL}
                        placeholder="http://podcastfeed.xml"
                    />
                    <button
                        onClick={ this.subscribePodcastButtonHandler }
                        >Add Podcast</button>
                    <div className={style.LoaderPlacement}>
                        <Loader show={this.props.isLoadingPodcast} />
                    </div>
                </div>
            </div>
        );
    }
};

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

export default connect(mapStateToProps, mapDispatchToProps)(SubscribePodcast);

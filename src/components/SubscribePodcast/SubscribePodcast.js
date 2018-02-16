import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

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

    render() {
        const initialFragment = (!this.props.thereArePodcasts)
            ? <h3>You have no subscriptions</h3>
            : null;

        return (
            <div>
                { initialFragment }
                <p>Paste the feed URL to add a new podcast to your library</p>
                <input type="text" onChange={this.setFeedURL}/>
                <button onClick={() => { this.props.subscribePodcast(this.state.feedURL) }}>Add</button>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        subscribePodcast: (feedURL) => dispatch(actions.loadPodcastFromFeedURL(feedURL)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubscribePodcast);

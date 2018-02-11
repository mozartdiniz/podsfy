import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Library from './containers/Library';
import Podcast from './containers/Podcast';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
            <Route path="/podcast/:id" exact component={Podcast} />
            <Route path="/" component={Library} />
          </Switch>
      </div>
    );
  }
}

export default App;

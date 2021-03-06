import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import './index.css';

import './conf/firebase';

//Components
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import episodeReducer from './store/reducers/episode';
import playerReducer from './store/reducers/player';
import podcastReducer from './store/reducers/podcast';
import authReducer from './store/reducers/auth';
import errorHandler from './store/reducers/errorHandler';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    episode: episodeReducer,
    player: playerReducer,
    podcast: podcastReducer,
    auth: authReducer,
    error: errorHandler,
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

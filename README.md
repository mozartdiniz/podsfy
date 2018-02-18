# Podsfy
Podsfy is a web based podcast player.

## Clonning and running

```
git clone git@github.com:mozartdiniz/podsfy.git
```

### Installing dependencies
```
yarn install
```
### Setting up

**Podsfy** uses Firebase as persistence, so before running it for the first time, it is necessary to setup Firebase credentials. To do so, just go to **/modify/src/conf/firebase.js** and change it with your credentials.

```javascript
const config = {
    apiKey: 'AIzaSyATYFNEFFSDFDDqtIFAXSXJBWqYKuv2xq84',
    authDomain: 'yourapp.firebaseapp.com',
    databaseURL: 'https://yourapp.firebaseio.com',
    projectId: 'yourapp',
    storageBucket: 'yourapp.appspot.com',
    messagingSenderId: '234443344433'
};
```

### Running
```
yarn start
``` 

## Troubleshooting

### Error: Error watching file for changes: EMFILE when running tests

For Mac OS users it can be solve installing watchman.

```
brew install watchman
```

## TODO

This application is a work in progress. The following features are the items which I consider that needs to be done or are requiring more attention.

- [ ] Unsubscribe Podcast
- [ ] Refresh feed
- [ ] Mark episode as played / pending
- [ ] Final player layout and functions (currently is just a HTML audio tag)
- [ ] Final layout - general
- [ ] List of possible podcast to subscribe (Currently the user need to know the feed URL, I want to change this to a list of possible podcasts)
- [ ] Search podcasts and episodes - locally
- [ ] Profile page
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

### Enabling authentication method on Firebase

Podsfy is using Firebase's email authentication, it is necessary to enable this authentication method before use it.

 - In the left menu click on Project Overview
 - Unde the Develop group, click on Authentication item
 - After that, click on Sign-in Method tab.
 - Enable the Email/Password authentication method.


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
- [ ] Mobile version
- [ ] PWA

# Demo

https://podsfy-dev.firebaseapp.com/

# Some Podcast feed URLs that will make your life easier

## English

**WTF with Marc Maron**  
http://wtfpod.libsyn.com/rss

**Criminal**  
http://feeds.thisiscriminal.com/CriminalShow?format=xml

**Song Explorer**  
http://feed.songexploder.net/SongExploder?format=xml

**All Songs Considered (NPR)**  
https://www.npr.org/rss/podcast.php?id=510019

**Reply All**  
http://feeds.gimletmedia.com/hearreplyall?format=xml

**Beautiful Stories From Anonymous People**  
http://rss.earwolf.com/beautiful-anonymous

**Freakonomics Radio**  
http://feeds.feedburner.com/freakonomicsradio?format=xml

**Love + Radio**  
http://feeds.feedburner.com/loveplusradio?format=xml

**The Complete Guide to Everything**  
http://feeds.feedburner.com/24cast?format=xml

**Global News Podcast**  
http://www.bbc.co.uk/programmes/p02nq0gn/episodes/downloads.rss


## Portuguese

**Café Brasil Podcast**  
http://feed.portalcafebrasil.com.br/tools/podcast.xml

**NerdCast**  
https://jovemnerd.com.br/feed-nerdcast/

**RapaduraCast**  
http://feeds.feedburner.com/rapaduracast?format=xml

**Mamilos**  
http://feeds.feedburner.com/mamilos?format=xml

**Canal42.tv**  
http://canal42.tv/podcast/feed.xml

**Podcast MdM – Melhores do Mundo**  
http://feeds.feedburner.com/MdMPodcast?format=xml


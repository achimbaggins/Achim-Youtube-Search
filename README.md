# Achim-Youtube-Search
simple NPM to search youtube video,  tested in React and Vue

## How to install
  ```
  npm install --save achim-youtube-search

  ```



## How to use
<dl>
  <dt>Tested in React and VueJS</dt>
</dl>

```

var achimYoutubeSearch = require("achim-youtube-search")

const API_KEY = 'AIzaSyAOQu0HKYfp8i87F4C_T7f30eUpE2itpzT8c'

var searchKeyword = 'doraemon'


achimYoutubeSearch({key: API_KEY, search: searchKeyword}, (data) => {

console.log('fetch result ', data)

})

```

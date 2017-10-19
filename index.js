var axios = require('axios');

module.exports = function (options, callback) {
  if (!options.key) {
    throw new Error('Please use a valid key');
  }

  var params = {
    part: 'snippet',
    key: options.key,
    q: options.search,
    type: 'video'
  };

  axios.get('https://www.googleapis.com/youtube/v3/search', { params: params })
    .then(function(response) {
      if (callback) { callback(response.data.items); }
    })
    .catch(function(error) {
      console.error(error);
    });
};

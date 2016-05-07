var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    //?q=' + options.query + '&key=' + options.key + '&maxResults=' + options.max,
    // dataType: 'text',
    // key: options.key,
    // q: options.query,
    // maxResults: options.max,
    data: { key: options.key, 
            q: options.query, 
            maxResults: options.max, 
            part: 'snippet',
            type: 'video'
          },
    videoEmbeddable: "true",

    success: function (response) {
      // console.log('success');
      if (callback) {
        callback(response.items);
      }

      return response.items;
    },
    error: function (error) {
      console.log('fail');
      console.log(error);
    },
    complete: function () {
    }
  });

  
};

window.searchYouTube = searchYouTube;



//https://www.googleapis.com/youtube/v3/search?q=react&key=AIzaSyArTFU28LER9mDYQMQ4jFSzrBQde1gf1C8&maxResults=5&key=AIzaSyArTFU28LER9mDYQMQ4jFSzrBQde1gf1C8&query=react&max=5
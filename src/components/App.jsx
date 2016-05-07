class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      allVideos: exampleVideoData
    };
  }

  componentDidMount() {
    var options = {key: window.YOUTUBE_API_KEY, query: 'react', max: 5};
    var context = this;
    this.props.searchYouTube(options, function(response) {
      context.setState({
        allVideos: response
      });
    });
  }

  render() {
    return (
      <div>
        <Nav onFetchQuery= {this.fetchQuery.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div  className="col-md-5">
          <VideoList videos={this.state.allVideos} onClickEvent= {this.onVideoItemClick.bind(this)}/>
        </div>
      </div>   
    );
  }


  onVideoItemClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  fetchQuery(query) {
    var options = {key: window.YOUTUBE_API_KEY, query: query, max: 5};
    var context = this;
    this.props.searchYouTube(options, function(response) {
      context.setState({
        allVideos: response
      });
    });
  }


  // onSearchItemSubmit() {
  //   //grab query from searchbar
  //   //var query = ...

  //   this.setState({
  //     allVideos: searchYoutube({key: YOUTUBE_API_KEY, query: query, max: 5})
  //   })}
  // }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

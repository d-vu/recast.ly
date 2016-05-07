class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      allVideos: exampleVideoData
    };
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div  className="col-md-5">
          <VideoList videos={this.state.allVideos} onClick= {this.onVideoItemClick}/>
        </div>
      </div>   
    );
  }

  onVideoItemClick() {
    console.log('something clicked', this);
    // this.setState({
    //   currentVideo: //something
    // })
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

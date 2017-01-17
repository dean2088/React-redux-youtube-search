import React,{Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_KEY='AIzaSyARQFJx1Invz3og3kTkjLqVztHbn7aheUA';
/*
YTSearch({key:API_KEY,term:'surfboards'},function(data){
  console.log(data);
});
*/
//Create a new component. This component should produce
//some HTML
//es6 const, final value, never change, can't define again
//different way of es6 to define a function: fat arrow
class App extends Component {

  constructor(props){
    super(props);

    this.state={videos:[],selectedVideo:null};

    this.videoSearch('surfboards');
  }

  videoSearch(term){
    YTSearch({key:API_KEY,term:term},(videos) => {
      //this.setState({videos:videos}); the same clean up the code
      this.setState({videos:videos,selectedVideo:videos[0]});
    });
  }

  //pass the onVideoSelect to VideoList
  //get the value and set the selectedVideo's value
  render(){

    const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

//Take this component's generated HTML and put it
//on the page(in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));

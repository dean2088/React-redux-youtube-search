import React from 'react';

const VideoDetail = ({video}) =>{
  //incase undefine value
  if(!video){
    return <div>Loading...</div>;
  }
  const videoId=video.id.videoId;
  //const url = 'https://www.youtube.com/embed/'+videoId;
  //on the left of the 1 keyboard (se6)
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div>{video.snippet.title}</div>
      <div>{video.snippet.description}</div>
    </div>
  );
};

export default VideoDetail;

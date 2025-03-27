import React from 'react';
import '../csstype/Video.css';

const Video = () => {
  return (
    <section className="connect">
      <video
        className="video-container"
        autoPlay
        muted
        loop
        playsInline
 
      >
        <source src="/video/eye.mp4" type="video/mp4" />
        Sorry, your browser does not support embedded videos.
      </video>

      
    </section>
  );
};

export default Video;



import React from "react";
import ReactPlayer from "react-player";

const Video = () => {
  return (
    <div className="mt-8">
      {/*  <video loop autoPlay>
        <source
          src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> */}

      <video autoPlay muted>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=wWgIAphfn2U"
          className=" "
        />
      </video>
    </div>
  );
};

export default Video;

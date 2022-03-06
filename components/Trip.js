import React, { useEffect, useRef } from "react";

const Trip = () => {
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 5000);
  }, []);

  return (
    <div className=" ">
      <video
        className=""
        id="background-video"
        loop
        autoPlay
        muted
        style={{
          position: "relative",
          width: "100%",
          height: "15rem",
          left: 0,
          top: 0,
        }}
      >
        <source
          src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Trip;

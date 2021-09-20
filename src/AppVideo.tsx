import React, { useState } from "react";

export default function App() {
  const [showVideo, setShowVideo] = useState(true);
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        paddingTop: 100,
      }}
    >
      <button onClick={() => setShowVideo(!showVideo)}>
        {showVideo ? "Hide" : "Show"} Video
      </button>
      {showVideo && (
        <video
          width="700"
          height="500"
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          autoPlay
          controls
        ></video>
      )}
    </div>
  );
}

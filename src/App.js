import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
function App() {
  const [video, setVideos] = useState([]);
  async function getVideos() {
    const videoColletions = collection(db, "videos");
    const videoSnapshot = await getDocs(videoColletions);
    const videosList = videoSnapshot.docs.map((doc) => doc.data());
    setVideos(videosList);
  }
  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="App">
      <div className="app__videos">
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

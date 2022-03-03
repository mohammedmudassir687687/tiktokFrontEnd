import React, { useEffect, useState } from 'react';
import axios from './axios';
import './App.css';
import Video from "./Video";

function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('/v2/posts')
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  }, []);

  return (
    // BEM naming convention
    <div className="app">
      <div className="app__videos">
        {videos.map(({url, channel, description, song, likes, messages, shares, _id}) => (
          <Video
            key={_id}
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={parseInt(likes)}
            messages={parseInt(messages)}
            shares={parseInt(shares)}
          />
        ))}
      </div>
      
    {/* app container */}
      {/* videos */}
      {/* <Video/> */}
      {/* <Video/> */}
      {/* <Video/> */}
      {/* <Video/> */}

    </div>
  );
}

export default App;

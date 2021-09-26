import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
    
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('buildings');
    
    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);
    
    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    {/* Use 11 out of the default 16 columns to show the video detail */}
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    {/* Use 5 out of the default 16 columns to show the video detail */}
                    <div className="five wide column">
                        <VideoList
                            // Same as: onVideoSelect={setSelectedVideo}
                            onVideoSelect={(video) => setSelectedVideo(video)}
                            videos={videos}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default App;
import React from 'react';
import {useState,useEffect} from 'react-hooks'
import SearchBar from './components/searchbar/index'
import axios from 'axios';
import VideoList from '../src/components/videoList/index'
import VideoDetail from '../src/components/videoDetail/index'
import useVideos from '../src/customHooks/useVideos'
import './App.css';



const App = ()=>{
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos,search] = useVideos('shiv')

  useEffect(()=>{
    setSelectedVideo(videos[0]);
  },[videos]);

  return (
    <div className="ui conatiner">
      <SearchBar onFormSubmit = {search}/>
      <VideoDetail video = {selectedVideo}/> 
      {/* <VideoList videos = {videos} onVideoSelect = {(video)=>{setSelectedVideo(video)}} /> */}
      {/* same as above  whenrever you have single parameter*/}
      <VideoList videos = {videos} onVideoSelect = {setSelectedVideo} /> 
      
        I have {videos.length} videos
    </div>
  );
}

export default App;

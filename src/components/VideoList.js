import React from "react";
import VideoItem from "./VideoItem";


const VideoList=props=>{

const videoList=props.videos.map(video=>{
	return <VideoItem video={video} 
	key={video.id.videoId}
	videoSelect={props.videoSelect}/> 
	
})

	return(<div className="ui relaxed divided list">
					{videoList}
		</div>)

}
export default VideoList;
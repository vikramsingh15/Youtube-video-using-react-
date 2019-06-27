import React from "react";
import "./VideoItem.css"

const VideoItem=props=>{
	const {snippet}=props.video;

	const videoClick=()=>{
		
			props.videoSelect(props.video);
	}

	return(

		<div onClick={videoClick} className="item video-item">
				<img src={snippet.thumbnails.medium.url} 
				alt={snippet.title} className="ui image" id="videoListImage"/>
				<div className="content">
					<div className="header">
							{snippet.title}
					</div>
					
				</div>
		</div>)
}



export default VideoItem;
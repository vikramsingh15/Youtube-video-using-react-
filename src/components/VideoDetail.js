import React from "react";
const link="https://www.youtube.com/embed/";

const VideoDetail=({video})=>{
	
	if(!video){

		return <div>loading...............</div>
	}
		return(

				<div>
					<div className="ui embed">
							<iframe width="420" height="345" src={link+video.id.videoId} 
							title={video.snippet.title}>

							</iframe>
							
					</div>
					<div className="ui segment">
							<div className="ui header">{video.snippet.title}</div>
							<div className="content">{video.snippet.description}</div>
					</div>
				</div>
				

			

			)
	}
	


export default VideoDetail;

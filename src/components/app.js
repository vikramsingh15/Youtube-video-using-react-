import React from "react";
import SearchBar from "./SearchBar";
import Youtube from "../api/youtube";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

class App extends React.Component{
	state={videos:[],video:null}

	componentDidMount(){
		this.getVideo("building")
	}

	getVideo=async (query)=>{
		const videoArray=await Youtube.get("/search",{
			params:{
				q:query
			}
		});
	this.setState({videos:videoArray.data.items});
	this.setState({video:videoArray.data.items[0]})
	}

	videoSelect=(video)=>{
			this.setState({video:video});
	}

	render(){
		return(
			<div className="ui container">

				<SearchBar onFormSubmit = {this.getVideo} />
				<div className="ui stackable grid">
						<div className="row">
								<div className="eleven wide column">
												<VideoDetail video={this.state.video} />
								</div>
								<div className="five wide column">
										<VideoList videos={this.state.videos} 
										videoSelect={this.videoSelect}/>		
								</div>
						</div>

				</div>
				
				
				
			</div>
		)
	}
}
export default App;
import React from "react";


class SearchBar extends React.Component{


	state={query:""};
	
	onChangeEvent=event=>this.setState({query:event.target.value});
		
	onSubmitEvent=event=>{
		event.preventDefault();
		this.props.onFormSubmit(this.state.query)
	}		
	

	render(){
		return(
	
					<div className="ui segment">
						<form action="" className="ui form" onSubmit={this.onSubmitEvent}>

							<div className="field">
								<input type="text"placeholder="Search video" 
								onChange={this.onChangeEvent} value={this.state.query}/>				
							</div>
						</form>
					</div>
					
					
		
			)
	}

}
export default SearchBar;
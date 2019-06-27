import Axios from "axios";
const KEY="Api_key"


export default Axios.create({
	baseURL:"https://www.googleapis.com/youtube/v3",
	params:{
		part:"snippet",
		maxResults:5,
		
		key:KEY

	}
})

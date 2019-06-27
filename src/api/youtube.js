import Axios from "axios";
const KEY="AIzaSyCa9sBX3oSmGjc-gycgCDmF9TIW1GUXs70"


export default Axios.create({
	baseURL:"https://www.googleapis.com/youtube/v3",
	params:{
		part:"snippet",
		maxResults:5,
		
		key:KEY

	}
})
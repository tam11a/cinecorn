import axios from "axios";

const instance = axios.create({
	baseURL: "https://yts.mx/api/v2/",
	// timeout: 1000,
});

export default instance;

import axios from 'axios';

const API_URL = 'https://us-central1-smartgas-5d7f5.cloudfunctions.net/api/';

const instance = axios.create({
	baseURL: API_URL
});

export default instance;

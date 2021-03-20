import axios from 'axios';

class JSONPlaceholderService {
    constructor() {
        this.apiUrl = JSONPlaceholderService.getApiUrl();
    }

    static getApiUrl = () => {
        return 'https://jsonplaceholder.typicode.com';
    };

    getPosts = async (age) => {
        const url = '/posts';
        const response = await axios.get(`${this.apiUrl}${url}`);
        return response;
    };

}

export default JSONPlaceholderService;
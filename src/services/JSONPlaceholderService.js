import axios from 'axios';

class JSONPlaceholderService {
    constructor() {
        this.apiUrl = JSONPlaceholderService.getApiUrl();
    }

    static getApiUrl = () => {
        return 'https://jsonplaceholder.typicode.com';
    };

    getPosts = async () => {
        const url = '/posts';
        const response = await axios.get(`${this.apiUrl}${url}`);
        return response;
    };

    deletePost = async (id) => {
        const url = '/posts/';
        const response = await axios.delete(`${this.apiUrl}${url}${id}`)
        return response;
    }

    patchPost = async (id, data) => {
        const url = '/posts/';
        const response = await axios.patch(`${this.apiUrl}${url}${id}`, data, {
            headers: {
                contentType: `application/json; charset=UTF-8`,
            },
        })
        return response;
    }

    addPost = async (data) => {
        const url = '/posts';
        const response = await axios.post(`${this.apiUrl}${url}`, data, {
            headers: {
                contentType: `application/json; charset=UTF-8`,
            },
        })
        return response;
    }

    updatePost = async (id, data) => {
        const url = '/posts/';
        const response = await axios.put(`${this.apiUrl}${url}${id}`, data, {
            headers: {
                contentType: `application/json; charset=UTF-8`,
            },
        })
        return response;
    }

}

export default JSONPlaceholderService;
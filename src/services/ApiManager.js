import axios from 'axios';

export default class ApiManager {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://127.0.0.1/planner_API/',
        });
    }

    async sendToSignIn(formData) {
        try {
            const postData = new FormData();
            postData.append('email', formData.username);
            postData.append('password', formData.password);

            const response = await this.api.post('login.php', postData);


            if (response.data) {
                return response.data;
            }
        } catch (error) {
            console.error('Error signing in:', error);
        }
    }
    async addToTasks(formData) {
        try {
            const postData = new FormData();
            const data=JSON.stringify(formData)
            postData.append('task', data);
            const response = await this.api.post('addTask.php', postData);


            if (response.data) {
                return response.data;
            }
        } catch (error) {
            console.error('Error signing in:', error);
        }
    }
}

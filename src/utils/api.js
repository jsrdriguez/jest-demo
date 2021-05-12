import axios from 'axios';


export const getApiUsers = async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/users');
}
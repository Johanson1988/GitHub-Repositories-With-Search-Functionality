import axios from 'axios';

export const getUsersData = (username: string):any => {
        return axios.get(`https://api.github.com/users/${username}`)
        .then(data => data)
        .catch(() => null)
    };
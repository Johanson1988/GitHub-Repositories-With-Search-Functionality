import axios from 'axios';

export const getUsersData = (username: string):any =>
    axios.get(`https://api.github.com/users/${username}`)
        .then(data => {
            return {login: data.data.login, imgSrc: data.data.avatar_url}
        })
        .catch(() => null);

export const getReposData = (username: string):any => 
    axios.get(`https://api.github.com/users/${username}/repos`)
        .then(data => {

            return data.data.map((repo: { name: string; description: string; }) => {
                return {name: repo.name, description: repo.description}
            });
        })
        .catch(() => null);
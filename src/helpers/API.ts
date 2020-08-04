import axios from 'axios';

export const getUsersData = (username: string):any => {
        return axios.get(`https://api.github.com/users/${username}`)
        .then(data => data)
        .catch(() => null)
    };

    axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
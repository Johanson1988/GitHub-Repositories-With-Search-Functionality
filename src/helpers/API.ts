import axios from 'axios';

/** @const  {function} getUsersData API call to Github to get user data, then 
 * object is filtered to pass only username and avatar url. */

export const getUsersData = (username: string):any =>
    axios({
        method: 'post', //you can set what request you want to be
        url: 'https://api.github.com/graphql',
        data: { query: `query {

            user(login:"${username}") {
                login
                avatarUrl
                repositories(first: 100, orderBy: {field:NAME, direction:ASC}) {
                    nodes {
                        name
                        description
                        }
                    }
                }
            }` 
        },
        headers: {
            Authorization: 'Bearer dd6897540c7cf344b92716679173b905ddc7943d'
        }
    }).then(data => data.data.data.user)
    .catch(() => null)

/** @const  {function} getReposData API call to Github to get repositories data, then 
 * object is filtered to pass only name and description. */

export const getReposData = (username: string):any => 
    axios.get(`https://api.github.com/users/${username}/repos`)
        .then(data => {

            return data.data.map((repo: { name: string; description: string; }) => {
                return {name: repo.name, description: repo.description}
            });
        })
        .catch(() => null);
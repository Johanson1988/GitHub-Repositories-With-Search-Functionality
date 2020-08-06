import axios from 'axios';

/** @const  {function} getUsersData API call to Github GraphQL API using a query to return:
 * - username
 * - avatar picture
 * - repositories' names
 * - repositories' descriptions
*/

export const getUsersData = (username: string):any =>
    axios({
        method: 'post',
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
# GitHub Repositories With Search Functionality - `README.md` 

## Description

The task is to display the repositories and allow the user to filter through the repositories by name using a search bar. 
Use the [official GitHub API](https://docs.github.com/en/rest) to fetch repositories per user.

![GitHub repo image](/src/images/github-readme.png)

## Requirements

- The application must be written using React
- You are required to use git for versioning
- Feel free to use any additional plugin/module to help you get the task done more
effectively
- Google Chrome is the testing browser

## Extra credits

- +1 if you write tests
- +1 If your [code is documented](https://google.github.io/styleguide/jsguide.html#jsdoc)
- +1 If you’re up for the challenge, use the [v4 API](https://docs.github.com/en/graphql), which is built using GraphQL.

## Tech Stack Used

- ReacjJS
- Typescript
- TDD for testing
- MaterializeCSS
- Github RestAPI
- Github GraphQL API
- Axios
- MockAxiosAdapter
- Responsive

## User Stories

- **404:** Displayed when the user is not found

- **User Search:** Search bar to look for Github users

- **User view:** Shows user repositories

# Client / Frontend

## Routes (React App)
| Path                      | Component            | Permissions | Behavior                                                     |
| ------------------------- | -------------------- | ----------- | ------------------------------------------------------------ |
| `/`                       | HomePage              | public     | Home page - Displays Github search bar |

## Components

Main
 * Homepage

Layout
 * 404
 * Loading

User
 * UserSearchBar
 * UserDetails
 
Repositories
 * RepositoriesContainer
 * ReposSearchBar
 * RepoListElement

## API Endpoints (backend routes)

### GraphQL Endpoint

- https://api.github.com/graphql

### GraphQL query

```sh
    query {
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
        }
```

### REST Endpoints

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `https://api.github.com/users/:username`           | {username}                | 200            | 404          | Gets user info          |
| GET        | `https://api.github.com/users/:username/repos`                | {username}      | 200            | 404          | Gets user's repositories |

## Installation instructions

Requires [Node.js](https://nodejs.org/) v4+ to run.

In your command line, please type the following commands:

```sh
$ git clone https://github.com/Johanson1988/GitHub-Repositories-With-Search-Functionality.git
$ cd github-repositories-with-search-functionality
$ npm i
$ npm run start
```
## Testing instructions

```sh
$ npm run test
```

## REST Mode

```sh
$ git checkout REST-Mode
```

## Links

### Trello

[Trello Board](https://trello.com/b/7CPtRRzO/github-repo-mvst) 

### Git

[Github Link](https://github.com/screeeen/project-client)

[Deployed App Link](http://heroku.com)

## Author
* Johann Moreno Noda
* [Linkedin](https://www.linkedin.com/in/johannmoreno/)
* [Web Portfolio](https://web-portfolio-johann-moreno.herokuapp.com/)
* [Github Repo](https://github.com/Johanson1988?tab=stars)
* [CodeWars](https://www.codewars.com/users/johanson88)
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

## User Stories

- **404:** Displayed when the user is not found

- **User Search:** Search bar to look for Github users

- **User view:** Shows you user repositories

# Client / Frontend

## Routes (React App)
| Path                      | Component            | Permissions | Behavior                                                     |
| ------------------------- | -------------------- | ----------- | ------------------------------------------------------------ |
| `/`                       | HomePage              | public     | Home page - Displays Github search bar |
| `/user/:username`         | RepoDetails           | public   | Displays user repositories info |

## Pages

- Homepage
- UserRepositories

## Components

- 404
- UserSearchBar
- UserDetails
- ReposDetails

## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `https://api.github.com/users/:username`           | {username}                | 200            | 404          | Gets user info          |
| GET        | `https://api.github.com/users/:username/repos`                | {username}      | 200            | 404          | Gets user's repositories |

## Links

### Trello

[Trello Board](https://trello.com/b/7CPtRRzO/github-repo-mvst) 

### Git

[Github Link](https://github.com/screeeen/project-client)

[Deployed App Link](http://heroku.com)
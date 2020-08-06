import React from 'react';

/**Import testing library */
import { render, fireEvent, wait } from '@testing-library/react';
import HomePage from '../pages/Homepage';

/** Import axios for http request */
import axios from 'axios';
/** Import axios mock to avoid many API calls during testing */
import MockAxios from 'axios-mock-adapter';
import Repositories from '../components/RepositoriesContainer';
/** Example Object to mock API calls */
import exampleReposObject from '../helpers/example-repos-object';

/** Increase timeout to avoid timeout errors */
jest.setTimeout(30000);

const mock = new MockAxios(axios, { delayResponse: Math.random() * 500 });
afterAll(() => mock.restore());


test("Input search bar recieves user input", () => {
    /**
     * TEST IF:
     *  -Input bar is in the document
     *  -User types, input gets the right value
     *  -User types a valid username, username is displayed in the DOM
     *  -Valid username, component NotFound is not displayed
     */
    
    const { getByLabelText, queryByText } = render(
        <HomePage />
    );
    const input = getByLabelText("Introduce a Github username:");
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'johanson1988'} });
    expect(input.value).toBe('johanson1988');
    
    expect(queryByText("Johanson1988")).not.toBeInTheDocument();
    expect(queryByText("404 NOT FOUND")).not.toBeInTheDocument();
    

});

test("Renders user details after submitting a valid username", async() => {

    /**
     * Mock axios call returning dummy object with valid username
     * 
     * TEST IF:
     *  -After receiving data from API, username is displayed in the DOM
     *  -After receiving data from API, component NotFound is not displayed
     *  -After receiving data from API, picture is in the DOM
     */

    mock.onPost().reply(200, {
        data: {
            user: {
                login: "johanson1988",
                avatarUrl: "dummy",
                repositories: { nodes: [] } 
            }
        }
    });

    const { queryByText, getByTestId, getByAltText } = render(
        <HomePage />
    );

    const searchBarForm = getByTestId("user-searchbar");
    expect(queryByText("johanson1988")).not.toBeInTheDocument();
    fireEvent.submit(searchBarForm);
    
    await wait (() => expect(queryByText("johanson1988")).toBeInTheDocument());
    await wait (() => expect(queryByText("404 NOT FOUND")).not.toBeInTheDocument());
    await wait (() => expect(getByAltText("user-profile")).toBeInTheDocument());

});

test("Renders 404 message after submitting invalid username", async() => {

    /**
     * Mock axios call returning dummy object with valid username
     * 
     * TEST IF:
     *  -After receiving null from API, username is NOT displayed in the DOM
     *  -After receiving null from API, component NotFound is displayed
     */

    mock.onPost().reply(200, null);
    const { queryByText, getByTestId, } = render(
        <HomePage />
    );

    const searchBarForm = getByTestId("user-searchbar");
    fireEvent.submit(searchBarForm);

    await wait (() => expect(queryByText("Johanson1988")).not.toBeInTheDocument());
    await wait (() => expect(queryByText("404 NOT FOUND")).toBeInTheDocument());
});

test("Displays repos list after submitting valid username", async() => {

    /**
     * Passing an example Object as a Prop to Repositories
     * 
     * TEST IF:
     *  -repos-container is not empty
     *  -repos-container lenght is equal to exampleReposObject length
     */
    
    const { container, queryByTestId } = render(
        <Repositories repositories={exampleReposObject} />
    );
    
    await wait (()=> expect(queryByTestId("repos-container")).not.toBeEmpty());
    
    await wait(()=> expect(container.querySelectorAll(".repo-li-element").length).toBe(exampleReposObject.length));
});

test("Repositories container is not rendered if wrong username submitted", async() => {

    /**
     * Mock axios call returning dummy empty object
     * 
     * TEST IF:
     *  -After receiving empty username repos-container is NOT in the DOM
     *  -After receiving empty username repos-searchbar is NOT in the DOM
     */

    mock.onPost().reply(200, {
        data: {
            user: {
                login: "",
                avatarUrl: "",
                repositories: { nodes: [] } 
            }
        }
    });

    const { queryByTestId, } = render(
        <HomePage />
    );

    await wait (()=> expect(queryByTestId("repos-container")).not.toBeInTheDocument());
    await wait (() => expect(queryByTestId("repos-searchbar")).not.toBeInTheDocument());
});

test("Search bar is present if valid username submitted and working as expected", async() => {

    /**
     * Passing an example Object as a Prop to Repositories and simulating user types "-tu"
     * in the filter
     * 
     * TEST IF:
     *  -searchbar is in the DOM
     *  -searchbar value is equal to filter
     *  -repos-container lenght is equal to filtered exampleReposObject
     */

    const { container, getByLabelText } = render(
        <Repositories repositories={exampleReposObject} />
    );

    const filter:string = "-tu";
    const filteredReposLength = exampleReposObject.filter(
        repoElement => repoElement.name.toLowerCase().includes(filter.toLowerCase())
    ).length;
    
    await wait (() => expect(getByLabelText("Repo's searchbar")).toBeInTheDocument());
    await wait (() => fireEvent.change(getByLabelText("Repo's searchbar"), { target: { value: filter} }));
    await wait (() => expect(getByLabelText("Repo's searchbar").value).toBe(filter));
    await wait (()=> expect(container.querySelectorAll(".repo-li-element").length).toBe(filteredReposLength));
    
});
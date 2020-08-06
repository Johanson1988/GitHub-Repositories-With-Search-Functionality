import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import HomePage from './../pages/Homepage';

import axios from 'axios';
import MockAxios from 'axios-mock-adapter';
import Repositories from '../components/RepositoriesContainer';

import exampleReposObject from '../helpers/example-repos-object';


jest.setTimeout(30000);

const mock = new MockAxios(axios, { delayResponse: Math.random() * 500 });
afterAll(() => mock.restore());

test("Input search bar recieves user input", () => {
    
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
    mock.onGet().reply(200, {
        login: "johanson1988",
        avatarUrl: "dummy",
        repositories: { nodes: [] }
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
    mock.onGet().reply(200, null);
    const { queryByText, getByTestId, } = render(
        <HomePage />
    );

    const searchBarForm = getByTestId("user-searchbar");
    fireEvent.submit(searchBarForm);

    await wait (() => expect(queryByText("Johanson1988")).not.toBeInTheDocument());
    await wait (() => expect(queryByText("404 NOT FOUND")).toBeInTheDocument());

    //TODO Añadir test que compare la longitud de la lista de repositorios con la longitud del objeto de la API

});

test("Displays repos list after submitting valid username", async() => {
    

    const { container, queryByTestId } = render(
        <Repositories repositories={exampleReposObject} />
    );
    
    await wait (()=> expect(queryByTestId("repos-container")).not.toBeEmpty());
    
    await wait(()=> expect(container.querySelectorAll(".repo-li-element").length).toBe(exampleReposObject.length));
});

test("Repos list is empty if submitted wrong user name", async() => {
    mock.onGet().reply(200, []);

    const { queryByTestId, } = render(
        <Repositories repositories={[]} />
    );

    await wait (()=> expect(queryByTestId("repos-container")).toBeEmpty());
    await wait(() => expect(queryByTestId("repos-searchbar")).not.toBeInTheDocument());
});

test("Search bar is present if valid username submitted", async() => {
    mock.onGet().reply(200, exampleReposObject);

    const { container, getByLabelText } = render(
        <Repositories repositories={exampleReposObject} />
    );
    
    await wait(() => expect(getByLabelText("Repo's searchbar")).toBeInTheDocument());
    await wait (() => fireEvent.change(getByLabelText("Repo's searchbar"), { target: { value: '-tu'} }));
    await wait (() => expect(getByLabelText("Repo's searchbar").value).toBe('-tu'));
    await wait(()=> expect(container.querySelectorAll(".repo-li-element").length).toBe(1));
    
});
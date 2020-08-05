import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import HomePage from './../pages/Homepage';
import axios from 'axios';
import MockAxios from 'axios-mock-adapter';
jest.setTimeout(30000);

const mock = new MockAxios(axios, { delayResponse: Math.random() * 500 });
afterAll(() => mock.restore());

test("Renders h1 message", () => {
    const { getByTestId } = render(
        <HomePage /> 
    );
    expect(getByTestId("homepage__title")).toHaveTextContent("Welcome");
});

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
        login: "johanson1988"
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
    await wait (() => expect(queryByText("Repositories")).toBeInTheDocument());

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
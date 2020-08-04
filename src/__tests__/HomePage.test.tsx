import React from 'react';
import { render, fireEvent, wait, getByTestId } from '@testing-library/react';
import HomePage from './../pages/Homepage';
import axios from 'axios';
import MockAxios from 'axios-mock-adapter';

const mock = new MockAxios(axios, { delayResponse: Math.random() * 500 });

test("Renders h1 message", () => {
    const { getByTestId } = render(
        <HomePage /> 
    );
    expect(getByTestId("homepage__title")).toHaveTextContent("Welcome");
});



test("Input search bar recieves user input", () => {
    
    const { getByLabelText, queryByText, getByTestId } = render(
        <HomePage />
    );
    const input = getByLabelText("Introduce a Github username:");
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'johanson1988'} });
    expect(input.value).toBe('johanson1988');
    
    expect(queryByText("Johanson1988")).not.toBeInTheDocument();
    expect(queryByText("404 NOT FOUND")).not.toBeInTheDocument();
    

});

test("Renders username after submitting a valid username", () => {
    mock.onGet().reply(200, {
        login: "johanson1988"
    });

    const { queryByText, getByTestId } = render(
        <HomePage />
    );

    const searchBarForm = getByTestId("user-searchbar");
    fireEvent.submit(searchBarForm);

    wait (() => expect(queryByText("Johanson1988")).toBeInTheDocument());
    wait (() => expect(queryByText("404 NOT FOUND")).not.toBeInTheDocument());

});
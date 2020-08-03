import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './../pages/Homepage';

test("Renders h1 message", () => {
    const { getByTestId } = render(
        <HomePage /> 
    );
    expect(getByTestId("homepage__title")).toHaveTextContent("Welcome");
});

test("Input search bar recieves user input", () => {
    const { getByLabelText } = render(
        <HomePage />
    )
    expect(getByLabelText("Introduce a Github username:")).toBeInTheDocument();
})
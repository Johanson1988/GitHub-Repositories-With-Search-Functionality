import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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
    const input = getByLabelText("Introduce a Github username:");
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'a'} });
    expect(input.value).toBe('a');

});
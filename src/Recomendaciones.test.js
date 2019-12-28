import React from 'react';
import Recomendaciones from './Recomendaciones';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

let container = document.createElement("div");

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it ("renders Recomendaciones withput crashing", () => {
    act(() => {
        render(<Recomendaciones />, container);
    });
})

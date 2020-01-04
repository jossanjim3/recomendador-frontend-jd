import React from 'react';
import ListaNegraRecomendaciones from './ListaNegraRecomendaciones';
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
        render(<ListaNegraRecomendaciones />, container);
    });

    expect(container.hasChildNodes()).toBe(true);
    expect(container).toEqual(expect.anything());
    //expect(container.find('table')).toEqual(true);

})

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Hello from ".";

let container:HTMLDivElement | null = null;
beforeEach(() => {
    // met en place un élément DOM comme cible de rendu
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // nettoie en sortie de test
    if(container) {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    }
});

it("s’affiche avec ou sans nom", () => {
    act(() => {
        render(<Hello />, container);
    });
    expect(container?.textContent).toBe("Salut, étranger");

    act(() => {
        render(<Hello name="Jenny" />, container);
    });
    expect(container?.textContent).toBe("Bonjour, Jenny !");

    act(() => {
        render(<Hello name="Margaret" />, container);
    });
    expect(container?.textContent).toBe("Bonjour, Margaret !");
});